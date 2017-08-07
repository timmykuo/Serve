import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import NavigationBar from 'react-native-navbar';

export default class ExploreScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({

  });
  render() {
    return (
      <View style={{ flex: 1}}>
        <NavigationBar

          title={
            <Image
              style= {{
                       height: 42,
                       width: 42}}
              source={require('../../../images/logo.png')}/>}
          rightButton={
            <Image
            style= {{
                    marginTop: 5,
                     marginRight: 8,
                     height: 26,
                     width: 26}}
              source={require('../../../images/filter.png')}/>}
        />

      </View>
    );
  }
}


//ListView to show recipes

//use ScrollView
//refer to https://facebook.github.io/react-native/docs/network.html to see how to get content from another server to show recipes available
