import React, { Component } from 'react';
import {  Button, StyleSheet, View, StatusBar, Text,Image} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Witam w mojej apce - Klaudia',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
   
      <Button
        title="Go to Klaudia's profile"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />

    </View>      
    );
  }
}
const styles = StyleSheet.create({
  container:{
  flex: 1,
  backgroundColor:'#ccc',
  justifyContent: 'flex-start',
  alignItems: 'center',
  },
    body: {
      backgroundColor: 'white',
    },
   myPicture: {
    width:200,
    height:400
   },
   headerText: {
     fontSize: 30,
   },
  
  });
  