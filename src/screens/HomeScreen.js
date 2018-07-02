import React from 'react';
import HomeScreen from '../components/HomeScreen/HomeScreen'

let data = [];
export class HomeScreenContainer extends React.Component {

  render() {

    return <HomeScreen 
      todayScent = {[
        {name: "HappyOrange", icons: ["Orange", "happy"], saves: 243, shares: 120},
        {name: "Relax Lavender", icons: ["lavendar", "grass"], saves: 250, shares: 108},
        {name: "Shining Lemon", icons: ["Lemon","Colver"], saves: 137, shares: 95}
      ]}

      // Data structure is as follows
      // "device_id":
      // {
      //   "state": {
      //     "power": true,
      //     "light": 0,
      //     "name": "string",
      //     "fan1": 0,
      //     "fan2": 0,
      //     "fan3": 0,
      //     "fan4": 0
      //   },
      //   "is_recipe": false
      // }
      devices = {[
        {"abc123": {
          "name": "Jaeyub's Arom",
          "reported": {
            "light": 0,
            "power": false,
            "fan1": 4200,
            "fan2": 0,
            "fan3": 4200,
            "fan4": 100,
            "owner_id": "kibak",
            "timestamp": 12312321,
            "cart1_scent": "lemon",
            "cart1_serial": "dfadsfasfd",
            "cart2_scent": "lavender",
            "cart2_serial": "kfadmflkaadkflas",
            "cart3_scent": "citronella",
            "cart3_serial": "dafklkajdflk",
            "cart4_scent": "peppermint",
            "cart4_serial": "adsfkadslfk"
          },
          "desired": {
            "light": 0,
            "power": true,
            "fan1": 4200,
            "fan2": 0,
            "fan3": 4200,
            "fan4": 100,
            "timestamp": 12312321
          }
        }},
        {"gsb732": {
          "name": "Arom2",
          "reported": {
            "light": 0,
            "power": true,
            "fan1": 1231,
            "fan2": 124,
            "fan3": 4200,
            "fan4": 512,
            "owner_id": "kibak",
            "timestamp": 12312321,
            "cart1_scent": "lemon",
            "cart1_serial": "dfadsfasfd",
            "cart2_scent": "",
            "cart2_serial": "",
            "cart3_scent": "citronella",
            "cart3_serial": "dafklkajdflk",
            "cart4_scent": "peppermint",
            "cart4_serial": "adsfkadslfk"
          },
          "desired": {
            "light": 0,
            "power": true,
            "fan1": 4200,
            "fan2": 0,
            "fan3": 4200,
            "fan4": 100,
            "timestamp": 12312321
          }
        }},
        {"bcd612": {
          "name": "kibak`s arom",
          "reported": {
            "light": 0,
            "power": false,
            "fan1": 4200,
            "fan2": 0,
            "fan3": 4200,
            "fan4": 100,
            "owner_id": "kibak",
            "timestamp": 12312321,
            "cart1_scent": "lemon",
            "cart1_serial": "dfadsfasfd",
            "cart2_scent": "lavender",
            "cart2_serial": "kfadmflkaadkflas",
            "cart3_scent": "",
            "cart3_serial": "",
            "cart4_scent": "peppermint",
            "cart4_serial": "adsfkadslfk"
          },
          "desired": {
            "light": 0,
            "power": true,
            "fan1": 4200,
            "fan2": 0,
            "fan3": 4200,
            "fan4": 100,
            "timestamp": 12312321
          }
        }}
      ]}
    />
  }
}
export default HomeScreenContainer;

      //   [
      //   {index: 0, name: "Arom1", icons: ["Orange", "Apple"], light: 80, scent: 70, on: true, deviceID: "abc123"}, 
      //   {index: 1, name: "Arom2", icons: ["Strawberry", "Banana"], light: 60, scent: 30, on: false, deviceID: "def124"},
      //   {index: 2, name: "Arom3", icons: ["Blueberry", "Tropicana"], light: 30, scent: 40, on: false, deviceID: "gsb723"}
      // ]}