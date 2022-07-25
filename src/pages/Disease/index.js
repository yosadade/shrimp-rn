import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils';
import {Gap, NewsCard} from '../../components';

const Disease = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Kabar Terbaru</Text>
        <Gap height={12} />
        <NewsCard onPress={() => navigation.navigate('DiseaseDetail')} />
        <NewsCard onPress={() => navigation.navigate('DiseaseDetail')} />
        <NewsCard onPress={() => navigation.navigate('DiseaseDetail')} />
        <NewsCard onPress={() => navigation.navigate('DiseaseDetail')} />
        <Gap height={150} />
      </ScrollView>
    </View>
  );
};

export default Disease;

const styles = StyleSheet.create({
  page: {
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
