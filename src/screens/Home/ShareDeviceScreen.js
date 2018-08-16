import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { connect } from 'react-redux';
import ShareDeviceScreen from '../../components/HomeScreen/ShareDeviceScreen';
import { userinfo } from '../../actions/user'
import { registerShareDevice } from '../../actions/device';


const mapStateToProps = state => {
  console.log ("123" , state);
  return ({
    userid: state.getIn(['user','userinfo','user','data','user_id'])
  })
}

const mapDispatchToProps = (dispatch, props) => ({
  async getUserinfo() {
    console.log("get userinfo pressed");
    await dispatch(userinfo());
  },

  async registerShareDevice (share_code) {
    await dispatch (registerShareDevice (share_code));
  }
})

export class shareDeviceScreenContainer extends React.Component {

  onAddShareDevicePress = async (share_code) => {
    console.log ("share_code is ", share_code);
    await this.props.registerShareDevice (share_code);
  }

  getUserinfo = async () => {
    await this.props.getUserinfo ();
  }
  
  render() {
    return (
      <ShareDeviceScreen
        onAddShareDevicePress = {this.onAddShareDevicePress}
        getUserInfo = {this.getUserinfo}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(shareDeviceScreenContainer);
