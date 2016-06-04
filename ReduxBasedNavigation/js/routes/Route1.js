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

export default class Route1 extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>
          Route1
        </Text>
      </View>
    );
  }
}
