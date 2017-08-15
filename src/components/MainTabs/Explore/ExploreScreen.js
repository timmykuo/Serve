import React from 'react';
import {StyleSheet, Text, View, Image, Modal, TouchableOpacity} from 'react-native';
import Drawer from 'react-native-drawer';
import ExploreMain from './ExploreMain.js';
import ControlPanel from './ControlPanel.js';
import NavigationBar from 'react-native-navbar';
import tweens from './tweens';

export default class ExploreScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerType: 'overlay',
      openDrawerOffset:100,
      closedDrawerOffset:0,
      panOpenMask: .1,
      panCloseMask: .25,
      relativeDrag: false,
      panThreshold: .25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: 'linear',
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: true,
      negotiatePan: false,
      side: "right",
    };
  }

  static navigationOptions = ({navigation}) => ({
    header: null
  })

  setDrawerType(type){
    this.setState({
      drawerType: type
    })
  }

  tweenHandler(ratio){
    if(!this.state.tweenHandlerPreset){ return {} }
    return tweens[this.state.tweenHandlerPreset](ratio)
  }

  noopChange(){
    this.setState({
      changeVal: Math.random()
    })
  }

  openDrawer(){
    this.drawer.open();
  }

  closeDrawer() {
    this.drawer.close();
  }

  setStateFrag(frag) {
    this.setState(frag);
  }


  render() {
    return (
      <Drawer
        ref={(ref) => this.drawer = ref}
        type={this.state.drawerType}
        animation={this.state.animation}
        openDrawerOffset={this.state.openDrawerOffset}
        closedDrawerOffset={this.state.closedDrawerOffset}
        panOpenMask={this.state.panOpenMask}
        panCloseMask={this.state.panCloseMask}
        relativeDrag={this.state.relativeDrag}
        panThreshold={this.state.panThreshold}
        content={<ControlPanel closeDrawer={this.closeDrawer.bind(this)}/>}
        styles={drawerStyles}
        disabled={this.state.disabled}
        tweenHandler={this.tweenHandler.bind(this)}
        tweenDuration={this.state.tweenDuration}
        tweenEasing={this.state.tweenEasing}
        acceptDoubleTap={this.state.acceptDoubleTap}
        acceptTap={this.state.acceptTap}
        acceptPan={this.state.acceptPan}
        tapToClose={this.state.tapToClose}
        negotiatePan={this.state.negotiatePan}
        changeVal={this.state.changeVal}
        side={this.state.side}
        >
        <ExploreMain
          drawerType={this.state.drawerType}
          setParentState={this.setStateFrag.bind(this)}
          openDrawer={this.openDrawer.bind(this)}
          openDrawerOffset={this.state.openDrawerOffset}
          closedDrawerOffset={this.state.closedDrawerOffset}
          panOpenMask={this.state.panOpenMask}
          panCloseMask={this.state.panCloseMask}
          relativeDrag= {this.state.relativeDrag}
          panStartCompensation= {this.state.panStartCompensation}
          tweenHandlerOn={this.state.tweenHandlerOn}
          disabled={this.state.disabled}
          panThreshold={this.state.panThreshold}
          tweenEasing={this.state.tweenEasing}
          tweenHandlerPreset={this.state.tweenHandlerPreset}
          animation={this.state.animation}
          noopChange={this.noopChange.bind(this)}
          acceptTap={this.state.acceptTap}
          acceptDoubleTap={this.state.acceptDoubleTap}
          acceptPan={this.state.acceptPan}
          tapToClose={this.state.tapToClose}
          negotiatePan={this.state.negotiatePan}
          side={this.state.side}
          />
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

const styles = StyleSheet.create({
});


//ListView to show recipes

//use ScrollView
//refer to https://facebook.github.io/react-native/docs/network.html to see how to get content from another server to show recipes available
