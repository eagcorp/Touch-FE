import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MyCardListItemScreen from '../screens/MyCardListItemScreen';
import MyCardListScreen from '../screens/MyCardListScreen';
import NewMyCardScreen from '../screens/NewMyCardScreen';
import TestScreen from '../screens/TestScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="MyCardListScreen">
      <Stack.Screen name="MyCardListScreen" component={MyCardListScreen} />
      <Stack.Screen
        name="MyCardListItemScreen"
        component={MyCardListItemScreen}
      />
      <Stack.Screen name="NewMyCardScreen" component={NewMyCardScreen} />
      <Stack.Screen name="TestScreen" component={TestScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
