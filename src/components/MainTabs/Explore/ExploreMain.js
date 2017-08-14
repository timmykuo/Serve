import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, PropTypes} from 'react-native';
import FilterButton from './FilterButton.js';
import NavigationBar from 'react-native-navbar';

export default class ExploreMain extends React.Component {
  setParentState(args){
    this.props.setParentState(args)
  }

  render() {
    return(
      <View>
        <NavigationBar
          title= {
            <Image
              style={{
                       height: 42,
                       width: 42}}
              source={require('../../../images/logo.png')}/>
          }
          rightButton={
             <TouchableOpacity
               onPress={this.props.openDrawer}>
               <Image
                 source={require('../../../images/filter.png')}
                 style={styles.drawerButton}/>
             </TouchableOpacity>
          }
        />
        <Text> Main explore screen page </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerButton: {
     marginTop: 8,
     marginRight: 5,
     height: 26,
     width: 26 },
});
