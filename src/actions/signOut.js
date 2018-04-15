import { SIGN_OUT } from '../constants/ActionTypes';
import { NavigationActions } from 'react-navigation';


export function clearUser() {
    return {
        type: SIGN_OUT
    }
}

export function signOut(user) {
    return function (dispatch) {
        dispatch(clearUser());
        dispatch(NavigationActions.navigate({ routeName: 'SignedOut' }));
    }
  }

