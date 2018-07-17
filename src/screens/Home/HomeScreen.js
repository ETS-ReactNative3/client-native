import React from 'react';
import { connect } from 'react-redux';
import { userinfo } from '../../actions/user';
import HomeScreen from '../../components/HomeScreen/HomeScreen';

let data = [];
const logoPath = '../../../assets/imgs/home/logo.png';

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch, props) => ({
  async getUserinfo() {
    console.log("get userinfo pressed");
    await dispatch(userinfo());
  }
})

export class HomeScreenContainer extends React.Component {

  onAddDeviceScreenPress = async ()=> {
    await this.props.getUserinfo();
    console.log("onAddDevicePress pressed");
    this.props.navigation.push("AddDevice");
  }

  render() {
    return <HomeScreen
      {...this.props}
      onAddDeviceScreenPress = {this.onAddDeviceScreenPress} 
      todayScent = {[
        {name: "HappyOrange", icons: ["lavender", "peppermint","eucalyptus"], saves: 243, shares: 120},
        {name: "Relax Lavender", icons: ["lavendar", "grass"], saves: 250, shares: 108},
        {name: "Shining Lemon", icons: ["Lemon","Colver"], saves: 137, shares: 95}
      ]}

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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreenContainer);