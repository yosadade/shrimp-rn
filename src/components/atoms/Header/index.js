import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '..';
import {ICShareWhite} from '../../../assets';
import {Button} from '../../../components';
import {colors} from '../../../utils';

const Header = ({title, onPress, onShare}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Button onPress={onPress} />
        <Gap width={12} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onShare}>
        <ICShareWhite />
      </TouchableOpacity>
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
    justifyContent: 'space-between',
  },
  wrapperTitle: {
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
