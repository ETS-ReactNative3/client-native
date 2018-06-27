import React from 'react';
import SignUpScreen from '../../components/SignUpScreen/SecondScreen';

import { connect } from 'react-redux';
import { signup } from '../../actions/user';


const mapStateToProps = state => ({
  loading: state.getIn(['user', 'signup','loading']),
  success: state.getIn(['user', 'signup', 'success']),
  error: state.getIn(['user', 'signup', 'error']),
});

const mapDispatchToProps = (dispatch, props) => ({
  async signup(email, pwd, name, birthday, gender, place, space, purpose, prefer_scents) {
    await dispatch(signup(email, pwd, name, birthday, gender, place, space, purpose, prefer_scents));
  }
})

export class SignUpScreenContainer extends React.Component {
  onCancelPress = () => {
    console.log("onCancelPress Clicked");
    this.props.navigation.pop()
  }
  onSubmitPress = async (state) => {
    for (key in state) {
      if (state[key] === '') {
        return console.log(key,"field is empty");
      }
    }
    if (state['pwd'] != state['pwdConfirm']) {
      return console.log("Password confirm does not equal Password");
    }
    await this.props.signup(state['email'], state['pwd'], state['name'], state['birthday'], state['gender'], state['place'],state['space'], state['purpose'], state['prefer_scents']);
    // wait(7000);
    if (this.props.success) {
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
    />
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreenContainer);