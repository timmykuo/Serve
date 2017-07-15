import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class DoneButton extends React.Component {
  render() {
    return(
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}> Done </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

});
