import React from 'react';
import {StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            //source={require('../../images/Serve.png')}
            />
          <Text style={styles.title}> Line before the logo </Text>
        </View>
        <View style={styles.formContainer}>
        <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(90, 200, 250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
});
