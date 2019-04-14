/**
 * Sample React Native App
 * https://giub.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/homeScreen';
import {createStore} from 'redux'
import { Provider } from 'react-redux';

const initialState = {
  modalVisible: false
}

const reducer = (state = initialState, action) => {
  if(action.type === 'SHOW_MODAL') {
    console.log('show receied')
    return {
      ...state,
      modalVisible: true
    }
  }else if(action.type === 'HIDE_MODAL'){
    console.log('hide received');
    return {
      ...state,
      modalVisible: false
    }
  } else {
    return state
  }
}

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}

