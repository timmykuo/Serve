import React from 'react';
import {StyleSheet, Text, ScrollView, Image, TouchableOpacity, Switch, View} from 'react-native';

export default class ControlPanel extends React.Component {
  setParentState(args){
    this.props.setParentState(args)
  }

  constructor(props, context) {
    super(props, context);
    this.state={
      //submenus for each category
      //&requirePictures=true (use switch)
      //allergies
      dairyAllergy: false,
      eggAllergy: false,
      glutenAllergy: false,
      peanutAllergy: false,
      seafoodAllergy: false,
      sesameAllergy: false,
      soyAllergy: false,
      sulfiteAllergy: false,
      treeNutAllergy: false,
      wheatAllergy: false,
      //diets
      lactoVegDiet: false,
      ovoVegDiet: false,
      pescDiet: false,
      veganDiet: false,
      vegDiet: false,
      //Cuisines
      american: false,
      italian: false,
      asian: false,
      mexican: false,
      southernAndSoul: false,
      french: false,
      southwestern: false,
      barbecue: false,
      indian: false,
      chinese: false,
      cajunAndCreole: false,
      english: false,
      mediterranean: false,
      greek: false,
      spanish: false,
      german: false,
      thai: false,
      moroccan: false,
      irish: false,
      japanese: false,
      cuban: false,
      hawaiin: false,
      swedish: false,
      hungarian: false,
      portugese: false,
      //courses
      mainDishes: false,
      desserts: false,
      sideDishes: false,
      lunchAndSnacks: false,
      appetizers: false,
      salads: false,
      breads: false,
      breakfastAndBrunch: false,
      soups: false,
      beverages: false,
      condimentsAndSauces: false,
      cocktails: false,
      //holidays
      christmas: false,
      summer: false,
      thanksgiving: false,
      newYear: false,
      gameDay: false,
      halloween: false,
      hanukkah: false,
      fourthOfJuly: false,
    };
  }

  render() {
    return(
      <ScrollView contentContainerStyle={styles.filterMenu}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={this.props.closeDrawer}>
            <Text style={styles.filterButtonText}> Filter </Text>
        </TouchableOpacity>
        <Text style={styles.menuText}> Choose different filters below to better explore recipes you want. Filters saved in your profile settings will be automatically applied. </Text>
        <View style={styles.options}>
          <TouchableOpacity>
            <Text> Allergies </Text>
          </TouchableOpacity>
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
          <TouchableOpacity>
            <Text> Diets </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text> Cusines </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text> Courses </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text> Holidays </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  filterMenu: {
    paddingTop: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuText: {

  },
  filterButton: {
    flex: 1,
    borderRadius: 1,
    padding: 10,
    backgroundColor: 'gray',
  },
  filterButtonText: {
    textAlign: 'center'
  },
  options: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  allowedAllergies: {

  }
});
