import React from 'react';
import { Text, View, Button, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Image from 'react-native-remote-svg';

import { oneString } from './agreement';

let background = '../../../assets/imgs/login/new_bg_login.jpeg'
let logo = '../../../assets/imgs/login/logo_small.svg'


// {
//   "email": "string",
//   "pwd": "string",
//   "name": "string",
//   "birthday": "2018-06-25T05:34:25.426Z",
//   "gender": "male",
//   "place": "string",
//   "space": "string",
//   "purpose": "string",
//   "prefer_scents": [
//     "string"
//   ]
// }
class FirstScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pwd: '',
      name: '',
      birthday: '',
      gender: '',
      place: '',
      space: '',
      purpose: '',
      prefer_scents: []
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style = {styles.imgBackground}
          source = {require(background)}
          blurRadius={20} >

          <View style={styles.topBar}>
            <TouchableOpacity onPress={this.props.onCancelPress}>
              <Text style = {styles.cancelText}>취소</Text>
            </TouchableOpacity>
            <Image 
              source={require(logo)} 
              style = {styles.logo} />
          </View>

          <ScrollView style={styles.scrollviewContainer} >
            <Text>
              {oneString}
            </Text>
          </ScrollView>
          
          <View style={styles.buttonContainer}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity style = {styles.generalBtn} onPress={this.props.onCancelPress}>
                <Text style={styles.buttonText}>비동의</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.generalBtn} onPress={this.props.onNextSignUpPress}>
                <Text style={styles.buttonText}>동의</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ImageBackground>
      </View>
    );
  }
}

export default FirstScreen;

const Dimensions = require('Dimensions');
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
  },
  topBar: {
    paddingTop: 20,
    paddingLeft: 10,
    height: 40
  },
  cancelText: {
    fontSize: 15,
    color: '#fff'
  },
  logo: {
    height: 17,
    alignItems: 'center'
  },
  scrollviewContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#FFF',
    marginLeft: 10,
    marginRight: 10
  },
  buttonContainer: {
    height: 80,
    width: screenWidth,
    padding: 20
    // justifyContent: 'center',
  },
  generalBtn: {
    justifyContent: 'center',
    backgroundColor: '#E46B7C',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonText: {
    fontSize: 15,
    color: '#fff'
  }
});
