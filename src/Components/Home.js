import React, {Component} from 'react';
import { StyleSheet, View, StatusBar, Text, Image} from 'react-native';
import Button from 'apsl-react-native-button';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    // title: 'Witam w mojej apce - Klaudia',
    // headerStyle: {
    //   backgroundColor: '#BBDEFB',
    // },
    header: null,
    };
    state = {
      screenHeight: 0,
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.stylKlaudii}>
      <View style={styles.stylKlaudii2}>    
        <Text>Fuck You</Text>
      </View>
          <Text style={styles.tekstKlaudii}>to jest pole stylu stylKlaudii</Text>
        </View>
       
        <Button 
        style={{backgroundColor: 'purple'}} 
        textStyle={{fontSize: 18, color: 'pink'}}
        onPress={() => navigate('Profile', {name: 'Claudia'})}
        >
          Hello!
        </Button>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cornflowerblue',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },


  
  stylKlaudii2: {
    backgroundColor: '#F78DA7',
    width: 80,
    height: 30

  },
  stylKlaudii: {
    flex: 1,
    backgroundColor: '#BBDEFB',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 40,
    width:'80%'
  },
  tekstKlaudii: {
    color: 'black'
  },
  myPicture: {
    width: 200,
    height: 400
  },
  headerText: {
    fontSize: 30,
  },
});