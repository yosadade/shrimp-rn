import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {Gap, Button, Badge} from '../..';

const PriceCard = ({type}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.wrapperAvatar}>
          <Image source={null} style={styles.avatar} />
          <View>
            <Text style={styles.titleBlue}>Supplier</Text>
            <Text>Mina Udang Barokah</Text>
          </View>
        </View>
        {type === 'verified' ? <Badge type="verified" /> : <Badge />}
      </View>
      <Gap height={8} />
      <Text style={styles.titleBlue}>16 Januari 2020</Text>
      <Gap height={8} />
      <Text>Nusa Tenggara Timur</Text>
      <Text style={styles.titleBlack}>Sumba</Text>
      <Gap height={8} />
      <View style={styles.wrapperBottom}>
        <View>
          <Text style={styles.titleBlue}>size 100</Text>
          <Text style={styles.titleBlack}>IDR 56.500</Text>
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
    color: colors.blue,
  },
  titleBlack: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrapperBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
