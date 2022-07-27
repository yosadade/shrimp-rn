import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment';
import 'moment/locale/id'; // without this line it didn't work
import {colors} from '../../../utils';
import {Gap, Button, Badge} from '../..';

const PriceCard = ({
  avatar,
  verified,
  date,
  company,
  province,
  regency,
  price,
}) => {
  const dateFormat = moment(date).locale('id').format('LL');
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.wrapperAvatar}>
          <Image
            source={{uri: `https://app.jala.tech/storage/${avatar}`}}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.titleBlue}>Supplier</Text>
            <Text>{company}</Text>
          </View>
        </View>
        {verified ? <Badge type="verified" /> : <Badge />}
      </View>
      <Gap height={8} />
      <Text style={styles.titleBlue}>{dateFormat}</Text>
      <Gap height={8} />
      <Text style={styles.titleProvince}>{province}</Text>
      <Text style={styles.titleBlack}>{regency}</Text>
      <Gap height={8} />
      <View style={styles.wrapperBottom}>
        <View>
          <Text style={styles.titleBlue}>size 100</Text>
          <Text style={styles.titleBlack}>IDR {price}</Text>
        </View>
        <Button
          type="primary"
          title="LIHAT DETAIL"
          bgColor={colors.blue}
          color={colors.white}
        />
      </View>
    </View>
  );
};

export default PriceCard;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginBottom: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperAvatar: {
    flexDirection: 'row',
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
  titleBlack: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  titleProvince: {
    textTransform: 'capitalize',
  },
  wrapperBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
