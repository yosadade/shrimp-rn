import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {colors} from '../../utils';
import {Badge, Gap, Header, PriceCard} from '../../components';
import {API_HOST} from '../../config/API';

const PriceDetail = () => {
  const [data, setData] = useState(data);
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
      <Header title="Harga Udang" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Nusa Tenggara Barat</Text>
          <Text style={styles.subTitle}>Sumba</Text>
        </View>
        <Gap height={3} bgColor={colors.grey} />
        <View style={styles.wrapper}>
          <View>
            <Text>company</Text>
            <View style={styles.wrapperAvatar}>
              <Image
                source={{uri: `https://app.jala.tech/storage/${null}`}}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.titleBlue}>Supplier</Text>
                <Text>company</Text>
              </View>
            </View>
            <Gap height={6} />
            <Text>Kontak</Text>
            <Text style={styles.title}>+6285853662XX</Text>
          </View>

          <Badge type="verified" />
        </View>

        <Gap height={150} />
      </ScrollView>
    </View>
  );
};

export default PriceDetail;

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.grey,
    justifyContent: 'space-between',
  },
  content: {
    backgroundColor: colors.white,
    padding: 24,
  },
  wrapper: {
    padding: 24,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  wrapperAvatar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 12,
    backgroundColor: colors.grey,
  },
  titleBlue: {
    fontSize: 14,
    fontWeight: '300',
    textTransform: 'capitalize',
    color: colors.blue,
  },
});
