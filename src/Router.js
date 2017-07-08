import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {StackNavigator, TabNavigator, NavigationActions} from 'react-navigation';
import Login from './components/Login/Login';
import ExploreScreen from './components/MainTabs/ExploreScreen';
import SearchScreen from './components/MainTabs/SearchScreen';
import CartScreen from './components/MainTabs/CartScreen';
import ProfileScreen from './components/MainTabs/ProfileScreen';

const MainTabs = TabNavigator({
  Explore: {screen: ExploreScreen},
  Search: {screen: SearchScreen},
  Cart: {screen: CartScreen},
  Profile: {screen: ProfileScreen}
});

const RootNavigator = StackNavigator({
  Main:  {
    screen: MainTabs,
  },
  Login: {
    screen: Login,
  },
},{
  initialRouteName: "Login",
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(90, 200, 250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RootNavigator;
