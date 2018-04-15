import { combineReducers } from 'redux';
import userReducer from './userReducer';
import navigationReducer from './navigationReducer';
import { persistCombineReducers } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import signUpReducer from './signUpReducer';


const config = {
    key: 'root',
    storage,
}

const reducers = {
    user: userReducer,
    navigationState: navigationReducer
}

const persistedReducer = persistCombineReducers(config, reducers)

//Don't persist signUpReducer 
const rootReducer = combineReducers({
    persistedState: persistedReducer,
    signUpReducer
})

export default rootReducer;