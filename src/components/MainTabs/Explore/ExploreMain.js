import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ListView, FlatList} from 'react-native';
import NavigationBar from 'react-native-navbar';
import FilterButton from './FilterButton.js';
import RecipeFrame from './RecipeFrame.js';
import Footer from './LoadMoreRecipesFooter.js';

export default class ExploreMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=6`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
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
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
              <RecipeFrame
                recipeName = {('anna poopoo')}
                numFavs = {('number of favs')}
                />
          )}
          keyExtractor={(item, index) => index}
          onEndReached={this.handleLoadMore}
          onEndThreshold={3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recipeContainer: {
    flex: 1,
  },
  drawerButton: {
     marginTop: 8,
     marginRight: 5,
     height: 26,
     width: 26 },
});
