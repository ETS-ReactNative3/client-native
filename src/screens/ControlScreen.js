import React from 'react';
import ControlScreen from '../components/ControlScreen'
import { createStackNavigator } from 'react-navigation';
import Header from '../components/Headers/MainHeader'

export class ControlScreenContainer extends React.Component {

  render() {
    return <ControlScreen />
  }
}

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

