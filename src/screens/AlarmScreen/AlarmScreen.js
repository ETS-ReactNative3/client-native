import React from 'react';
import { connect } from 'react-redux';
import AlarmScreen from '../../components/AlarmScreen/AlarmScreen'
import { createStackNavigator } from 'react-navigation';
import Header from '../../components/Headers/MainHeader';
import { loadReservation } from '../../actions/reservation';
import _ from 'lodash';


const mapStateToProps = (state => ({
  loading: state.getIn(['user', 'userinfo', 'loading']),
  token: _.toString(state.getIn(['user', 'userinfo', 'token'])),
  error: _.toString(state.getIn(['user', 'userinfo', 'error'])),
})) ;

const mapDispatchToProps = (dispatch, props) => ({
  async loadReservation() {
    await dispatch(loadReservation());
  }
});

export class AlarmScreenContainer extends React.Component {
  
  loadReservation = () => {
    console.log ("hello world");
    this.props.loadReservation ();

  }

  render() {
    console.log ("hello hello");
    console.log (this.props);
    return <AlarmScreen
      {...this.props}
      loadReservation = {this.loadReservation}  
      />
  }
}
  /*
const stackNav = createStackNavigator({
  Main: {
    screen: AlarmScreenContainer,
    navigationOptions:({navigaton}) => ({
      header:    // Your custom header
        <Header />
    })
  }
})

export default stackNav;
*/

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (AlarmScreenContainer);
