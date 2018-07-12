import React from 'react';
import { Text, View, Dimensions, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export class AddDeviceScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>아롬을 새롭게 구매하셔서 처음으로 사용하신다면</Text>
        <TouchableOpacity 
          onPress={this.props.onAddNewDevicePress}
        >
          <Text>새로운 아롬을 추가할래요</Text>
        </TouchableOpacity>
        <Text>This is add device screen</Text>
        <Text>This is add device screen</Text>
        <Text>This is add device screen</Text>
      </View>
    )
  }
}

export default AddDeviceScreen;