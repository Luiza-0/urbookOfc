/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import HomeScreen from './src/screens/Home';
import BookDetailScreen from './src/screens/BookDetail';
import InitialScreen from './src/screens/Initial';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

export default function App() {
  
    return (
      <NavigationContainer>
        <Navigator initialRouteName='InitialScreen' screenOptions={{
              headerShown: false
          }}>
              <Screen name='InitialScreen' component={InitialScreen} options={{
                  animation: 'slide_from_left'
              }} />
              <Screen name='HomeScreen' component={HomeScreen} options={{
                  animation: 'slide_from_left'
              }} />
              <Screen name='BookDetailScreen' component={BookDetailScreen} options={{
                  animation: 'slide_from_right'
              }} />
          </Navigator>
      </NavigationContainer>
  )
};