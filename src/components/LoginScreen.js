import React from 'react';
import { Text, View, Button, TextInput, Image, ImageBackground, Keyboard, TouchableOpacity, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LoadingOverlay from '../components/LoadingOverlay';

let background = '../assets/imgs/login/new_bg_login.jpeg';
let logo = '../assets/imgs/login/logo.png';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: ''
    }
  }

  LoginScreen = ({
    onSignUpPress,
    onSignInPress,
    loading=false,
    error=null,
    token=null
  }) => (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ImageBackground
          style = {styles.imgBackground}
          source = {require(background)}
        >
          <LoadingOverlay visible={loading}/>
          { error && <Text> login error: {error} </Text> }
          { token && <Text> login succeed: </Text> }
          <View style = {styles.generalStyle}>
            <Image source={require(logo)} style={[styles.imgLogo,{marginTop: 60, marginBottom: 20}]} />
            <View style = {styles.generalStyle}>
              <TextInput
                style={styles.textInput}
                placeholder="ID"
              />
              <TextInput
                style={[styles.textInput, {marginBottom: 20}]}
                placeholder="Password"
              />
              <TouchableOpacity style = {[styles.generalBtn, styles.loginBtn]} onPress={() => onSignInPress("d","b")}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {[styles.forgotpwBtn, {marginBottom: 100}]}>
                <Text style={styles.buttonText}>Forgot Password</Text>
  
              </TouchableOpacity>
              <TouchableOpacity style = {[styles.generalBtn, styles.facebookBtn]}>
                <Text style={styles.buttonText}>FACKBOOK LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {[styles.generalBtn, styles.kakaoBtn]}>
                <Text style={styles.buttonText}>KAKAO LOGIN</Text>
              </TouchableOpacity>
  
              <TouchableOpacity style = {styles.forgotpwBtn} onPress={onSignUpPress}>
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );

  render() {
    return LoginScreen(this.props.onSignUpPress, this.props.onSignInPress)
  }
}

const LoginScreen = ({
  onSignUpPress,
  onSignInPress,
  loading=false,
  error=null,
  token=null
}) => (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ImageBackground
        style = {styles.imgBackground}
        source = {require(background)}
      >
        <LoadingOverlay visible={loading}/>
        { error && <Text> login error: {error} </Text> }
        { token && <Text> login succeed: </Text> }
        <View style = {styles.generalStyle}>
          <Image source={require(logo)} style={[styles.imgLogo,{marginTop: 60, marginBottom: 20}]} />
          <View style = {styles.generalStyle}>
            <TextInput
              style={styles.textInput}
              placeholder="ID"
            />
            <TextInput
              style={[styles.textInput, {marginBottom: 20}]}
              placeholder="Password"
            />
            <TouchableOpacity style = {[styles.generalBtn, styles.loginBtn]} onPress={() => onSignInPress("d","b")}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.forgotpwBtn, {marginBottom: 100}]}>
              <Text style={styles.buttonText}>Forgot Password</Text>

            </TouchableOpacity>
            <TouchableOpacity style = {[styles.generalBtn, styles.facebookBtn]}>
              <Text style={styles.buttonText}>FACKBOOK LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.generalBtn, styles.kakaoBtn]}>
              <Text style={styles.buttonText}>KAKAO LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.forgotpwBtn} onPress={onSignUpPress}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  </View>
);

export default Login;

const Dimensions = require('Dimensions');
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const elementWidth = screenWidth - 80
const elementHeight = 40

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  generalStyle: {
    alignItems: 'center'
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    // alignItems: 'center',
  },
  imgLogo: {
    width: screenWidth-200,
    alignItems: 'center',
    resizeMode: 'contain'
  },
  textInput: {
    backgroundColor: '#fff',
    borderColor: '#000000',
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 1,
    width: elementWidth,
    height: elementHeight,
    marginBottom: 2,
    padding: 5
    // alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
  generalBtn: {
    width: elementWidth,
    height: elementHeight,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  loginBtn: {
    backgroundColor: '#e46b7c',
    alignItems: 'center',
  },
  forgotpwBtn: {
    alignSelf: 'center',
  },
  facebookBtn: {
    backgroundColor: '#5481E9'
  },
  kakaoBtn: {
    backgroundColor: '#FBE353'
  }
});
