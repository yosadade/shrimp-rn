import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Axios from 'axios';
import {colors} from '../../utils';
import {API_HOST} from '../../config';
import {Gap, NewsCard} from '../../components';

const Disease = () => {
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
    Axios.get(`${API_HOST.uri}/diseases?per_page=15&page=1`, {
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
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Info Penyakit</Text>
        <Gap height={12} />
        {data.map((item, idx) => {
          // console.log(item);
          return (
            <NewsCard
              key={idx}
              title={`${item?.full_name} (${item?.short_name})`}
              image={item?.image}
              subTitle={item?.meta_description}
              date={item?.updated_at}
              onPress={() => navigation.navigate('DiseaseDetail', item)}
              onShare={onHandleShare(item.id)}
            />
          );
        })}
        <Gap height={150} />
      </ScrollView>
    </View>
  );
};

export default Disease;

const styles = StyleSheet.create({
  page: {
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
