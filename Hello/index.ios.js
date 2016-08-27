/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class Hello extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          開始學習 React-Native
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.word}>
          踹踹看
        </Text>
        <Text style={styles.instructions}>
          踹踹看{'\n'}
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66FFFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#770077',
    marginBottom: 10,
  },
  word: {
    textAlign: 'left',
    color: '#FF4500',
    marginBottom: 100,
  }
});

AppRegistry.registerComponent('Hello', () => Hello);
