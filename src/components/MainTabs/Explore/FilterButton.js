import React from 'react';
import {Component, Image, TouchableOpacity} from 'react-native';

export default class FilterButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
          source={require('../../../images/filter.png')}
          style={this.props.style}/>
      </TouchableOpacity>
    );
  }
}
