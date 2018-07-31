import React from 'react';
import CircularSliderSet from '../../components/common/CircularSliderSet'
import { withNavigation } from 'react-navigation'

import { connect } from 'react-redux';
import { sendDeviceState } from '../../actions/device'
import {getScentIcon} from '../../helpers/icon'


const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch, props) => ({
  async sendDeviceState(device_id, power, light, name, fan1, fan2, fan3, fan4) {
    console.log("mapdispatchtoprops fans:",fan1,fan2,fan3,fan4)
    await dispatch(sendDeviceState(device_id, power, light, name, fan1, fan2, fan3, fan4));
  }
})
export class CircularSliderSetContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  
  onSendDeviceStatePress = async(device_id, power, light, name, fan1, fan2, fan3, fan4) => {
    fan1 = Math.round(fan1/360*100)
    fan2 = Math.round(fan2/360*100)
    fan3 = Math.round(fan3/360*100)
    fan4 = Math.round(fan4/360*100)
    console.log("OnSendDeviceStatePress clicked with fans",fan1, fan2, fan3, fan4);
    await this.props.sendDeviceState(device_id, power, light, name, fan1, fan2, fan3, fan4)
  }

  onRegisterRecipeStatePress = async (device_id) => {
    this.props.navigation.push ("Register", {
      device_id: device_id
    });
  }
  render() {
    return (
      <CircularSliderSet 
        sliders = {this.props.sliders}
        radius = {this.props.radius}
        lineWidth = {this.props.lineWidth}
        btnRadius = {this.props.btnRadius}
        defaultAngle1 = {this.props.defaultAngle1}
        defaultAngle2 = {this.props.defaultAngle2}
        defaultAngle3 = {this.props.defaultAngle3}
        defaultAngle4 = {this.props.defaultAngle4}
        background1 = {this.props.background1}
        background2 = {this.props.background2}
        background3 = {this.props.background3}
        background4 = {this.props.background4}
        onSendDeviceStatePress = {this.onSendDeviceStatePress}
        onRegisterRecipeStatePress = {this.onRegisterRecipeStatePress}
        actionOnRelease = {true}
      />
    )
  }
}

CircularSliderSetContainer.defaultProps = {
  background1: getScentIcon('bergamot'),
  background2: getScentIcon('bergamot'),
  background3: getScentIcon('bergamot'),
  background4: getScentIcon('bergamot'),
}

export const withNavCircularSliderSetContainer = withNavigation (CircularSliderSetContainer);
export default connect(mapStateToProps, mapDispatchToProps)(withNavCircularSliderSetContainer);
