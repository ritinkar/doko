import React from 'react';
import RootNavigator from './components/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/createStore';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 10,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f'
    }
};

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PaperProvider theme={theme}>
                    <RootNavigator />
                </PaperProvider>
            </Provider>
        );
    }
}
