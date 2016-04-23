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
import HelloView from './HelloView';
var Dropdown = require('./Dropdown');

class HelloNativeUIComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <HelloView message="Shailesh"/>
        <Dropdown
        style={{ height: 20, width: 200}}
        values={[ '--Choose--', 'one', 2, 3.5, { four: 4 }, [ 5, 6, 7 ], false ]}
        selected={1} onChange={(data) => { console.log(data); }} />
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
});

AppRegistry.registerComponent('HelloNativeUIComponent', () => HelloNativeUIComponent);
