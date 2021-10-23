import React from 'react';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={false} />
      <Routes />
    </NavigationContainer>
  );
}