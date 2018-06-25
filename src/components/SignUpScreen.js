import React from 'react';
import { Text, View, Button, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Image from 'react-native-remote-svg';

let background = '../assets/imgs/login/new_bg_login.jpeg'
let logo = '../assets/imgs/login/logo_small.svg'

const SignupScreen = ({
  onCancelPress
}) => (
  <View style={styles.container}>
  <Image source={require(logo)} />
    <TouchableOpacity onPress={onCancelPress}>
      <Text>취소</Text>
    </TouchableOpacity>
    <Text> sign up screen </Text>
  </View>
);

export default SignupScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
