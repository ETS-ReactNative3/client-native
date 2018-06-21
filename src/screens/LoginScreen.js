import React from 'react';
import LoginScreen from '../components/LoginScreen';

import { connect } from 'react-redux'

const mapStateToProps = state => ({
}) ;

const mapDispatchToProps = (dispatch, props) => ({
});

export class LoginScreenContainer extends React.Component {
  onSignUpPress = () => {
    this.props.navigation.push("SignUp")
  }

  render() {
    return <LoginScreen
      onSignInPress={this.onSignUpPress}
      onSignUpPress={this.onSignUpPress}/>;
  }
}

console.log(LoginScreenContainer);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreenContainer);
