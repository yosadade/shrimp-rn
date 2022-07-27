import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils';
import {Gap, PriceCard} from '../../components';
import {API_HOST} from '../../config/API';

const Price = () => {
  const [data, setData] = useState(data);
  const navigation = useNavigation();

  useEffect(() => {
    Axios.get(
      `${API_HOST.uri}/shrimp_prices?per_page=15&page=1&with=region,creator&region_id=`,
    )
      .then(res => {
        const fetchData = res.data.data;
        console.log(fetchData[0].creator);
        setData(fetchData);
      })
      .catch(err => {
        const statusErr = err;
        console.log(statusErr);
      });
  }, []);
  return (
    <View style={styles.pages}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Harga Terbaru</Text>
        <Gap height={12} />
        {data?.map((item, idx) => {
          return (
            <PriceCard
              key={idx}
              verified={item.creator.phone_verified}
              company={item.creator.company}
              avatar={item.creator.avatar}
              date={item.created_at}
              province={item.region.province_name}
              regency={item.region.regency_name}
              price={item.size_100}
              onPress={() => navigation.navigate('PriceDetail', item)}
            />
          );
        })}
        <Gap height={150} />
      </ScrollView>
    </View>
  );
};

export default Price;

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
    textAlign: 'center',
  },
});
