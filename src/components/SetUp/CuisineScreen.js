import React from 'react';
import {StyleSheet,
        Text,
        View,
        TouchableOpacity,
        ScrollView } from 'react-native';

export default class CuisineScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text> Cuisine set up screen for Serve </Text>
        </ScrollView>
        <View>
          <TouchableOpacity style={styles.doneButton}>
            <Text style={styles.doneButtonText}> Done </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
//set paging enabled for swipe left and right
