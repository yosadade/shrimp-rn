import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils';

const Price = () => {
  return (
    <View style={styles.page}>
      <Text>Price</Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
  },
});
