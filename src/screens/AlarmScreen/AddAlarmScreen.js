import React from 'react';
import AddAlarmScreen from '../../components/AlarmScreen/AddAlarmScreen';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return ({
    loading: state.getIn (['reservation', 'reservation', 'loading']),
    list: state.getIn (['reservation', 'reservation', 'list']),
    error: state.getIn (['reservation', 'reservation', 'error']),
    device: state.getIn (['user', 'userinfo', 'data', 'devices']),
  })
};

const mapDispatchToProps = (dispatch, props) => ({
  
});

export class AddAlarmScreenContainer extends React.Component {
  render () {
    return <AddAlarmScreen
      {...this.props}
      />
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(AddAlarmScreenContainer);
