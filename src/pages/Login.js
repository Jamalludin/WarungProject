import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Logo from '../components/Logo';
import FormLogin from '../components/FormLogin';

type Props = {};
export default class Login extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        backgroundColor="#1c313a"
        barStyle="light-content"/>

        <Logo/>
        <FormLogin/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#35454D',
  },
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
