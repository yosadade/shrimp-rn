import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {ICBack} from '../../../assets';

const Button = ({type, onPress, title, bgColor, color, icon, mr = 0}) => {
  if (type === 'primary') {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.container(bgColor, type, mr)}
        onPress={onPress}>
        <Text style={styles.title(color)}>{title}</Text>
      </TouchableOpacity>
    );
  }
  if (type === 'sosmed') {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.container(bgColor, type, mr)}
        onPress={onPress}>
        {icon}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container(bgColor, type, mr)}
      onPress={onPress}>
      <ICBack />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (bgColor, type, mr) => ({
    backgroundColor: bgColor,
    marginRight: type === 'sosmed' ? 6 : mr,
    borderRadius: type === 'sosmed' ? 40 : 4,
    width: type === 'sosmed' ? 40 : null,
    height: type === 'sosmed' ? 40 : null,
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
