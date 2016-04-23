/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Surface} from 'gl-react-native';
import GL from 'gl-react';

const shaders = GL.Shaders.create({
  helloGL: {
    frag: `
precision highp float;
uniform float u_time;

void main () { // This function is called FOR EACH PIXEL
  gl_FragColor = vec4(abs(sin(u_time)),0.0,1.0,1.0);
}
    `
  }
});

class GLReactTest extends Component {
  constructor(){
    super();
    this.state = {
      u_time: 0
    };
    this.onTimeout = this.onTimeout.bind(this);
    this.onTimeout();
  }
  onTimeout(){
    this.setState({
      u_time: this.state.u_time + 0.1
    }
    );
    setTimeout(this.onTimeout, 500);
  }
  render() {
    return (
      <View style={styles.container}>
<Surface width={300} height={200}>
  <GL.Node shader={shaders.helloGL}
    uniforms={
      {
        u_time:this.state.u_time
      }
    } />
</Surface>
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
});

AppRegistry.registerComponent('GLReactTest', () => GLReactTest);
