import React from 'react';
import {StyleSheet, Text, View, Image, Modal, TouchableHighlight} from 'react-native';
import NavigationBar from 'react-native-navbar';
import FilterModal from './FilterModal.js';
import FilterButton from './FilterButton.js';

export default class ExploreScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: null
  });

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  };

  render() {
    return (
      <View style = {styles.screenContainer}>
        <View style={styles.navBar}>
          <NavigationBar
            title={
              <Image
                style={{
                         height: 42,
                         width: 42}}
                source={require('../../../images/logo.png')}/>}
            rightButton={
              <FilterButton
               style={{
                  marginTop: 8,
                  marginRight: 5,
                  height: 26,
                  width: 26 }}
               onPress={() => this.setModalVisible(true)}/>} />

          <FilterModal
            modalVisible={this.state.modalVisible}
            setModalVisible={this.setModalVisible.bind(this)}/>
        </View>
        <View style={styles.imagesContainer}>
        </View>
      </View>
    );
  }
}

// function getRecipes() {
//   return fetch('http://api.yummly.com/v1/api/recipes?_app_id=app-id&_app_key=app-key')
//     .then(function(response) {
//       return response.json()
//     }).then(function(responseJson) {
//
//     });
// }

const styles = StyleSheet.create({

});


//ListView to show recipes

//use ScrollView
//refer to https://facebook.github.io/react-native/docs/network.html to see how to get content from another server to show recipes available
