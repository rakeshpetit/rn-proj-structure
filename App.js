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
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import friendReducer from './AppReducer';
import rootSaga from './AppSagas';
import * as NavigationService from './NavigationService';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(friendReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <AppContainer ref={nav => NavigationService.setNavigator(nav)} />
      </Provider>
    </>
  );
};

export default App;
