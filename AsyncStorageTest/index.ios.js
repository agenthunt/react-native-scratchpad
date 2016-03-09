/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { AppRegistry, Component, StyleSheet, Text, View, AsyncStorage, TouchableOpacity } from 'react-native';

class AsyncStorageTest extends Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.onClearAll = this.onClearAll.bind(this);
    this.count = 0;
    this.allItems = [];
    this.state = {
      allItems: [],
      randomItem:null
    };
    this.getAllItems();
    AsyncStorage.getItem('23423423').then((item) => {
      this.setState({
        randomItem: item
      });
    })
  }
  onClearAll(){
    console.log('clear all');
    AsyncStorage.clear();
    this.getAllItems();
  }
  getAllItems() {
    this.allItems = [];
    AsyncStorage.getAllKeys().then((keys) => {
      let items = keys.map((key) => {
        AsyncStorage.getItem(key)
          .then((value) => {
            this.allItems.push({
              key,
              value
            });
            this.setState({
              allItems: this.allItems
            });
          })
      })
    });

  }
  addItem() {
    this.count++;
    AsyncStorage.setItem(''+this.count, ''+this.count);
    this.getAllItems();
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={this.onClearAll}>
        <Text style={styles.button}> Clear All </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.addItem}>
        <Text style={styles.button}> Add Item </Text>
      </TouchableOpacity>
      {this.state.allItems.map((item) => {
        return (<Text> {item.key + ':' + item.value}</Text>);
      })}
      <Text> Non existing key: {JSON.stringify(this.state.randomItem)} </Text>
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
  button: {
    borderWidth: 1
  }
});

AppRegistry.registerComponent('AsyncStorageTest', () => AsyncStorageTest);
