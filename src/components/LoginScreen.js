import React from 'react';
import { Text, View, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const LoginScreen = ({onSignUpPress, onSignInPress}) => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text>Shake your phone to open the developer menu.</Text>
    <Button title="sign in" onPress={onSignInPress}/>
    <Button title="sign up" onPress={onSignUpPress}/>
  </View>
);

export default LoginScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
