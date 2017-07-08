import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            //source={require('../../images/Serve.png')}
            />
          <Text style={styles.title}> Line before the logo </Text>
        </View>
        <View style={styles.formContainer}>
            <View style={styles.loginContainer}>
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
              <TouchableOpacity onPress={() => navigate('Main')} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>

              <Text style={styles.line}>------or-------</Text>

              <TouchableOpacity onPress={() => navigate('Main')} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>SIGN UP W/ FACEBOOK</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
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
  loginContainer: {
    padding: 20,
    marginBottom: 250,
    justifyContent: 'center',
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
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  }
});
