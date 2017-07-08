import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class CartScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'My Cart'
  });

  render() {
    return (
      <View>
        <Text> Cart screen for Serve </Text>
      </View>
    );
  }
}

//use sectionlist for cart
