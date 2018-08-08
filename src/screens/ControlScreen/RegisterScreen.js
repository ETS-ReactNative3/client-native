import React from 'react';
import RegisterScreen from '../../components/ControlScreen/RegisterScreen';
import { connect } from 'react-redux';
import { addRecipe } from '../../actions/recipe';
import { getDeviceState } from '../../actions/device';

const mapStateToProps = state => {
  //console.log ('statestate: ', state);
  return ({
    //loading: state.getIn (['reservation', 'reservation', 'loading']),
    //list: state.getIn (['reservation', 'reservation', 'list']),
    //error: state.getIn (['reservation', 'reservation', 'error']),
    device_state: state.getIn (['device']),
  })
};

const mapDispatchToProps = (dispatch, props) => ({

  async updateRecipe (ingredients, name, description, img_url, recipe_log_id) {
  //console.log ("modReservation dispatchtoprops");
  await dispatch (addRecipe (ingredients, name, description, img_url, recipe_log_id));

  },

  async getDeviceState (device_id) {
  //console.log ("getDeviceState dispatchtoprops");
  await dispatch (getDeviceState (device_id));
  }
  
});


export class RegisterScreenContainer extends React.Component {
  constructor (props) {
    super (props);
  }

  onRegisterRecipeStatePress = async (ingredients, name, description, img_url, recipe_log_id) => {
    //console.log ("onReservationPress function");
  await this.props.updateRecipe (ingredients, name, description, img_url, recipe_log_id);
  }

  onGetDeviceStatePress = async (device_id) => {
    await this.props.getDeviceState (device_id);
  }

  //nGetDeviceStatePress = async (device_id) => {
//console.log ("onGetDeviceStatePress function");
//await this.props.getDeviceState (device_id);
  //}


  render () {
    return <RegisterScreen
      {...this.props}
      onRegisterRecipeStatePress = {this.onRegisterRecipeStatePress}
      onGetDeviceStatePress = {this.onGetDeviceStatePress}
      />
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(RegisterScreenContainer);
