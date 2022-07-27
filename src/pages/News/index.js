import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Axios from 'axios';
import {colors} from '../../utils';
import {Gap, NewsCard} from '../../components';
import {API_HOST} from '../../config/API';

const News = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const onHandleShare = id => {
    // try {
    //   const result = Share.share({
    //     message: `https://app.jala.tech/posts/${id}`,
    //   });
    //   if (result.action === Share.sharedAction) {
    //     if (result.activityType) {
    //     } else {
    //     }
    //   } else if (result.action === Share.dismissedAction) {
    //   }
    // } catch (error) {
    //   Alert.alert(error.message);
    // }
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
        console.log(err);
      });
  }, []);
  console.log(data[0]);
  return (
    <View style={styles.pages}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Kabar Terbaru</Text>
        <Gap height={12} />
        {data.map((item, idx) => {
          // console.log(item);
          return (
            <NewsCard
              key={idx}
              title={item?.title}
              image={item?.image}
              subTitle={item?.excerpt}
              date={item?.updated_at}
              onPress={() => navigation.navigate('NewsDetail', item)}
              onShare={onHandleShare(item.id)}
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
