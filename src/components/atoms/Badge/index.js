import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {ICStar} from '../../../assets';

const Badge = ({type}) => {
  if (type === 'verified') {
    return (
      <View style={styles.container(type)}>
        <View style={styles.badge}>
          <ICStar />
        </View>
        <View>
          <Text style={styles.title}>Terverifikasi</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container(type)}>
      <View>
        <Text style={styles.title}>belum terverifikasi</Text>
      </View>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: type => ({
    flexDirection: 'row',
    backgroundColor: type === 'verified' ? colors.pink : colors.grey,
    borderRadius: 18,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  badge: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 11,
  },
});
