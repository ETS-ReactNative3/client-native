import React from 'react';
import LoginScreen from '../components/LoginScreen';

import { connect } from 'react-redux'

import { login } from '../actions/user';

const mapStateToProps = state => ({
}) ;

const mapDispatchToProps = (dispatch, props) => ({
  login(email, pwd) {
    return dispatch(login(email, pwd));
  }
});

export class LoginScreenContainer extends React.Component {
  onSignUpPress = () => {
    this.props.navigation.push("SignUp")
  }

  onSignInPress = () => {
    this.props.login("react-native@deepscent.io", "deepscent123!@#");
  }

  render() {
    return <LoginScreen
      onSignInPress={this.onSignInPress}
      onSignUpPress={this.onSignUpPress}/>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreenContainer);
