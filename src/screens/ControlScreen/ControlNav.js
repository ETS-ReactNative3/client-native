import React from 'react';
import ControlScreen from './ControlScreen';
import RegisterScreen from './RegisterScreen';
import GoBackHeader from '../../components/Headers/GoBackHeader';
import MainHeader from '../../components/Headers/MainHeader';
import { createStackNavigator } from 'react-navigation';


const ControlNav = createStackNavigator ({
  Control: {
    screen: ControlScreen,
    navigationOptions: ({navigation}) => ({
      header: <MainHeader navigation={navigation}/>
    })
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: ({navigation}) => ({
      header: <GoBackHeader navigation={navigation} />
    })
  },
  },
  {
    initialRouteName: "Control",
  })

export default ControlNav;
