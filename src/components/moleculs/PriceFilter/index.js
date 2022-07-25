import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PriceFilter = () => {
  return (
    <View style={styles.container}>
      <Text>PriceFilter</Text>
    </View>
  );
};

export default PriceFilter;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
});
