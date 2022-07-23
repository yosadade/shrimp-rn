import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../../components';
import {colors} from '../../../utils';

const Header = () => {
  return (
    <View style={styles.container}>
      <Button />
      <Text style={styles.title}>Jala Media</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 18,
    paddingLeft: 12,
    backgroundColor: colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.white,
  },
});

export default Header;
