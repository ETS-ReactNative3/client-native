import React from 'react';
import { Text, View, ImageBackground,TouchableOpacity, StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import EStyleSheet from 'react-native-extended-stylesheet';
import Image from 'react-native-remote-svg';

import AlarmScreen from '../screens/AlarmScreen';
import ControlScreen from '../screens/ControlScreen';

let background = '../../assets/imgs/login/new_bg_login.jpeg'
let logo = '../../assets/imgs/login/logo_small.svg'

class HomeScreen extends React.Component {
  render () {
    console.log ("components/HomeScreen");
    return (
      <View style = {styles.container}>
        <Image source = {require (logo)} style = {styles.imgLogo} />
      </View>
    )
  }

}

const Dimensions = require('Dimensions');
const screenWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20
  },
  imgLogo: {
    width: screenWidth-200,
    alignItems: 'center',
    //resizeMode: 'contain'
  },
});


export default createMaterialBottomTabNavigator({
  Home: { 
    screen: HomeScreen 
  },
  Alarm: {
    screen: AlarmScreen
  },
  Control: {
    screen: ControlScreen
  }
}, {
  initialRouteName: 'Home',
  activeTintColor: '#F44336',
});
