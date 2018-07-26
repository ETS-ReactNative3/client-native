import React from 'react';
import { connect } from 'react-redux';
import AlarmScreen from '../../components/AlarmScreen/AlarmScreen'
import { createStackNavigator } from 'react-navigation';
import Header from '../../components/Headers/MainHeader';
import { loadReservation } from '../../actions/reservation';
import _ from 'lodash';


const mapStateToProps = state => {
  console.log (state);
  console.log ("this is qwer");
  return ({
  loading: state.getIn(['reservation', 'reservation', 'loading']),
  list: state.getIn(['reservation', 'reservation', 'list']),
  error: state.getIn(['reservation', 'reservation', 'error']),
  device: state.getIn(['user', 'userinfo', 'data', 'devices']),  
    /* Object {
          "arom_jaeyoung": "dd",
         },
    */


  }) 
  console.log ("this is device", device);
};

const mapDispatchToProps = (dispatch, props) => ({
  async loadReservation() {
    await dispatch(loadReservation());
  }
});

export class AlarmScreenContainer extends React.Component {
  
  loadReservation = () => {
     console.log ("hello world");
     this.props.loadReservation ();
     console.log ("finish");
   }
  
   onPressAdd = () => {
     console.log ("alarm add press");
     this.props.navigation.push ("AddAlarm");
  
   }

  onPressMod = (item) => {
    console.log ("alarm modifiy press: ", item);
    this.props.navigation.push ("ModAlarm", {
      item: item
    });
  }

render() {
    console.log ("hello hello");
    console.log (this.props);
    return <AlarmScreen
      {...this.props}
      loadReservation = {this.loadReservation}
      onPressAdd = {this.onPressAdd}
      onPressMod = {this.onPressMod}
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
