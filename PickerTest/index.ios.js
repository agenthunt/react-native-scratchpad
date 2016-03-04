/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { AppRegistry, Component, StyleSheet, Text, View, Picker } from 'react-native';

class PickerTest extends Component {
  constructor() {
    super();
    this.state = {
      language: {
        value : 'python',
        label: 'Python'
      }
    };
  }
  onValueChange(value) {
    this.setState({
      language: value
    });
  }
  render() {
    return (
      <View style={styles.container}>
<Picker style={styles.picker}
      selectedValue={this.state.language}
      onValueChange={this.onValueChange.bind(this)}>
  <Picker.Item label="Java" value={
        {value: 'java',
        label: 'Java'}
      } />
  <Picker.Item label="JavaScript" value={
        {value : 'js',
        label: 'JavaScript'}
      } />
   <Picker.Item label="Python" value={
        {value : 'python',
        label: 'Python'}
      } />
    <Picker.Item label="Scala" value={
        {value : 'scala',
        label: 'Scala'}
      } />
</Picker>
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
  picker: {
    width: 400
  }
});

AppRegistry.registerComponent('PickerTest', () => PickerTest);
