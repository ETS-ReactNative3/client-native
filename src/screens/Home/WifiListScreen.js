import React from 'react';
import { requestDeviceId, requestWifiList, requestSetWifi } from '../../actions/device';
import WifiListScreen from '../../components/HomeScreen/WifiListScreen';

export class WifiListScreenContainer extends React.Component {
  
  requestWifiList = async() => {
    let deviceId = await requestDeviceId();
    console.log("Device id is",deviceId);
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
    requestSetWifi(name, password);
  }
  
  render() {
    return (
      <WifiListScreen 
        requestWifiList = {this.requestWifiList}
        onWifiSelect = {this.onWifiSelect}
      />
    )
  }
}

export default WifiListScreenContainer;