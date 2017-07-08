import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {StackNavigator, TabNavigator, NavigationActions} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './components/Login/Login';
import ExploreScreen from './components/MainTabs/Explore/ExploreScreen';
import SearchScreen from './components/MainTabs/Search/SearchScreen';
import CartScreen from './components/MainTabs/Cart/CartScreen';
import ProfileScreen from './components/MainTabs/Profile/ProfileScreen';


const MainTabs = TabNavigator({
  Explore: {
    screen: StackNavigator({
      Explore: {screen: ExploreScreen},
    }),
    navigationOptions: {
      tabBarIcon: <Icon name="compass" size={30} />,
      title: 'Explore'
    }
  },
  Search: {
    screen: StackNavigator({
      Search: {screen: SearchScreen},
    }),
    navigationOptions: {
      tabBarIcon: <Icon name="search" size={30} />,
    }
  },
  Cart: {
    screen: StackNavigator({
      Cart: {screen: CartScreen},
    }),
    navigationOptions: {
      tabBarIcon: <Icon name="shopping-cart" size={30} />,
      title: 'Cart'
    }
  },
  Profile: {
    screen: StackNavigator({
      Profile: {screen: ProfileScreen},
    }),
    navigationOptions: {
      tabBarIcon: <Icon name="user" size={30} />,
      title: 'Profile'
    }
  }
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
