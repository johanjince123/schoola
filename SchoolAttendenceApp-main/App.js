import { Text, View, TouchableOpacity, Button } from 'react-native';
import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import db from './Config.js';
import HomeScreen from './Screens/HomeScreen';
import SummaryScreen from './Screens/SummaryScreen';

export default function App() {
  return (
    <View>
      <AppContainer />
    </View>
  );
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,
});

const AppContainer = createAppContainer(AppNavigator);
