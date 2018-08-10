import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { connect } from 'react-redux';
import AddDeviceScreen from '../../components/HomeScreen/AddDeviceScreen';
import { userinfo } from '../../actions/user';
import { requestSetOwner } from '../../helpers/device';
import { shareDevice } from '../../actions/device';

const mapStateToProps = state => {
  console.log (state);
  return ({
    userid: state.getIn(['user','userinfo','user','data','user_id'])
  })
}

const mapDispatchToProps = (dispatch, props) => ({
  async getUserinfo() {
    console.log("get userinfo pressed");
    await dispatch(userinfo());
  },

  async onGenerateShareCode (device_id) {
    await dispatch (shareDevice (device_id));
  }
})

export class AddDeviceScreenContainer extends React.Component {

  onAddNewDevicePress = async() => {
    await requestSetOwner(this.props.userid);
    this.props.navigation.push("WifiList");
  }

  onGenerateShareCode = async (device_id, share_code) => {
    await this.props.onGenerateShareCode (device_id);
  }

  getUserinfo = async () => {
    await this.props.getUserinfo ();
  }
  
  render() {
    return (
      <AddDeviceScreen
        onAddNewDevicePress = {this.onAddNewDevicePress}
        onGenerateShareCode = {this.onGenerateShareCode}
        getUserInfo = {this.getUserinfo}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeviceScreenContainer);
