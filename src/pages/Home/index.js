/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../../components';
import {colors} from '../../utils';
import Disease from '../Disease';
import News from '../News';
import Price from '../Price';

const datas = [
  {
    id: 1,
    title: 'Harga Udang',
  },
  {
    id: 2,
    title: 'Kabar Udang',
  },
  {
    id: 3,
    title: 'Penyakit',
  },
];

const Home = () => {
  const [active, setActive] = useState(1);

  const onHandleTab = e => {
    setActive(e);
  };

  const renderContent =
    active === 2 ? <News /> : active === 3 ? <Disease /> : <Price />;

  return (
    <View style={styles.page}>
      <Header title="Jala Media" />
      <View style={styles.container}>
        {datas.map((item, index) => {
          const {title, id} = item;
          return (
            <TouchableOpacity
              style={[
                styles.tabBar,
                {
                  borderBottomColor: active === id ? colors.blue : colors.grey,
                },
              ]}
              key={index}
              onPress={() => onHandleTab(id)}>
              <Text
                style={[
                  styles.tabBarTitle,
                  {color: active === id ? colors.blue : null},
                ]}>
                {title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View>{renderContent}</View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
});
