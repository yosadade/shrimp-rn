import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Disease, News, NewsDetail, Price} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Price"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Price" component={Price} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
      <Stack.Screen name="Disease" component={Disease} />
    </Stack.Navigator>
  );
};

export default Router;
