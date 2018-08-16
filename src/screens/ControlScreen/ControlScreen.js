import React from 'react';
import ReactInterval from 'react-interval';
import ControlScreen from '../../components/ControlScreen/ControlScreen'

import { connect } from 'react-redux';
import { userinfo } from '../../actions/user.js'
//import { createStackNavigator } from 'react-navigation';
//import Header from '../../components/Headers/MainHeader'

const mapStateToProps = state => ({

})
const mapDispatchToProps = (dispatch, props) => ({
  async userinfo() {
    console.log("mapDispatchToProps userinfo()");
    await dispatch(userinfo());
  }
})

class ControlScreenContainer extends React.Component {

  getUserInfo = async() => {
    console.log("User info is as follows:")
    await this.props.userinfo();
  } 
  constructor (props) {
    super(props);
  }

  render() {
    return <ControlScreen 
      getUserInfo = {this.getUserInfo}
      />
  }
}
  /*
const stackNav = createStackNavigator({
  Main: {
    screen: ControlScreenContainer,
    navigationOptions:({navigaton}) => ({
      header:    // Your custom header
        <Header />
    })
  }
})

export default stackNav;
*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlScreenContainer);
