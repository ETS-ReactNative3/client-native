import React from 'react';
import AddAlarmScreen from '../../components/AlarmScreen/AddAlarmScreen';
import { connect } from 'react-redux';
import { addReservation } from '../../actions/reservation';

const mapStateToProps = state => {
  return ({
    loading: state.getIn (['reservation', 'reservation', 'loading']),
    list: state.getIn (['reservation', 'reservation', 'list']),
    error: state.getIn (['reservation', 'reservation', 'error']),
    device: state.getIn (['user', 'userinfo', 'data', 'devices']),
  })
};

const mapDispatchToProps = (dispatch, props) => ({

  async addReservation (device_id, reservation_id, startTime, endTime, every, invokeTime, notification, notificationIds, light, fanPower, scentInfo ) {
    console.log ("addReservation dispatchtoprops");
    await dispatch (addReservation (device_id, reservation_id, startTime, endTime, every, invokeTime, notification, notificationIds, light, fanPower, scentInfo));
  }
  
});

export class AddAlarmScreenContainer extends React.Component {
  constructor (props) {
    super (props);
  }

  onAddReservationPress = async (device_id, reservation_id, startTime, endTime, every, invokeTime, notification, notificationIds, light, fanPower, scentInfo) => {
    console.log ("onReservationPress function");
    await this.props.addReservation (device_id, reservation_id, startTime, endTime, every, invokeTime, notification, notificationIds, light, fanPower, scentInfo);
  }


  render () {
    return <AddAlarmScreen
      {...this.props}
      onAddReservationPress = {this.onAddReservationPress}
      />
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(AddAlarmScreenContainer);
