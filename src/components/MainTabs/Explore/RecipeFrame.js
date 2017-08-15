import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';

// function getRecipes() {
//   return fetch('http://api.yummly.com/v1/api/recipes?_app_id=84089c4e&_app_key=53f783309ae85e96a277cf67da0b88b8&requirePictures=true')
//     .then(function(response) {
//       return response.json()
//     }).then(function(responseJson) {
//
//     });
// }

export default class RecipeFrame extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text> {this.props.recipeName} </Text>
        <Image
          style={styles.recipePicture}
          source={require('../../../images/logo.png')}>
          <View style={styles.favsBackdrop}>
            <Text style={styles.numFavs}> {this.props.numFavs} </Text>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recipePicture: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  favsBackdrop: {

  },
  numFavs: {

  }
});
