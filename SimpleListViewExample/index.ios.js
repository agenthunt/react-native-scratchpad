/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class SimpleListViewExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topShadow}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  topShadow: {
    width:200,
    height:200,
    backgroundColor: 'white',
    shadowColo: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderBottomColor: 'white',
    shadowOffset: {
      height: -5,
      width: 0
    }
  }
});

AppRegistry.registerComponent('SimpleListViewExample', () => SimpleListViewExample);
