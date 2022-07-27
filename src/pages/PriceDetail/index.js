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

  const id = route.params;
  const navigation = useNavigation();
  const dateFormat = moment(data?.created_at).locale('id').format('LL');

  const handlePress = useCallback(async () => {
    await Linking.openURL(`tel:${data?.creator?.phone}`);
  }, [data]);

  useEffect(() => {
    Axios.get(
      `${API_HOST.uri}/shrimp_prices/${id}?with=region,creator&region_id=`,
    )
      .then(res => {
        const fetchData = res.data.data;
        console.log(fetchData);
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
          <Text style={styles.title}>Nusa Tenggara Barat</Text>
          <Text style={styles.subTitle}>Sumba</Text>
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
              source={{uri: `https://app.jala.tech/storage/${null}`}}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.titleBlue}>Supplier</Text>
              <Text style={styles.titleCompany}>Mina Udang Barokah</Text>
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
          <PriceList size={20} price={97000} />
          <PriceList size={30} price={97000} />
          <PriceList size={40} price={97000} />
          <PriceList size={50} price={97000} />
          <PriceList size={60} price={97000} />
          <PriceList size={70} price={97000} />
          <PriceList size={80} price={97000} />
          <PriceList size={80} price={97000} />
          <PriceList size={80} price={97000} />
          <PriceList size={80} price={97000} />
          <PriceList size={80} price={97000} />
          <PriceList size={80} price={97000} />
          <PriceList size={80} price={97000} />
          <PriceList size={80} price={97000} />
          <PriceList size={80} price={97000} />
          <Gap height={18} />
          <Text style={styles.title}>Catatan</Text>
          <Gap height={12} />
          <Text>
            LLorem ipsum, atau ringkasnya lipsum, adalah teks standar yang
            ditempatkan untuk mendemostrasikan elemen grafis atau presentasi
            visual seperti font,
          </Text>
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
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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
