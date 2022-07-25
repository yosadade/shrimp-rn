import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Header, Gap, Button} from '../../components';
import {colors} from '../../utils';
import {ICFacebook, ICMesssenger, ICTwitter, ICWhatsapp} from '../../assets';

const DiseaseDetail = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <Header title="Info Penyakit" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            Tambak Udang Berpotensi Mencemari Lingkungan
          </Text>
          <Gap height={16} />
          <View style={styles.wrapperEditor}>
            <Text style={styles.titleEdior}>Jala</Text>
            <Gap width={4} />
            <Text>|</Text>
            <Gap width={4} />
            <Text>Wildan Gayuh Zulfikar</Text>
          </View>
          <Text>30 Januari 2020</Text>
          <Gap height={16} />
          <View style={styles.wrapperSosmed}>
            <View style={styles.wrapperShares}>
              <Text style={styles.totalShares}>210</Text>
              <Text style={styles.titleShares}>Shares</Text>
            </View>
            <Button
              type="sosmed"
              bgColor={colors.green}
              icon={<ICWhatsapp />}
            />
            <Button
              type="sosmed"
              bgColor={colors.blue2}
              icon={<ICFacebook />}
            />
            <Button type="sosmed" bgColor={colors.blue3} icon={<ICTwitter />} />
            <Button
              type="sosmed"
              bgColor={colors.blue4}
              icon={<ICMesssenger />}
            />
          </View>
          <Gap height={16} />
        </View>
        <Image source={null} style={styles.image} />
        <Gap height={24} />
        <Text style={styles.titleContent}>
          Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang
          ditempatkan untuk mendemostrasikan elemen grafis atau presentasi
          visual seperti font, tipografi, dan tata letak
        </Text>
      </View>
    </View>
  );
};

export default DiseaseDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.grey,
  },
  content: {
    flex: 1,
    margin: 12,
    marginBottom: 0,
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.grey,
    backgroundColor: colors.white,
  },
  wrapper: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  wrapperEditor: {
    flexDirection: 'row',
  },
  titleEdior: {
    fontWeight: 'bold',
  },
  wrapperSosmed: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperShares: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  totalShares: {
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 15,
  },
  titleShares: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 170,
    backgroundColor: colors.blue,
  },
  titleContent: {
    fontSize: 18,
    paddingHorizontal: 24,
  },
});
