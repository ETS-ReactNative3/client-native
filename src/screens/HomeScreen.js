import React from 'react';
import HomeScreen from '../components/HomeScreen';

export class HomeScreenContainer extends React.Component {
  render() {
    return <HomeScreen 
      todayScent = {[
        {name: "HappyOrange", icons: ["Orange", "happy"], saves: 243, shares: 120},
        {name: "Relax Lavender", icons: ["lavendar", "grass"], saves: 250, shares: 108},
        {name: "Shining Lemon", icons: ["Lemon","Colver"], saves: 137, shares: 95}
      ]}
      device = {[
        {index: 0, name: "Arom1", icons: ["Orange", "Apple"], light: 80, scent: 70, on: true, deviceID: "abc123"}, 
        {index: 1, name: "Arom2", icons: ["Strawberry", "Banana"], light: 60, scent: 30, on: false, deviceID: "def124"},
        {index: 2, name: "Arom3", icons: ["Blueberry", "Tropicana"], light: 30, scent: 40, on: false, deviceID: "gsb723"}
      ]}
    />
  }
}
export default HomeScreenContainer;