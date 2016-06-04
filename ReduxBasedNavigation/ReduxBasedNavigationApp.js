import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { navigationReducer } from './js/actions_reducers/navigation.js';

import AppRoot from './js/AppRoot.js';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

const reducer = combineReducers({
  navigationReducer
});

const store = createStore(reducer, {});

export default class ReduxBasedNavigationApp extends Component {
  render(){
    return (
      <Provider store={store}>
        <AppRoot/>
      </Provider>
    );
  }
}
