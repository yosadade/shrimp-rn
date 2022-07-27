import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Header, Gap, Button, SearchBar, Label} from '../../components';
import {colors} from '../../utils';
import {ICFacebook, ICMesssenger, ICTwitter, ICWhatsapp} from '../../assets';

const DiseaseDetail = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title="Info Penyakit" onPress={() => navigation.goBack()} />
        <Gap height={16} />
        <SearchBar />
        <Gap height={6} />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.titleBtn}>Lihat Semua Penyakit</Text>
        </TouchableOpacity>
        <Gap height={32} />
        <Text style={styles.titleBlue}>Penyakit paling dicari</Text>
        <Gap height={16} />
        <View style={styles.wrapperSelectDisease}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Button
              type="primary"
              title="Bintik Hitam"
              bgColor={colors.blue2}
              color={colors.white}
              mr={6}
            />
            <Button
              type="primary"
              title="EHP/HPM"
              bgColor={colors.blue2}
              color={colors.white}
              mr={6}
            />
            <Button
              type="primary"
              title="WFD"
              bgColor={colors.blue2}
              color={colors.white}
              mr={6}
            />
            <Button
              type="primary"
              title="YHD"
              bgColor={colors.blue2}
              color={colors.white}
              mr={6}
            />
            <Button
              type="primary"
              title="Insang"
              bgColor={colors.blue2}
              color={colors.white}
              mr={6}
            />
            <Button
              type="primary"
              title="Bintik Hitam"
              bgColor={colors.blue2}
              color={colors.white}
              mr={6}
            />
          </ScrollView>
        </View>
        <Gap height={32} />
        <View style={styles.content}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>Black Spot Disease</Text>
            <Text style={styles.subTitle}>(Bintik Hitam)</Text>
            <Gap height={16} />
            <View style={styles.wrapperEditor}>
              <Text>12 Juni 2019</Text>
              <Gap width={4} />
              <Text>|</Text>
              <Gap width={4} />
              <Text>JALA</Text>
            </View>
            <Gap height={16} />
            <View style={styles.wrapperSosmed}>
              <View style={styles.wrapperShares}>
                <Text style={styles.totalShares}>2</Text>
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
              <Button
                type="sosmed"
                bgColor={colors.blue3}
                icon={<ICTwitter />}
              />
              <Button
                type="sosmed"
                bgColor={colors.blue4}
                icon={<ICMesssenger />}
              />
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.wrapper}>
            <Text style={styles.titleBlack}>Indikasi Penyakit</Text>
            <Label
              title="Nama"
              subtitle="Black Spot Disease atau bintik hitam pada udang"
            />
            <Label
              title="Tanda-tanda klinis"
              subtitle="Black Spot Disease atau bintik hitam pada udang"
            />
            <Label
              title="Nama"
              subtitle="Black Spot Disease atau bintik hitam pada udang"
            />
            <Image source={null} style={styles.image} />
          </View>
        </View>
      </ScrollView>
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
    margin: 12,
    marginTop: 0,
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
    fontStyle: 'italic',
    color: colors.blue,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.blue,
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
  titleContent: {
    fontSize: 18,
    paddingHorizontal: 24,
  },
  btnSubmit: {
    height: 40,
    marginHorizontal: 12,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBtn: {
    color: colors.white,
  },
  titleBlack: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleBlue: {
    fontSize: 18,
    marginLeft: 12,
    fontWeight: 'bold',
    color: colors.blue,
  },
  image: {
    width: '100%',
    height: 170,
    backgroundColor: colors.grey,
  },
  wrapperSelectDisease: {
    flexDirection: 'row',
  },
});
