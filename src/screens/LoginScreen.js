import React from 'react';
import LoginScreen from '../components/LoginScreen';

import { connect } from 'react-redux';
import { login } from '../actions/user';
import { Alert } from 'react-native';
import _ from 'lodash';

const mapStateToProps = state => ({
  loading: state.getIn(['user', 'auth', 'loading']),
  token: _.toString(state.getIn(['user', 'auth', 'token', 'auth_token'])),
  error: _.toString(state.getIn(['user', 'auth', 'error']))
}) ;

const mapDispatchToProps = (dispatch, props) => ({
  async login(email, pwd) {
    await dispatch(login(email, pwd));
  }
});

export class LoginScreenContainer extends React.Component {
  onSignUpPress = () => {
    console.log("onSignUpPress Clicked");
    this.props.navigation.push("SignUpFirst")
  }

  onLoginPress = async (email, pwd) => {
    console.log("onLoginPress Clicked email:" + email + " password: " + pwd + " second");
    await this.props.login(email, pwd);
    console.log (this.props.token, this.props.error);
    if (this.props.error) {
      console.log ("error!");
    }
    else if (this.props.token) {
      console.log ("screens/LoginScreen.js onLoginPress: " + this.props.token)
      this.props.navigation.push ("Tab");
    } else {
      console.log("Not connected to server");
    }
    // this.props.login("react-native@deepscent.io", "deepscent123!@#");
  }

  async onLoginFBPress() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('187908931794227', {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
      console.log("response auth token for fb login is:",token)
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
