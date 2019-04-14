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
  modalVisible: false,
  pressedImage: null,
  currentDescription: null,
  currentTitle: null
}


const reducer = (state = initialState, action) => {
  if(action.type === 'SHOW_MODAL') {
    return {
      ...state,
      modalVisible: true,
      pressedImage: action.payload
    }
  }else if(action.type === 'HIDE_MODAL'){
    return {
      ...state,
      modalVisible: false
    }
  } else if(action.type === 'UPDATE_METADATA') {

    return {
      ...state,
      currentDescription: action.description,
      currentTitle: action.title
    }
  } 
  else {
    return state
  }
}

const store = createStore(reducer)

export default class App extends Component {

  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}

