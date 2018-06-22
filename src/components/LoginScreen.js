import React from 'react';
import { Text, View, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LoadingOverlay from '../components/LoadingOverlay';

const LoginScreen = ({
  onSignUpPress,
  onSignInPress,
  loading=false,
  error=null,
  token=null
}) => (
  <View style={styles.container}>
    <LoadingOverlay visible={loading}/>
    { error && <Text> login error: {error} </Text> }
    { token && <Text> login succeed: {token} </Text> }
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
