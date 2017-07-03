import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';

export default class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <TextInput
          placeholder="email"
          returnKeyType="next"
          style={styles.input}
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          placeholder="password"
          returnKeyType="next"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          onSubmitEditing={() => this.confirmPassInput.focus()}
        />
        <TextInput
          placeholder="confirm password"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.confirmPassInput = input}
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
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
