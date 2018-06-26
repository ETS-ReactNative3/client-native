import React from 'react';
import { Text, View, Button, TouchableOpacity, ScrollView} from 
'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Image from 'react-native-remote-svg';

let background = '../../assets/imgs/login/new_bg_login.jpeg'
let logo = '../../assets/imgs/login/logo_small.svg'

class HomeScreen extends React.Component {
  render () {
    return (
      <View style = {styles.container}>
        <TouchableOpacity onPress = {this.props.onCancelPress}>
          <Text> go back </Text>
        </TouchableOpacity>
      </View>
    )
  }

}

export default HomeScreen;

const styles = EStyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20
  },
});
