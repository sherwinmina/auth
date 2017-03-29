import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBaobC_znqrt8Sc8skhx_tqvTQX_MMpnY8',
      authDomain: 'authentication-1d477.firebaseapp.com',
      databaseURL: 'https://authentication-1d477.firebaseio.com',
      storageBucket: 'authentication-1d477.appspot.com',
      messagingSenderId: '1027350315105'
    });
    firebase.initializeApp();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
        case true:
         return  (
           <Button onPress={() => {firebase.auth().signOut()}}>Log Out</Button>
         );
        case false:
          return <LoginForm />;
        default:
          return <Spinner size="large" />;
      }
  }

  render() {
    return (
      <View>
        <Header headerText='Authencation' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
