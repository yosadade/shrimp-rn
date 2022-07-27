import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Label = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}: </Text>
      <Text style={styles.desc}>{subtitle}</Text>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingRight: 12,
    marginTop: 12,
  },
  title: {
    fontSize: 16,
    bottom: 2,
    fontWeight: 'bold',
  },
  desc: {},
});
