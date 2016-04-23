import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class MovieDetail extends Component{
  render() {
      return (<View style={styles.container}>
        <TouchableHighlight onPress={()=> this.props.navigator.pop()}>
          <Text>Go Back </Text>
        </TouchableHighlight>
        <View style={{width:40, height:40, margin: 20, backgroundColor:'red'}}>
             <Text>{this.props.data}</Text>
             </View>
            </View>);
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