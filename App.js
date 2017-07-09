import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Root from './src/Router';
import * as firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyAUvINEBWQNKqxpNRQ1CS8ifhzyVACdWYI",
    authDomain: "serve-62cac.firebaseapp.com",
    databaseURL: "https://serve-62cac.firebaseio.com",
    storageBucket: "serve-62cac.appspot.com"
});

export default class Application extends React.Component {
  render() {
    return <Root />;
  }
}
