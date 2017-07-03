import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="email"
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          style={styles.input}
        />
        <TextInput
          placeholder="confirm password"
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        <Text style={styles.line}>------or-------</Text>
        
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SIGN UP W/ FACEBOOK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 250
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: '#ecf0f1',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF'
  }
});
