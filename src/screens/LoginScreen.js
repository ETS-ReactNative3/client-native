import React from 'react';
import LoginScreen from '../components/LoginScreen';

import { connect } from 'react-redux'

const mapStateToProps = state => ({
}) ;

const mapDispatchToProps = (dispatch, props) => ({
});

export class LoginScreenContainer extends React.Component {
  onSignupClick = () => {
    this.props.navigation.push("Signup")
  }

  render() {
    return <LoginScreen onSignupClick={this.onSignupClick}/>;
  }
}

console.log(LoginScreenContainer);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreenContainer);
