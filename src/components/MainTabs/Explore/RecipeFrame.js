import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

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

  // showRecipeDetails() {
  //   this.props.recipeDetails;
  // }
  //<View onAccessibilityTap={() => showRecipeDetails}>

  render() {
    return (
      <View style={styles.recipeFrame} accessible={true}>
        <Text style={styles.recipeName}> {this.props.recipeName} </Text>
        <Image
          style={styles.recipeImg}
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
  recipeFrame: {
    flex: 1,
    justifyContent: 'center',
  },
  recipeName: {
    textAlign: 'left',
    fontSize: 25,
  },
  recipeImg: {
    flex: 1,
    height: 100,
    width: 100,
    alignSelf: 'stretch',
    borderWidth: 1,
  },
  favsBackdrop: {

  },
  numFavs: {
    textAlign: 'left'
  }
});
