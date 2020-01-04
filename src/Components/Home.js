import React, { Component } from 'react';
import {  Button, StyleSheet, View, StatusBar, Text,Image} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Klaudia's profile"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}