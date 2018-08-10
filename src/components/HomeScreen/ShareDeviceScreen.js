import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import PopupDialog from 'react-native-popup-dialog';
import EStyleSheet from 'react-native-extended-stylesheet';

class ShareDeviceScreen extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      share_code: null,
    }
  }

  onComponentDidMount () {
  
  }

  render() {
    return ( 
      <View>

        <TextInput
          placeholder="enter"
          onChangeText={(input) => this.setState ({share_code: input})}
          value={this.state.share_code}
        />

        <TouchableOpacity onPress={ () => this.props.onAddShareDevicePress (this.state.share_code)}>
          <Text> 다음 단계 진행하기 </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress = {async () => {
            await this.props.getUserinfo()
            //console.log("userinfo is",this.props.userid)
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

export default ShareDeviceScreen;
