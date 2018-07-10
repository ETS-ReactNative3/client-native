import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Svg,{ Circle, Path, Rect, Line } from 'react-native-svg';

import EStyleSheet from 'react-native-extended-stylesheet';
class SettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is settingscreen</Text>
        <Text>This is settingscreen</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.menuText}>Notices</Text>
        </TouchableOpacity>
        <Svg
          height="4"
          width={Dimensions.get('window').width.toString()}
        >
          <Line
            x1="10"
            y1="2"
            x2={Dimensions.get('window').width.toString()-10}
            y2="2"
            stroke="#F8F8F8"
            strokeWidth="2"
          />
        </Svg>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.menuText}>Connect to web store</Text>
        </TouchableOpacity>
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
  },
  button: {
    width: '100%'
  },
  menuText: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 5,
    paddingBottom: 5
  }
});