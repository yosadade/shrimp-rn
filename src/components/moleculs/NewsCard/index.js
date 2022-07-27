import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import moment from 'moment';
import 'moment/locale/id';
import {colors} from '../../../utils';
import Gap from '../../atoms/Gap';
import {ICShare} from '../../../assets';

const NewsCard = ({onPress, title, image, subTitle, date, onShare}) => {
  const dateFormat = moment(date).locale('id').format('LL');
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onPress}>
      <Image
        source={{uri: `https://app.jala.tech/storage/${image}`}}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Gap height={8} />
        <Text>{subTitle}</Text>
        <View style={styles.wrapper}>
          <Text>{dateFormat}</Text>
          <TouchableOpacity style={styles.btnShare} onPress={onShare}>
            <ICShare />
          </TouchableOpacity>
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
  btnShare: {
    paddingHorizontal: 20,
    paddingRight: 0,
    paddingVertical: 8,
  },
});
