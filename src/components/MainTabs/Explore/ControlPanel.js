import React from 'react';
import {StyleSheet, Text, ScrollView, Image, PropTypes, TouchableOpacity, Button} from 'react-native';

export default class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <ScrollView>
        <Text> Filter Menu </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.closeDrawer();
          }}>
            <Text> close drawer </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
