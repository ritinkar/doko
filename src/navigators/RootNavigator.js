import React from "react";
import {
  Platform,
  StatusBar
} from "react-native";
import {
  StackNavigator,
  TabNavigator
} from "react-navigation";
import {
  FontAwesome
} from "react-native-vector-icons";

import SignUpScreen from "../components/SignUpScreen";
import SignInScreen from "../components/SignInScreen";
import BaseSwiper from "../components/BaseSwiper";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      title: "Sign Up",

    }
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      title: "Sign In",

    }
  }
}, {
  headerMode: "none",
  mode: "modal",
  initialRouteName: "SignUp"
});

export const SignedIn = BaseSwiper;

export const RootNavigator = StackNavigator({
  SignedIn: {
    screen: SignedIn,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  SignedOut: {
    screen: SignedOut,
    navigationOptions: {
      gesturesEnabled: false
    }
  }
}, {
  headerMode: "none",
  mode: "modal",
  initialRouteName: "SignedOut"
});


export default RootNavigator;