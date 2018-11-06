import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>Vos artisans patissiers vous accueillent</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#1cb184',
        flex: 0.1,
        flexDirection : 'row',
        height: 50,
        borderBottomWidth : 5,
        borderBottomColor : '#ececec',
    },
    text : {
        marginLeft: 'auto',
        marginRight : 'auto',
        textAlignVertical: 'center',
        color: 'white',
        fontSize : 40,
    },
});