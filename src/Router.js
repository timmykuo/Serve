import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {StackNavigator, TabNavigator, NavigationActions} from 'react-navigation';
import Login from './components/Login/Login';
import ExploreScreen from './components/MainTabs/Explore/ExploreScreen';
import SearchScreen from './components/MainTabs/Search/SearchScreen';
import CartScreen from './components/MainTabs/Cart/CartScreen';
import ProfileScreen from './components/MainTabs/Profile/ProfileScreen';

const MainTabs = TabNavigator({
  Explore: {screen: ExploreScreen},
  Search: {screen: SearchScreen},
  Cart: {screen: CartScreen},
  Profile: {screen: ProfileScreen}
});

const RootNavigator = StackNavigator({
  Main:  {screen: MainTabs},
  Login: {
    path: './components/Login/Login',
    screen: Login},
},
{ initialRouteName: "Login",
  headerMode: 'none'
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
