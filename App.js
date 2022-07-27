import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/routers';
import {colors} from './src/utils';

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={colors.blue}
        barStyle="light-content"
        translucent={false}
      />
      <Router />
    </NavigationContainer>
  );
};

export default App;
