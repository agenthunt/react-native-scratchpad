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
  Animated,
  TouchableHighlight
} from 'react-native';

// Not sure if I was the one who didnt understand, Animated values need to be states
class AnimatedAPITest extends Component {
  constructor(){
    super();
    this.state = {
      value: new Animated.Value(200)
    }
  }
  animationStart(){
      Animated.timing(          
       this.state.value,    
       {toValue: 0},           
     ).start();
  }
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
        <TouchableHighlight onPress={this.animationStart.bind(this)}>
          <Text> START </Text>
        </TouchableHighlight>

        <Animated.View style={{
          backgroundColor: 'blue',
          width: 200,
          height: 200,
          transform: [{
            translateY: this.state.value
          }]
        }}>
          <Text> Animating stuff </Text>
        </Animated.View>
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

AppRegistry.registerComponent('AnimatedAPITest', () => AnimatedAPITest);
