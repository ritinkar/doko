import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../modules/rootReducer';

const loggerMiddleware = createLogger();

const configureStore = preloadedState => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    );
};

const store = configureStore();

export { store };
