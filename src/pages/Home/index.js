import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Header, TabBar} from '../../components';
import {colors} from '../../utils';
import {Disease, News, Price} from '..';

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
    console.log(e);
    setActive(e);
  };

  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.container}>
        {datas.map((item, index) => {
          const {title, id} = item;
          return (
            <TouchableOpacity
              style={styles.tabBar}
              key={index}
              onPress={() => onHandleTab(id)}>
              <Text style={[styles.tabBarTitle(id)]}>{title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View>
        {active === 2 ? <News /> : active === 3 ? <Disease /> : <Price />}
      </View>
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
    borderBottomColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarTitle: (id, index, active) => ({
    fontSize: 14,
    fontWeight: '600',
    color: index === active ? colors.blue : colors.white,
  }),
});
