import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp.apply({
      apiKey: 'AIzaSyBaobC_znqrt8Sc8skhx_tqvTQX_MMpnY8',
      authDomain: 'authentication-1d477.firebaseapp.com',
      databaseURL: 'https://authentication-1d477.firebaseio.com',
      storageBucket: 'authentication-1d477.appspot.com',
      messagingSenderId: '1027350315105'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authencation' />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
