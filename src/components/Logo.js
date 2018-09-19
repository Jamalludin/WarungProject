import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

type Props = {};
export default class Logo extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
          <Image
            style={{width:100, height:100}}
            source={require('../asset/img/logo.png')}/>

          <Text style={styles.logoText}>Hello Welcome to Warung App</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    fontSize:18,
    marginVertical: 15,
    color:'rgba(255, 255, 255, 0.7)'
  }
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },

});
