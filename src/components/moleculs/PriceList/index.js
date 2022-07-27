import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap} from '../..';

const PriceList = ({size, price}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Size {size}</Text>
      <Gap width={36} />
      <Text style={styles.title}>Rp {price}</Text>
    </View>
  );
};

export default PriceList;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
});
