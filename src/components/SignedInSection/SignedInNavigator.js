import React from 'react';
import HomeScreen from './HomeScreen';
import QuizSection from './QuizSection';
import { createStackNavigator } from 'react-navigation';

const SignedInNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Quiz: QuizSection
    },
    {
        headerMode: 'none',
        mode: 'modal',
        initialRouteName: 'Home'
    }
);

export default SignedInNavigator;
