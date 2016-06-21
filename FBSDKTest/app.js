import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import FBSDK from 'react-native-fbsdk';
const {
  LoginButton,
  LoginManager,
  AccessToken
} = FBSDK;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default class extends Component {
  constructor(props){
    super(props);
    this.onPress = this.onPress.bind(this);
  }
  onPress = () => {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success with permissions: '
            +result.grantedPermissions.toString());
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
        <TouchableOpacity onPress={this.onPress}>
          <View style={
              {
                backgroundColor: 'blue'
              }
            }>
            <Text>
              LoginManger Facebook
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
