import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class Route3 extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>
          Route3
        </Text>
      </View>
    );
  }
}
