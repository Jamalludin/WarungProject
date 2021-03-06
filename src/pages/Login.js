import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import FormLogin from '../components/FormLogin';
import {Actions} from 'react-native-router-flux';

type Props = {};
export default class Login extends Component<Props> {

  signup(){
    Actions.Register();
  }

  render() {
    return (
      <View style={styles.container}>
          <StatusBar
            backgroundColor="#1c313a"
            barStyle="light-content"/>

          <Logo/>
          <FormLogin type = 'Login'/>

        <View style={styles.signupTextConst}>
            <Text style={styles.signupText}>Belum Punya Akun ?</Text>
            <TouchableOpacity onPress = {this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#35454D'
  },
  signupTextConst: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical:16,
    flexDirection: 'row'
  },
  signupText: {
    color:'#ffffff',
    fontSize:14
  },
  signupButton: {
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
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
