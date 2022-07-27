import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={colors.blue} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
