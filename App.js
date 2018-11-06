import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './main';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Main></Main>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection :'column',
    backgroundColor: '#F5FCFF',
    width: '100%',
    height: 1200
  },
});
