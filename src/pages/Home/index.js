import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Header, TabBar} from '../../components';
import {colors} from '../../utils';
import {Disease, News, Price} from '..';

const Home = () => {
  const [active, setActive] = useState('Harga Udang');

  const onHandleTab = e => {
    console.log(e);
    setActive(e);
  };

  return (
    <View style={styles.page}>
      <Header />
      <TabBar onPress={e => onHandleTab(e)} />
      {active === 'Harga Udang' ? (
        <Price /> ? (
          active === 'Kabar Udang'
        ) : (
          <News />
        )
      ) : (
        <Disease />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
