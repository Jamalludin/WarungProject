import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

type Props = {};
export default class FormLogin extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

          <TextInput
              style={styles.inputBox}
              underlineColorAndroid = 'rgba(0,0,0,0)'
              placeholder = 'Email'
              placeholderTextColor = '#ffffff'
              selectionColor = '#fff'
              keyboardType = 'email-address'
              onSubmitEditing = {() => this.password.focus} />

          <TextInput
              style={styles.inputBox}
              underlineColorAndroid = 'rgba(0,0,0,0)'
              placeholder = 'Password'
              placeholderTextColor = '#ffffff'
              secureTextEntry = {true}
              ref = {(input) => this.password = input} />

          <TouchableOpacity
              style={styles.button}
              onPress={this.onPress} >

              <Text style={styles.buttonText}>{this.props.type}</Text>

          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 18,
    fontSize: 18,
    color: '#ffffff',
    marginVertical: 8
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  button: {
    width: 300,
    backgroundColor: '#4f5b62',
    borderRadius: 25,
    paddingVertical: 13,
    fontSize: 18,
    color: '#ffffff',
    marginVertical: 8
  }
});
