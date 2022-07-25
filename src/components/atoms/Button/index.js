import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {ICBack} from '../../../assets';

const Button = ({type, onPress, title, bgColor, color}) => {
  if (type === 'primary') {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.container(bgColor, type)}
        onPress={onPress}>
        <Text style={styles.title(color)}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container(bgColor, type)}
      onPress={onPress}>
      <ICBack />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (bgColor, type) => ({
    backgroundColor: bgColor,
    borderRadius: 4,
    paddingHorizontal: type === 'primary' ? 12 : 6,
    paddingVertical: type === 'primary' ? 8 : 0,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  title: color => ({
    color: color,
    fontWeight: 'bold',
  }),
});
