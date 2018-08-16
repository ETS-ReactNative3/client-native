import React from 'react';
import { Text, View, Dimensions, TouchableOpacity} from 'react-native';
import PopupDialog from 'react-native-popup-dialog';
import EStyleSheet from 'react-native-extended-stylesheet';

class AddDeviceScreen extends React.Component {
  constructor (props) {
    super (props);

  }

  componentDidMount () {
    
  }


  render() {

    return ( 
      <View>
        <TouchableOpacity 
          onPress={ async() => 
            {
              this.props.onAddNewDevicePress()
            }}
        >
          <Text>새로운 아롬을 추가할래요</Text>
        </TouchableOpacity>
        {
        /*
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
        */
        }


        <TouchableOpacity
          onPress={ () => {this.props.onGenerateShareCode ("arom-WNcNQsMPZ4yykNvkxeiyHb") }}
        >
          <Text> generate share code </Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress = {async () => {
            await this.props.getUserinfo()
            console.log("userinfo is",this.props.userid)
          }}
        >
          <Text>유저정보 가져오기</Text>
        </TouchableOpacity>
        <Text>This is add device screen</Text>
        <Text>This is add device screen</Text>
        <Text>This is add device screen</Text>
      </View>
    )
  }
}

export default AddDeviceScreen;
