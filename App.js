/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Greeting extends Component {
  constructor(props){
    super(props);
    this.state = {name : ''}
  }

  render() {
    return (
      <View>
        <TextInput style={styles.welcome}
        placeholder = "Type your firstname here"
        onChangeText = { (text) => this.setState({name: text})}
        //onSubmitEditing = { }
        />
        <Text style={styles.welcome}> Hello {this.state.name}!</Text>
      </View>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
}

export default class App extends Component {
  render() {
    //let pic = {source:};
    return (
      <Image style = {styles.mainContainer}   
            source = {require('./images/aerial.jpg')}>
        <Greeting />
        <Text style={styles.welcome}>
          Welcome to React I think this is great !
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    //resizeMode: 'contain'/'stretch'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'rgb(222, 222, 222)',
  },
  instructions: {
    textAlign: 'center',
    color: 'rgb(222, 222, 222)',
    marginBottom: 5,
  },
});
