import React from 'react';
import { Text, View, Dimensions, TouchableOpacity} from 'react-native';
import PopupDialog from 'react-native-popup-dialog';
import EStyleSheet from 'react-native-extended-stylesheet';

export class AddDeviceScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity 
          onPress={()=>this.props.onAddNewDevicePress()}
        >
          <Text>새로운 아롬을 추가할래요</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress = {() => {
            this.PopupDialog.show()
          }}
        >
        <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </PopupDialog>
          <Text>아롬 공유할래요</Text>
        </TouchableOpacity>
        <Text>This is add device screen</Text>
        <Text>This is add device screen</Text>
        <Text>This is add device screen</Text>
      </View>
    )
  }
}

export default AddDeviceScreen;