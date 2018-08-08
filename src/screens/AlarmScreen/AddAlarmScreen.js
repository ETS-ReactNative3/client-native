import React from 'react';
import AddAlarmScreen from '../../components/AlarmScreen/AddAlarmScreen';
import { connect } from 'react-redux';
import { addReservation } from '../../actions/reservation';
import { getDeviceState } from '../../actions/device';

const mapStateToProps = state => {
  console.log ('statestate: ', state);
  return ({
    loading: state.getIn (['reservation', 'reservation', 'loading']),
    list: state.getIn (['reservation', 'reservation', 'list']),
    error: state.getIn (['reservation', 'reservation', 'error']),
    device: state.getIn (['user', 'userinfo', 'user', 'data', 'devices']),
    device_state: state.getIn (['device']),
  })
};

const mapDispatchToProps = (dispatch, props) => ({

  async addReservation (device_id, reservation_id, startTime, endTime, every, invokeTime, notification, notificationIds, light, fanPower, scentInfo, label) {
    console.log ("modReservation dispatchtoprops");
    await dispatch (addReservation (device_id, reservation_id, startTime, endTime, every, invokeTime, notification, notificationIds, light, fanPower, scentInfo, label));

  },

  async getDeviceState (device_id) {
    console.log ("getDeviceState dispatchtoprops");
    await dispatch (getDeviceState (device_id));
  }
  
});


export class AddAlarmScreenContainer extends React.Component {
  constructor (props) {
    super (props);
  }

  onAddReservationPress = async (device_id, reservation_id, startTime, endTime, every, invokeTime, notification, notificationIds, light, fanPower, scentInfo, label) => {
    console.log ("onReservationPress function");
    await this.props.addReservation (device_id, reservation_id, startTime, endTime, every, invokeTime, notification, notificationIds, light, fanPower, scentInfo, label);
  }

  onGetDeviceStatePress = async (device_id) => {
    console.log ("onGetDeviceStatePress function");
    await this.props.getDeviceState (device_id);
  }


  render () {
    return <AddAlarmScreen
      {...this.props}
      onAddReservationPress = {this.onAddReservationPress}
      onGetDeviceStatePress = {this.onGetDeviceStatePress}
      />
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(AddAlarmScreenContainer);
