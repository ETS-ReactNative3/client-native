import React from 'react';
import SignUpScreen from '../../components/SignUpScreen/SecondScreen';

export class SignUpScreenContainer extends React.Component {
  onCancelPress = () => {
    console.log("onCancelPress Clicked");
    this.props.navigation.pop()
  }
  render() {
    return <SignUpScreen
      onCancelPress = {this.onCancelPress} 
    />
  }
}
export default SignUpScreenContainer;
