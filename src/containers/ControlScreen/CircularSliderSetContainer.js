import React from 'react';
import CircularSliderSet from '../../components/ControlScreen/CircularSliderSet'

import { connect } from 'react-redux';
import { updateDeviceState } from '../../actions/device'

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch, props) => ({
  async sendDeviceState(device_id, power, light, name, fan1, fan2, fan3, fan4) {
    await dispatch(updateDeviceState(device_id, power, light, name. fan1, fan2, fan3, fan4));
  }
})
export class CircularSliderSetContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  onRegisterScentPress = () => {
    console.log("On Submit Press clicked");
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
        onRegisterScentPress = {this.onRegisterScentPress}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CircularSliderSetContainer);