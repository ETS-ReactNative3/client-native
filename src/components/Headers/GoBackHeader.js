import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const logoPath = '../../../assets/imgs/home/logo.png';
export class GoBackHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={() => {
            console.log("onPress clicked");
          }}>
          <Text style={styles.buttonText}>취소</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default GoBackHeader;

const styles = EStyleSheet.create ({
  container: {
    backgroundColor: '#FAFBFB',
    height: 80,
    paddingTop: 40, // only for IOS to give StatusBar Space
    justifyContent: 'center'
  },
});