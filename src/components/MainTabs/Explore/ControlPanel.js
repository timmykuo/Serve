import React from 'react';
import {StyleSheet, Text, ScrollView, Image, TouchableOpacity, Switch, View} from 'react-native';

export default class ControlPanel extends React.Component {
  setParentState(args){
    this.props.setParentState(args)
  }

  constructor(props, context) {
    super(props, context);
    this.state={
      dairyAllergy: false,
      eggAllergy: false,
    };
  }

  render() {
    return(
      <ScrollView>
        <Text> Filter Menu </Text>
        <TouchableOpacity
          onPress={this.props.closeDrawer}>
            <Text> close drawer </Text>
        </TouchableOpacity>
        <View style={styles.options}>
          <View style={styles.allowedAllergies}>
            <Text> Dairy Allergy </Text>
            <Switch
              onValueChange = {(value) => this.setState({dairyAllergy: value})}
              value = {this.state.dairyAllergy}/>
            <Text> Egg Allergy </Text>
            <Switch
              onValueChange = {(value) => this.setState({eggAllergy: value})}
              value = {this.state.eggAllergy}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}
//submenus for each category
//&requirePictures=true (use switch)
//allowedAllergies (Dairy, Egg, Gluten, Peanut, Seafood, Sesame, Soy, Sulfite, Tree Nut, Wheat)
//allowedDiet (Lacto vegetarian, Ovo vegetarian, Pescetarian, Vegan, Vegetarian)
//allowedCuisine (American, Italian, Asian, Mexican, Southern & Soul Food, French, Southwestern, Barbecue, Indian, Chinese, Cajun & Creole, English, Mediterranean, Greek, Spanish, German, Thai, Moroccan, Irish, Japanese, Cuban, Hawaiin, Swedish, Hungarian, Portugese)
//allowedCourse (Main Dishes, Desserts, Side Dishes, Lunch and Snacks, Appetizers, Salads, Breads, Breakfast and Brunch, Soups, Beverages, Condiments and Sauces, Cocktails)
//allowedHoliday (Christmas, Summer, Thanksgiving, New Year, Super Bowl / Game Day, Halloween, Hanukkah, 4th of July)
const styles = StyleSheet.create({
  options: {
    flex: 1
  },
  allowedAllergies: {

  }
});
