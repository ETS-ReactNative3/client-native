import React from 'react';
import AlarmScreen from '../components/AlarmScreen'
import { createStackNavigator } from 'react-navigation';
import Header from '../components/Headers/MainHeader'

export class AlarmScreenContainer extends React.Component {

  render() {
    return <AlarmScreen />
  }
}

const stackNav = createStackNavigator({
  Main: {
    screen: AlarmScreenContainer,
    navigationOptions:({navigaton}) => ({
      header:    // Your custom header
        <Header />
    })
  }
})

export default stackNav;
