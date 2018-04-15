import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore } from "redux-persist";
import rootReducer from '../reducers/rootReducer';
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navigationReduxMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.persistedState.navigationState,
);

// addListener is needed in main AppNavigator
export const addListener = createReduxBoundAddListener("root");

const loggerMiddleware = createLogger()


export default function configureStore() {
    let store = createStore(
        rootReducer,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            navigationReduxMiddleware
        )
    )
    let persistor = persistStore(store);
    return { persistor, store };
}

