import React from 'react';
import {StyleSheet, Text, View, Image, Modal, TouchableHighlight} from 'react-native';

export default class FilterModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
        >
       <View style={{marginTop: 22}}>
        <View>
          <Text>Hello World!</Text>

          <TouchableHighlight onPress={() => {
            this.props.setModalVisible(!this.props.modalVisible)
          }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>

        </View>
       </View>
      </Modal>
    );
  }
}
