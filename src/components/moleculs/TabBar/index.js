import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const datas = [
  {
    title: 'Harga Udang',
  },
  {
    title: 'Kabar Udang',
  },
  {
    title: 'Penyakit',
  },
];

const TabBar = ({onPress}) => {
  return (
    <View style={styles.container}>
      {datas.map((item, i) => {
        const {title} = item;
        return (
          <TouchableOpacity
            style={styles.tabBar}
            key={i}
            onPress={() => onPress(title)}>
            <Text style={styles.tabBarTitle}>{title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabBar: {
    flex: 1,
    padding: 24,
    borderBottomWidth: 4,
    borderBottomColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.blue,
  },
});
