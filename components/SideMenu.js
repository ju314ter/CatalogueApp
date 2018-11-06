import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class SideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>Entremets</Text>
      <Text style={styles.text}>Tarterie</Text>
      <Text style={styles.text}>Pièces montées</Text>
      <Text style={styles.text}>Buches de Noël</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#efefef',
        flex: 0.4,
        flexDirection : 'column',
        justifyContent: 'space-evenly',
        borderRightWidth : 1,
        borderRightColor : '#ececec',
        paddingLeft : '2%',
    },
    text : {
        fontSize : 30,
    }

});