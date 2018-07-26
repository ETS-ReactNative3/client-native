import React from 'react';
import ModAlarmScreen from '../../components/AlarmScreen/ModAlarmScreen';
import { connect } from 'react-redux';
import { modReservation } from '../../actions/reservation';
import { getDeviceState } from '../../actions/device';

const mapStateToProps = state => {
  console.log ('statestate: ', state);
  return ({
    loading: state.getIn (['reservation', 'reservation', 'loading']),
    list: state.getIn (['reservation', 'reservation', 'list']),
    error: state.getIn (['reservation', 'reservation', 'error']),
    device: state.getIn (['user', 'userinfo', 'data', 'devices']),
    device_state: state.getIn (['device']),
  })
};

const mapDispatchToProps = (dispatch, props) => ({

  async modReservation (device_id, reservation_id, startTime, endTime, every, invokeTime, notification, notificationIds, light, fanPower, scentInfo, label) {
    console.log ("addReservation dispatchtoprops");
    await dispatch (modReservation (device_id, reservation_id, startTime, endTime, every, invokeTime, notification, notificationIds, light, fanPower, scentInfo, label));

  },

  async getDeviceState (device_id) {
    console.log ("getDeviceState dispatchtoprops");
    await dispatch (getDeviceState (device_id));
  }
  
});


export class ModAlarmScreenContainer extends React.Component {
  constructor (props) {
    super (props);
  }

  onModReservationPress = async (device_id, reservation_id, startTime, endTime, every, invokeTime, notification, notificationIds, light, fanPower, scentInfo, label) => {
    console.log ("onReservationPress function");
    await this.props.modReservation (device_id, reservation_id, startTime, endTime, every, invokeTime, notification, notificationIds, light, fanPower, scentInfo, label);
  }

  onGetDeviceStatePress = async (device_id) => {
    console.log ("onGetDeviceStatePress function");
    await this.props.getDeviceState (device_id);
  }


  render () {
    return <ModAlarmScreen
      {...this.props}
      onModReservationPress = {this.onModReservationPress}
      onGetDeviceStatePress = {this.onGetDeviceStatePress}
      />
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ModAlarmScreenContainer);
