import React from 'react';
import {StyleSheet, Text, ScrollView, Image, TouchableOpacity, Switch, View} from 'react-native';

export default class allergyFilter extends React.Component {
  render() {
    return(
      <View style={styles.categoryContainer}
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
    );
  };
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
  }
})
