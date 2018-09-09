import { combineReducers } from 'redux';
import { userReducer } from './user';
import { questionsReducer } from './questions';

const rootReducer = combineReducers({
    user: userReducer,
    questions: questionsReducer
});

export default rootReducer;
