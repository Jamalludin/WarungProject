import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import FormLogin from '../components/FormLogin';
import {Actions} from 'react-native-router-flux';

type Props = {};
export default class Register extends Component<Props> {

  signin(){
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
          <StatusBar
            backgroundColor="#1c313a"
            barStyle="light-content"/>

          <Logo/>
          <FormLogin type = 'Register'/>

        <View style={styles.signupTextConst}>
            <Text style={styles.signupText}>Sudah Punya Akun Ya ?</Text>
            <TouchableOpacity onPress = {this.signin}><Text style={styles.signupButton}> Signin</Text></TouchableOpacity>
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
