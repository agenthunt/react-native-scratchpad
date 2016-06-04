import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import { connect } from 'react-redux';
import { navigateTo, push, pop } from './actions_reducers/navigation';
import Button from './components/Button';
import Route1 from './routes/Route1';
import Route2 from './routes/Route2';
import Route3 from './routes/Route3';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  },
  row: {
    flexDirection: 'row'
  }
});

class AppRoot extends Component {
  //When navigation is moved to redux, use of navigator does not make sense 
  componentWillReceiveProps(nextProps) {
    this.refs.navigator.replace(nextProps.navigation.currentRoute);
  }
  configureScene = (route) => {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.FloatFromRight;
  }
  renderScene = (route,  navigator) => {
    let name = this.props.navigation.currentRoute.name
    name = route.name;
    switch(name){
      case 'route1': return <Route1/>
      case 'route2': return <Route2/>
      case 'route3': return <Route3/>
      default: return <Route1/>
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>
          {'state' + JSON.stringify(this.props.navigation)}
        </Text>
        <View style={styles.row}>
          <Button onPress={
              () => {
                this.props.navigateToAction({
                  name: 'route1'
                });
              }
            }>
            <Text>
              Go to Route1
            </Text>
          </Button>
          <Button onPress={
              () => {
                this.props.navigateToAction({
                  name: 'route2'
                });
              }
            }>
            <Text>
              Go to Route2
            </Text>
          </Button>
          <Button onPress={
              () => {
                this.props.navigateToAction({
                  name: 'route3'
                });
              }
            }>
            <Text>
              Go to Route3
            </Text>
          </Button>
        </View>
        <Navigator
          ref="navigator" initialRoute={this.props.navigation.currentRoute}
          renderScene={this.renderScene}
          configureScene={this.configureScene}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // alert(JSON.stringify(state));
  return {
    navigation: state.navigationReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateToAction: (route) => dispatch(navigateTo(route)),
    pushAction:  (route) => dispatch(push(route)),
    pop:  () => dispatch(pop),
  }
}
AppRoot = connect(mapStateToProps, mapDispatchToProps)(AppRoot);
export default AppRoot;
