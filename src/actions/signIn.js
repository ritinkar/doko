import { SIGN_IN } from '../constants/ActionTypes';

import { NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase';

export function signIn(User) {
    return {
        type: SIGN_IN,
        User
    }
}

export function firebaseSignIn(user) {
    return function (dispatch) {
      //email is basically userName with fake domain at the end of it to get around firebase restrictions
      let email = user.userName + "@getdoko.com";
      firebase.auth().signInWithEmailAndPassword(email, user.password)
        .then((User) => {
          dispatch(signIn(User));
        })
        .then(()=>{dispatch(NavigationActions.navigate({ routeName: 'SignedIn' }))})
        .catch(error => console.log(error));
      ///dispatch(NavigationActions.navigate({ routeName: 'SignedIn' }));
    }
  }
