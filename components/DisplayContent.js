import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView} from 'react-native';
import ProductCard from './ProductCard';

export default class DisplayContent extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
        flex: 1,
        flexDirection :'column',
    },
    text: {
        marginLeft: 'auto',
        marginRight : 'auto',
        textAlign : 'center',
        fontSize : 20,
    }
});