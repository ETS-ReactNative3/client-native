import React from 'react';
import LoginScreen from '../components/LoginScreen';

import { connect } from 'react-redux'
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
    this.props.navigation.push("SignUp")
  }

  onSignInPress = (id, pw) => {
    console.log("onSignInPress Clicked");
    this.props.login("react-native@deepscent.io", "deepscent123!@#");
  }

  render() {
    return <LoginScreen
      {...this.props}
      onSignInPress={this.onSignInPress}
      onSignUpPress={this.onSignUpPress}/>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreenContainer);
