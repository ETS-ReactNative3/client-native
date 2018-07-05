import React from 'react';
import { View, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const logoPath = '../../../assets/imgs/home/logo.png';
export class Header extends React.Component {
  render() {
    return (
      <View
        style={styles.container}
      >
      <Image 
        source={require(logoPath)}
        style={styles.logoImg}
        resizeMode='contain'
      />
      </View>
    )
  }
}

export default Header;

const styles = EStyleSheet.create ({
  container: {
    backgroundColor: '#FAFBFB',
    height: 80,
    paddingTop: 40, // only for IOS to give StatusBar Space
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImg: {
    height: 20.4,
  }
});