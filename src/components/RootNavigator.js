import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignedOutNavigator from './SignedOutSection';
import SignedInNavigator from './SignedInSection';

const RootNavigator = createStackNavigator(
    {
        SignedIn: {
            screen: SignedInNavigator,
            navigationOptions: {
                gesturesEnabled: false
            }
        },
        SignedOut: {
            screen: SignedOutNavigator,
            navigationOptions: {
                gesturesEnabled: false
            }
        }
    },
    {
        headerMode: 'none',
        mode: 'modal',
        initialRouteName: 'SignedIn'
    }
);

export default RootNavigator;
