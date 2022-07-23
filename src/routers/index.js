import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Disease, News, NewsDetail, Price} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Price" component={Price} />
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
      <Stack.Screen name="Disease" component={Disease} />
    </Stack.Navigator>
  );
};

export default Router;
