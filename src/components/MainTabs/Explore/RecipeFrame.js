import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

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

  showRecipeDetails(){
    console.log("show recipe details");
  };

  render() {
    return (
      <View style={styles.recipeFrame} accessible={true} onAccessibilityTap={() => this.showRecipeDetails()}>
        <Text style={styles.recipeName}> {this.props.recipeName} </Text>
        <Image
          resizeMode='contain'
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

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  recipeFrame: {
    flex: 1,
    justifyContent: 'center',
    width: deviceWidth,
    height: deviceHeight/2,
    padding: 13,
    paddingRight: 16,
    paddingBottom: 7
  },
  recipeName: {
    textAlign: 'left',
    fontSize: 25,
    paddingBottom: 6
  },
  recipeImg: {
    flex: 1,
    borderWidth: 1,
    padding: 0,
    margin: 0,
    width: undefined,
    height: undefined
  },
  favsBackdrop: {

  },
  numFavs: {
    textAlign: 'left'
  }
});
