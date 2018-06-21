import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const SignupScreen = () => (
  <View style={styles.container}>
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
