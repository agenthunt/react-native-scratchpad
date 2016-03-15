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
  View,
  TouchableOpacity,
  Linking
} from 'react-native';

class LaunchNativeActivity extends Component {
  constructor(){
    super();
    this.onPress = this.onPress.bind(this);
  }
  onPress(){
    Linking.openURL('my.special.scheme://other/parameters/here');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
           <Text> Launch Native Activity </Text>
        </TouchableOpacity>

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

AppRegistry.registerComponent('LaunchNativeActivity', () => LaunchNativeActivity);
