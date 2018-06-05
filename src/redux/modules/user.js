// Action constants
export const SIGN_UP = 'SIGN_UP';
export const VERIFY_PHONE_NUMBER = 'VERIFY_PHONE_NUMBER';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

// Action creators
const signUp = (username, password) => {
    return {
        type: SIGN_UP,
        username,
        password
    };
};

// Reducers
const initialState = {
    username: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                username: action.username
            };
        default:
            return state;
    }
};

export { userReducer };
