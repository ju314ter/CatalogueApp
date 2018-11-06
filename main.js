import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SideMenu from './components/SideMenu';
import DisplayContent from './components/DisplayContent';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SideMenu></SideMenu>
        <DisplayContent></DisplayContent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection :'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
    width: '100%',
    height: 1200
  },
});
