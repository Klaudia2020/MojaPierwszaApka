import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Text, Image} from 'react-native';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.headerText}>
          Cześć, tu Klaudia, a to jest moja apka!{' '}
        </Text>
        <Image
          source={require('./../Images/ja.jpg')}
          style={styles.myPicture}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'flex-start',
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
