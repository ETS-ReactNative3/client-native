import React from 'react';
import {  View, Modal, ActivityIndicator } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const LoadingOverlay = (props) => (
  <Modal {...props} transparent={true}>
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#0000FF"/>
    </View>
  </Modal>
);


LoadingOverlay.displayName = 'LoadingOverlay';

const styles = EStyleSheet.create({
  overlay: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default LoadingOverlay;
