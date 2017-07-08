import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class SearchScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Search'
  });

  render() {
    return (
      <View>
        <Text> Search screen for Serve </Text>
      </View>
    );
  }
}
