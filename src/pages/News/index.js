import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils';
import {Gap, NewsCard} from '../../components';

const News = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.pages}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Kabar Terbaru</Text>
        <Gap height={12} />
        <NewsCard onPress={() => navigation.navigate('NewsDetail')} />
        <NewsCard onPress={() => navigation.navigate('NewsDetail')} />
        <NewsCard onPress={() => navigation.navigate('NewsDetail')} />
        <NewsCard onPress={() => navigation.navigate('NewsDetail')} />
        <Gap height={150} />
      </ScrollView>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  pages: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold',
  },
});
