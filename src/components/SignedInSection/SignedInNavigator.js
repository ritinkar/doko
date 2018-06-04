import React from 'react';
import HomeScreen from './HomeScreen';
import { createStackNavigator } from 'react-navigation';

const SignedInNavigator = createStackNavigator({
    Home: HomeScreen
});
