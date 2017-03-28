import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  ComponentWillMount() {
    firebase.initializeApp({
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
        <LoginForm />
      </View>
    );
  }
}

export default App;
