import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import {Gap, PriceCard} from '../../components';

const Price = () => {
  return (
    <View style={styles.pages}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Harga Terbaru</Text>
        <Gap height={12} />
        <PriceCard type="verified" />
        <PriceCard />
        <PriceCard type="verified" />
        <PriceCard />
        <Gap height={150} />
      </ScrollView>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  pages: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
