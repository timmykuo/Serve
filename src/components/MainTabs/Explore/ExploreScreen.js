import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class ExploreScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Logo here'
  });
  render() {
    return (
      <View>
        <Text> Explore screen for Serve </Text>
      </View>
    );
  }
}

//use ScrollView
//refer to https://facebook.github.io/react-native/docs/network.html to see how to get content from another server to show recipes available
