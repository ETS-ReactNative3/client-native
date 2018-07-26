import React from 'react';
import SignUpScreen from '../../components/SignUpScreen/SecondScreen';
import { NavigationActions } from 'react-navigation'

import { connect } from 'react-redux';
import { signup, signupFB } from '../../actions/user';


const mapStateToProps = state => ({
  loading: state.getIn(['user', 'signup','loading']),
  success: state.getIn(['user', 'signup', 'success']),
  error: state.getIn(['user', 'signup', 'error']),
});

const mapDispatchToProps = (dispatch, props) => ({
  async signup(email, pwd, name, birthday, gender, place, space, purpose, prefer_scents) {
    await dispatch(signup(email, pwd, name, birthday, gender, place, space, purpose, prefer_scents));
  },

  async signupFB(token, email, name, birthday, gender, place, space, purpose, prefer_scents) {
    await dispatch(signupFB(token, email, name, birthday, gender, place, space, purpose, prefer_scents))
  }
})


export class SignUpScreenContainer extends React.Component {

  onCancelPress = () => {
    console.log("onCancelPress Clicked");
    this.props.navigation.popToTop();
  }
  onSubmitPress = async (state, isFB=false, isKakao=false) => {
    if (isFB == false && isKakao == false) {
      for (key in state) {
        if (state[key] === '') {
          return console.log(key,"field is empty");
        }
      }
      if (state['pwd'] != state['pwdConfirm']) {
        return console.log("Password confirm does not equal Password");
      }
    } else {
      for (key in state) {
        if (state[key] === '' && key != 'pwd' && key != 'pwdConfirm') {
          return console.log(key,"field is empty");
        }
      }
    }

    if (isFB) {
      console.log("Try facebook signup, token is",this.props.navigation.state.params['token'], "other params are",state)
      await this.props.signupFB(this.props.navigation.state.params['token'], 
      state['email'], state['name'], state['birthday'], 
      state['gender'], state['place'], state['space'], 
      state['purpose'], state['prefer_scents'])
    } else {
      console.log("try normal signup")
      await this.props.signup(state['email'], state['pwd'],
       state['name'], state['birthday'], state['gender'], 
       state['place'],state['space'], state['purpose'], 
       state['prefer_scents']);
    }
    // wait(7000);
    if (this.props.success) {
      this.props.navigation.popToTop();
      console.log("Success");
    } else {
      console.log("failure");
      console.log(this.props.error);
    }
  }
  render() {
    return <SignUpScreen
      {...this.props}
      onCancelPress = {this.onCancelPress}
      onSubmitPress = {this.onSubmitPress}
      name = {this.props.navigation.state.params['name']}
      isFB = {this.props.navigation.state.params['isFB']}
      isKakao = {this.props.navigation.state.params['isKakao']}
    />
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreenContainer);
