import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';

export default class ProductCard extends Component {
  render() {
    return (
        <Card
        style={styles.container}
        title='Entremet fraise et sa gelée fruits des bois'
        image={require('../images/pic.jpg')}>
        <Text style={{}}>
            Magnifique petit entremet à la fraise
        </Text>
        <Text style={{marginBottom: 10}}>
            Prix : 5€
        </Text>
        <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Composition' />
        </Card>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
        flex: 1,
        flexDirection :'row',
        marginBottom: 10,
        width: '80%',
    },
    text: {
        marginLeft: 'auto',
        marginRight : 'auto',
        textAlign : 'center',
        fontSize : 20,
    }
});