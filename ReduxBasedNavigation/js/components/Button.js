import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'teal',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class Button extends Component {
  render(){
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress}>
          {this.props.children}
      </TouchableOpacity>
    );
  }
}
