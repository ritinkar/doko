import { SIGN_UP_USER } from '../constants/ActionTypes';

import { NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase';

import { signIn } from './signIn';

export function signUp(User) {
  return {
    type: SIGN_UP_USER,
    User
  }
}

export function firebaseSignUp(user) {
  return function (dispatch) {
    //email is basically userName with fake domain at the end of it to get around firebase restrictions
    let email = user.userName + "@getdoko.com";
    firebase.auth().createUserWithEmailAndPassword(email, user.password)
      .then((User) => {
        dispatch(signIn(User));
      })
      .then(()=>{dispatch(NavigationActions.navigate({ routeName: 'SignedIn' }))})
      .catch(error => console.log(error));
    ///dispatch(NavigationActions.navigate({ routeName: 'SignedIn' }));
  }
}