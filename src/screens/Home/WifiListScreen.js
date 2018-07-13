import React from 'react';
import { requestDeviceId, requestWifiList, requestSetWifi, asyncConnectWifi, registerDevice } from '../../helpers/device';

import { connect } from 'react-redux';
import WifiListScreen from '../../components/HomeScreen/WifiListScreen';

let reported = {
  light: 0, power: false, fan1: 4200, fan2: 0, 
  fan3: 4200, fan4: 100, owner_id: "kibak", timestamp: 12312, 
  cart1_scent: 'lemon', cart1_serial: 'lavender',
  cart2_scent: 'lavender', cart2_serial: 'asfsdf',
  cart3_scent: 'adsf', cart3_serial: 'afdsasfd',
  cart4_scent: 'afsfdasfsad', cart4_serial: 'adfasdfaf'
}

let desired = {
  light: 0, fan1: 4200, fan2: 0, fan3: 3200, fan4: 100, timestamp: 11234
}


const mapStateToProps = state => ({
  loading: state.getIn(['devices', 'loading']),
  error: state.getIn(['devices', 'error'])
})

const mapDispatchToProps = (dispatch, props) => ({
  async registerDevice(deviceId) {
    console.log("before registerDeice")
    await dispatch(registerDevice(deviceId))
    console.log("after registerDevice")
  }
})

export class WifiListScreenContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      deviceId: 'arom_jaeyoung'
    }
  }
  
  requestWifiList = async() => {
    console.log("request wifi list started")
    let deviceId = await requestDeviceId();
    console.log("request wifi list done")
    this.setState({
      deviceId: deviceId
    })
    deviceId = this.state.deviceId;
    console.log("Device id is",this.state.deviceId);
    const wifiList = await requestWifiList();
    console.log(wifiList);
    let wifiListLength = wifiList.length;
    let keyWifiList = [];
    for (i = 0; i < wifiListLength; i++) {
      keyWifiList.push({key: wifiList[i].ssid, auth: wifiList[i].auth})
    }
    console.log(keyWifiList);
    return keyWifiList
  }

  onWifiSelect = (name, password) => {
    asyncConnectWifi(name, password);
  }
  

  onRegisterDevice = async () => {
    console.log("onRegisterDevice Pressed");
    await this.props.registerDevice (this.state.deviceId);
  }
  
  render() {
    return (
      <WifiListScreen 
        requestWifiList = {this.requestWifiList}
        onWifiSelect = {this.onWifiSelect}
        onRegisterDevice = {this.onRegisterDevice}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WifiListScreenContainer);