import React from 'react';
import SignUpScreen from '../../components/SignUpScreen/FirstScreen';

export class SignUpScreenContainer extends React.Component {
  onCancelPress = () => {
    console.log("onCancelPress Clicked");
    this.props.navigation.pop()
  }

  onNextSignUpPress = () => {
    console.log("onNextSignUpPress Clicked");
    this.props.navigation.push("SignUpSecond")
  }

  render() {
    return <SignUpScreen
      onCancelPress = {this.onCancelPress} 
      onNextSignUpPress = {this.onNextSignUpPress}
    />
  }
}
export default SignUpScreenContainer;
