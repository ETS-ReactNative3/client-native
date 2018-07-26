import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const logoPath = '../../../assets/imgs/home/logo.png';
export class AddAlarmHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={() => {
            this.props.navigation.push ("AddAlarm");
          }}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default AddAlarmHeader;

const styles = EStyleSheet.create ({
  container: {
    backgroundColor: '#FAFBFB',
    height: 80,
    paddingTop: 40, // only for IOS to give StatusBar Space
    justifyContent: 'center'
  },
});
