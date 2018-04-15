import React from 'react';
import AppNavigator from './navigators/AppNavigator';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { PersistGate } from "redux-persist/es/integration/react";

import {Text} from 'react-native';

const { store, persistor } = configureStore();


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    )
  }
}
