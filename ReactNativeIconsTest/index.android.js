/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var { Icon } = require('react-native-icons');


var ReactNativeIconsTest = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      <Icon
  name='ion|beer'
  size={30}
  color='#887700'
  style={styles.beer}
/>
<Text> hello </Text>
<Icon
  name='zocial|github'
  size={70}
  color='black'
  style={styles.beer}
/>
<Icon
  name='fontawesome|facebook-square'
  size={70}
  color='#3b5998'
  style={styles.beer}
/>
<Icon
  name='foundation|lightbulb'
  size={30}
  color='#777777'
  style={styles.beer}
/>

<Icon
  name='material|face'
  size={30}
  color='#333333'
  style={styles.beer}
/>
     </View>
    );
  }
});

var styles = StyleSheet.create({
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
  beer:{
    backgroundColor: 'green',
    height :100,
    width: 100
  }
});

AppRegistry.registerComponent('ReactNativeIconsTest', () => ReactNativeIconsTest);
