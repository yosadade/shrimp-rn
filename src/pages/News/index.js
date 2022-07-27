import {ScrollView, StyleSheet, Text, View, Alert, Share} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Axios from 'axios';
import {colors} from '../../utils';
import {Gap, NewsCard} from '../../components';
import {API_HOST} from '../../config/API';

const News = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const onShare = id => {
    const options = {
      title: `https://app.jala.tech/posts/${id}`,
      message: `https://app.jala.tech/posts/${id}`,
      url: `https://app.jala.tech/posts/${id}`,
    };
    try {
      Share.share(options);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    Axios.get(`${API_HOST.uri}/posts?per_page=15&page=1&with=creator`, {
      headers: {
        Authorization: API_HOST.authorization,
      },
    })
      .then(res => {
        const fetchData = res.data.data;
        setData(fetchData);
      })
      .catch(err => {
        Alert.alert(err);
      });
  }, []);

  return (
    <View style={styles.pages}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Kabar Terbaru</Text>
        <Gap height={12} />
        {data.map((item, idx) => {
          console.log(item.id);
          return (
            <NewsCard
              key={idx}
              title={item?.title}
              image={item?.image}
              subTitle={item?.excerpt}
              date={item?.updated_at}
              onPress={() => navigation.navigate('NewsDetail', item)}
              onShare={() => onShare(item.id)}
            />
          );
        })}
        <Gap height={150} />
      </ScrollView>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  pages: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold',
  },
});
