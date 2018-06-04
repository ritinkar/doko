import React from 'react';
import RootNavigator from './components/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/createStore';

import { Text } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RootNavigator />
            </Provider>
        );
    }
}
