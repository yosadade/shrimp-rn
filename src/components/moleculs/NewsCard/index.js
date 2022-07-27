import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {Gap} from '../..';
import {ICShare} from '../../../assets';

const NewsCard = ({onPress, title, subTitle, date}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onPress}>
      <Image source={null} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Gap height={8} />
        <Text>{subTitle}</Text>
        <Gap height={8} />
        <View style={styles.wrapper}>
          <Text>{date}</Text>
          <ICShare />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 12,
    borderColor: colors.grey,
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: 170,
    backgroundColor: colors.grey,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
