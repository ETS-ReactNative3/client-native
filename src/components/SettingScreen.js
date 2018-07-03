import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
class SettingScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is settingscreen</Text>
        <Text>This is settingscreen</Text>
        <Text>This is settingscreen</Text>
        <Text>This is settingscreen</Text>
        <Text>This is settingscreen</Text>
        <TouchableOpacity onPress={()=>this.props.onLogoutPress()}>
            <Text style = {styles.cancelText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SettingScreen;

const styles = EStyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
  smallContainer: {
    width: '90%',
    borderWidth: 2
  },
  rowView: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 30
  }
});