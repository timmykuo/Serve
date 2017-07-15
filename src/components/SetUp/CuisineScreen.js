import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native';
import MultiImageSelector from './MultiImageSelector';
import DoneButton from './DoneButton';

const cuisines = [{background: {image:require('./images/American.jpeg')}, value:'American'},
                  {background: {image:require('./images/Thai.jpeg')}, value:'Thai'},
                  {background: {image:require('./images/Mexican.jpeg')},value: 'Mexican'},
                  {background: {image:require('./images/Chinese.jpeg')}, value: 'Chinese'}
                ]

export default class CuisineScreen extends React.Component {
    state = {selectedCuisines: []}

    onSelectionsChange = (selectedCuisines) => {
      this.setState({selectedCuisines})
    }

  render() {
    return (
      <View>
        <MultiImageSelector
          items =  {cuisines}
          selectedItems = {this.state.selectedCuisines}
          onSelectionsChange = {this.onSelectionsChange}>
        </MultiImageSelector>

        <DoneButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cuisineContainer: {
    flex: 1,
  }
});
// //set paging enabled for swipe left and right
