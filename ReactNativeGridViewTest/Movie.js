import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class Movie extends Component{
  render(){
      return (<View style={{width:40, height:40, margin: 20, backgroundColor:'red'}}>
             <Text>{this.props.item}</Text>
             </View>)
  }
}