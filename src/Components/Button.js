import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text, Image, Button} from 'react-native';

export default class MyFirstButton extends Component {
  render() {
    return <Button title={'press me'} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'white',
  },
  myPicture: {
    width: 200,
    height: 400,
  },
  headerText: {
    fontSize: 30,
  },
});
