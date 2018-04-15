import { SIGN_UP_USER } from '../constants/ActionTypes';

export default function signUpReducer(state = {}, action) {
    switch (action.type) {
        case SIGN_UP_USER:
            return action.user
        default:
            return state
    }
}