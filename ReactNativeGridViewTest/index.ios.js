/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';
import GridView from 'react-native-grid-view';
import Movie from './Movie.js';
import MovieDetail from './MovieDetail.js';

class ReactNativeGridViewTest extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      movies: ['hello', 'blabla', 'BatMan', 'SuperMan']
    };
  }
  onHandleItemPress(item){
    this.refs.navigator.push(
      {id: 'detail',
      data:item});
  }
  renderItem(item) {
    return (<TouchableHighlight onPress=    {this.onHandleItemPress.bind(this, item)}>
            <View>
            <Movie item={item}/>
            </View>
            </TouchableHighlight>);
  }
  renderScene(route,navigator){
    switch(route.id){
      case 'master': return (
        <View style={styles.container}>
        <GridView
        items={this.state.movies}
        itemsPerRow={3}
        renderItem={this.renderItem.bind(this)}
        />
        </View>)
      case 'detail': return (<MovieDetail navigator={navigator} data={route.data}/>)
    }
  }
  render() {
    return (
        <Navigator ref="navigator" 
         initialRoute={{id: 'master'}}renderScene={this.renderScene.bind(this)}/>
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

AppRegistry.registerComponent('ReactNativeGridViewTest', () => ReactNativeGridViewTest);
