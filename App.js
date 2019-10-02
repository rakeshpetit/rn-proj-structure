/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';

import AppContainer from './Navigator';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import friendReducer from './AppReducer';

const store = createStore(friendReducer);

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <AppContainer />
      </Provider>
    </>
  );
};

export default App;
