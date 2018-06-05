import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';

const SignedOutNavigator = createStackNavigator(
    {
        SignUp: {
            screen: SignUpScreen,
            navigationOptions: {
                title: 'Sign Up'
            }
        },
        SignIn: {
            screen: SignInScreen,
            navigationOptions: {
                title: 'Sign In'
            }
        }
    },
    {
        headerMode: 'none',
        mode: 'modal',
        initialRouteName: 'SignUp'
    }
);

export default SignedOutNavigator;
