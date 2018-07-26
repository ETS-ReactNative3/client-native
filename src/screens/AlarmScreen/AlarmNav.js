import React from 'react';
import AlarmScreen from './AlarmScreen';
import AddAlarmScreen from './AddAlarmScreen';
import ModAlarmScreen from './ModAlarmScreen';
import AddAlarmHeader from '../../components/Headers/AddAlarmHeader';
import GoBackHeader from '../../components/Headers/GoBackHeader';
import { createStackNavigator } from 'react-navigation';


const AlarmNav = createStackNavigator ({
  Alarm: {
    screen: AlarmScreen,
    navigationOptions: ({navigation}) => ({
      header: <AddAlarmHeader navigation={navigation}/>
    })
  },
  AddAlarm: {
    screen: AddAlarmScreen,
    navigationOptions: ({navigation}) => ({
      header: <GoBackHeader navigation={navigation} />
    })
  },
  ModAlarm: {
    screen: ModAlarmScreen,
    navigationOptions: ({navigation}) => ({
      header: <GoBackHeader navigation={navigation} />
    })
  },
  },
  {
    initialRouteName: "Alarm",
  })

export default AlarmNav;
