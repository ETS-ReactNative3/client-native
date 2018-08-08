import React from 'react';
import { loadCollection } from '../../actions/recipe';
import EachCollectionScreen from '../../components/CollectionScreen/EachCollectionScreen';
import { connect } from 'react-redux';
import { userinfoOthers } from '../../actions/user';
import { userinfo } from '../../actions/user';
import { getDeviceState } from '../../actions/device';
import  { sendDeviceState } from '../../actions/device';



const mapStateToProps = state => {
  console.log ("state is ", state);
  return ({
    //loading: state.getIn(['recipe', 'collection', 'loading']),
    //error: state.getIn(['recipe', 'collection', 'error']),
    //list: state.getIn(['recipe', 'collection', 'list']),
    user: state.getIn (['user', 'userinfo']),
    device_state: state.getIn (['device']),
  })
};

const mapDispatchToProps = (dispatch, props) => ({
  async loadCollection() {
    dispatch(loadCollection({}));
  },

  async userinfoOthers (user_id) {
    dispatch (userinfoOthers (user_id));
  },

  async userinfo () {
    dispatch (userinfo ());
  },

  async getDeviceState (device_id) {
    await dispatch (getDeviceState (device_id));
  },

  async sendDeviceState (device_id, power, light, name, fan1, fan2, fan3, fan4) {
    await dispatch (sendDeviceState (device_id, power, light, name, fan1, fan2, fan3, fan4));
  }

});

export class EachCollectionScreenContainer extends React.Component {

  onGetUploaderId = async (user_id) => {
    await this.props.userinfoOthers (user_id);
  }

  onGetUserInfo = async () => {
    await this.props.userinfo ();
  }

  onSendDeviceStatePress = async (device_id, power, light, name, fan1, fan2, fan3, fan4) => {
    console.log ("haha");
    await this.props.sendDeviceState (device_id, power, light, name, fan1, fan2, fan3, fan4);
  }

  onGetDeviceStatePress = async (device_id) => {
    await this.props.getDeviceState (device_id);
  }



  render() {
    return <EachCollectionScreen
      {...this.props}
      onGetUploaderId = {this.onGetUploaderId}
      onGetUserInfo = {this.onGetUserInfo}
      onSendDeviceStatePress = {this.onSendDeviceStatePress}
      onGetDeviceStatePress = {this.onGetDeviceStatePress}
     />
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EachCollectionScreenContainer);
