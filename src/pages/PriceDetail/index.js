import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/id'; //
import Axios from 'axios';
import {colors} from '../../utils';
import {Badge, Button, Gap, Header, PriceList} from '../../components';
import {API_HOST} from '../../config/API';

const PriceDetail = ({route}) => {
  const [data, setData] = useState({});
  console.log(data.remark);

  const id = route.params;
  const navigation = useNavigation();
  const dateFormat = moment(data?.creator?.date).locale('id').format('LL');

  const handlePress = useCallback(async () => {
    await Linking.openURL(`tel:${data?.creator?.phone}`);
  }, [data]);

  useEffect(() => {
    Axios.get(
      `${API_HOST.uri}/shrimp_prices/${id}?with=region,creator&region_id=`,
    )
      .then(res => {
        const fetchData = res.data.data;
        setData(fetchData);
      })
      .catch(err => {
        Alert.alert(err);
      });
  }, [id]);

  return (
    <View style={styles.pages}>
      <Header title="Harga Udang" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>{data?.region?.province_name}</Text>
          <Text style={styles.subTitle}>{data?.region?.regency_name}</Text>
        </View>
        <Gap height={3} bgColor={colors.grey} />
        <View style={styles.wrapper}>
          <View style={styles.wrapperDate}>
            <Text>{dateFormat}</Text>
            {data?.creator?.buyer ? <Badge type="verified" /> : <Badge />}
          </View>
          <Gap height={12} />
          <View style={styles.wrapperAvatar}>
            <Image
              source={{
                uri: `https://app.jala.tech/storage/${data?.creator?.avatar}`,
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.titleBlue}>Supplier</Text>
              <Text style={styles.titleCompany}>{data?.creator?.name}</Text>
            </View>
          </View>
          <Gap height={12} />
          <View style={styles.wrapperDate}>
            <View>
              <Text>Kontak</Text>
              <Text style={styles.title}>{data?.creator?.phone}</Text>
            </View>
            <Button
              type="primary"
              title="Hubungi"
              bgColor={colors.blue}
              color={colors.white}
              onPress={handlePress}
            />
          </View>
          <Gap height={18} />
          <Text style={styles.title}>Daftar Harga</Text>
          <PriceList size="20" price={data?.size_20} />
          <PriceList size="30" price={data?.size_30} />
          <PriceList size="40" price={data?.size_40} />
          <PriceList size="50" price={data?.size_50} />
          <PriceList size="60" price={data?.size_60} />
          <PriceList size="70" price={data?.size_70} />
          <PriceList size="80" price={data?.size_80} />
          <PriceList size="90" price={data?.size_90} />
          <PriceList size="100" price={data?.size_100} />
          <PriceList size="110" price={data?.size_110} />
          <PriceList size="120" price={data?.size_120} />
          <PriceList size="130" price={data?.size_130} />
          <PriceList size="140" price={data?.size_140} />
          <PriceList size="150" price={data?.size_150} />
          <PriceList size="160" price={data?.size_160} />
          <PriceList size="170" price={data?.size_170} />
          <PriceList size="180" price={data?.size_180} />
          <PriceList size="190" price={data?.size_190} />
          <PriceList size="200" price={data?.size_200} />
          <Gap height={18} />
          <Text style={styles.title}>Catatan</Text>
          <Gap height={12} />
          <Text>{data?.remark}</Text>
          <Gap height={12} />
        </View>
      </ScrollView>
    </View>
  );
};

export default PriceDetail;

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  content: {
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  wrapper: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: colors.white,
  },
  wrapperDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperAvatar: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  titleCompany: {
    fontSize: 16,
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
  },
  wrapperPriceList: {
    paddingHorizontal: 24,
  },
});
