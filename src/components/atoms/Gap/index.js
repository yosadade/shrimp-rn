import {View} from 'react-native';
import React from 'react';

const Gap = ({height, width, bgColor}) => {
  return (
    <View style={{width: width, height: height, backgroundColor: bgColor}} />
  );
};

export default Gap;
