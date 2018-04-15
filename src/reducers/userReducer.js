import { SIGN_IN, SIGN_OUT } from '../constants/ActionTypes';

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case SIGN_IN:
            return action.User
        case SIGN_OUT:
            return {}
        default:
            return state
    }
}