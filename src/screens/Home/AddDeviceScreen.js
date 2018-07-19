import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { connect } from 'react-redux';
import AddDeviceScreen from '../../components/HomeScreen/AddDeviceScreen';
import { userinfo } from '../../actions/user'
import { requestSetOwner } from '../../helpers/device';

const mapStateToProps = state => ({
  userid: state.getIn(['user','userinfo','data','user_id'])
})

const mapDispatchToProps = (dispatch, props) => ({
  async getUserinfo() {
    console.log("get userinfo pressed");
    await dispatch(userinfo());
  }
})

export class AddDeviceScreenContainer extends React.Component {

  onAddNewDevicePress = async() => {
    await requestSetOwner(this.props.userid);
    this.props.navigation.push("WifiList");
  }
  
  render() {
    return (
      <AddDeviceScreen
        onAddNewDevicePress = {this.onAddNewDevicePress}
        getUserInfo = {this.getUserinfo}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeviceScreenContainer);