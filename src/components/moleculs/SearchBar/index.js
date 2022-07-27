import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {ICSearch} from '../../../assets';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnSearch}>
        <ICSearch />
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Cari Kata Kunci Penyakit" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
  },
  btnSearch: {
    backgroundColor: colors.white,
    borderColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 12,
    borderColor: colors.grey,
    backgroundColor: colors.white,
  },
});
