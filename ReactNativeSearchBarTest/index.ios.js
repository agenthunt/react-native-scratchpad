/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SearchBar from 'react-native-search-bar';

class ReactNativeSearchBarTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <SearchBar style={styles.searchBar}
    ref='searchBar'
    placeholder='Search'
    />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar:{
    width: 200,
    height: 40
  }
});

AppRegistry.registerComponent('ReactNativeSearchBarTest', () => ReactNativeSearchBarTest);
