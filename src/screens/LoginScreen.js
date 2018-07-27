import React from 'react';
import LoginScreen from '../components/LoginScreen';

import { connect } from 'react-redux';
import { login, loginFB } from '../actions/user';
import { Alert } from 'react-native';
import _ from 'lodash';

const mapStateToProps = state => ({
  loading: state.getIn(['user', 'auth', 'loading']),
  token: _.toString(state.getIn(['user', 'auth', 'token', 'auth_token'])),
  error: _.toString(state.getIn(['user', 'auth', 'error'])),
  fb_exist_account: state.getIn(['user','auth','fb_exist_account'])
}) ;

const mapDispatchToProps = (dispatch, props) => ({
  async login(email, pwd) {
    await dispatch(login(email, pwd));
  },
  async loginFB (token) {
    console.log("loginFB called")
    await dispatch(loginFB(token))
  }
});

export class LoginScreenContainer extends React.Component {
  onSignUpPress = (name='', isFB=false, isKakao=false, token='') => {
    console.log("onSignUpPress Clicked");
    this.props.navigation.push("SignUpFirst",{'name': name, 'isFB': isFB, 'isKakao': isKakao, 'token': token})
  }

  onLoginPress = async (email, pwd) => {
    console.log("onLoginPress Clicked email:" + email + " password: " + pwd + " second");
    await this.props.login(email, pwd);
    console.log (this.props.token, this.props.error);
    if (this.props.error) {
      console.log ("error!");
    }
    else {
      console.log ("screens/LoginScreen.js onLoginPress: " + this.props.token)
      this.props.navigation.push ("Tab");
    }
    // this.props.login("react-native@deepscent.io", "deepscent123!@#");
  }

  onLoginFBPress = async() => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('187908931794227', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      const data = await response.json()
      // Alert.alert(
      //   'Logged in!',
      //   `Hi ${data.name}!`,
      // );
      console.log("data attained is",data)
      console.log("response auth token for fb login is:",token)
      await this.props.loginFB(token);
      console.log("fb_exist_account is",this.props.fb_exist_account)
      if (this.props.fb_exist_account == false) {
        console.log ("Account does not exist")
        this.onSignUpPress(name=data.name, isFB=true, isKakao=false, token)
      } else {
        console.log("Facebook login success");
        this.props.navigation.push ("Tab");
      }
    }
  }

  componentDidMount () {
    console.log ("screens/LoginScreen.js token: " + this.props.token)
    if (this.props.token) {
      this.props.navigation.push ("Tab");
    }
  }

  render() {    

    console.log ("waiting for input and return LoginScreen");
    return <LoginScreen
      {...this.props}
      onLoginPress={this.onLoginPress}
      onSignUpPress={this.onSignUpPress}
      onLoginFBPress={this.onLoginFBPress}/>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreenContainer);
