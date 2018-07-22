import React from 'react';
import AlarmScreen from './AlarmScreen';
import AddAlarmScreen from './AddAlarmScreen';
import Header from '../../components/Headers/MainHeader';
import GoBackHeader from '../../components/Headers/GoBackHeader';
import { createStackNavigator } from 'react-navigation';


const AlarmNav = createStackNavigator ({
  Alarm: {
    screen: AlarmScreen,
    navigationOptions: ({navigation}) => ({
      header: <Header />
    })
  },
  AddAlarm: {
    screen: AddAlarmScreen,
    navigationOptions: ({navigation}) => ({
      header: <GoBackHeader navigation={navigation} />
    })
  }
  },
  {
    initialRouteName: "Alarm",
  })

export default AlarmNav;
