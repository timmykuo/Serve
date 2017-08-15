import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ListView} from 'react-native';
import FilterButton from './FilterButton.js';
import NavigationBar from 'react-native-navbar';
import RecipeFrame from './RecipeFrame.js';

export default class ExploreMain extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row2']),
    };
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
        <ListView
          style={styles.recipeContainer}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <RecipeFrame
                                    recipeName = {'put recipe name here'}
                                    recipeImg = {'../../../images/logo.png'}
                                    numFavs = {'number favs here'}
                                    rowData={rowData}/>}
          />
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
