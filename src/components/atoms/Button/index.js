import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICBack} from '../../../assets';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onPress}>
      <ICBack />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
  },
});
