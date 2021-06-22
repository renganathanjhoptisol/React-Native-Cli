import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import _RefreshControl from './assets/components/_RefreshControl';

export default class App extends Component {
  render () {
    return (
      <View>
        <_RefreshControl />
      </View>
    );
  }
}