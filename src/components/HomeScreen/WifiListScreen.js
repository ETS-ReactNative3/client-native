import React from 'react';
import { Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import WifiItem from './WifiItem';


export class WifiListScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  _renderItem = ({item}) => (
    <WifiItem
      title={item.key}
      auth={item.auth}
      onPressItem={this.props.onWifiSelect}
    />
  );

  render() {
    return (
      <View>
        <Text>아롬을 새롭게 구매하셔서 처음으로 사용하신다면</Text>
        <TouchableOpacity 
          onPress={async ()=>{
            const tmp = await this.props.requestWifiList();
            this.setState({
              data: tmp
            })
            console.log("Current state is",this.state.data)
          }}
        >
          <Text>와이파이 새로고침</Text>
        </TouchableOpacity>
        <Text>This is wifi list screen</Text>
        <Text>This is wifi list screen</Text>
        <Text>This is wifi list screen</Text>
        <Text>This is wifi list screen</Text>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
        />
        <TouchableOpacity 
          onPress={() => {
            this.props.onRegisterDevice()
          }}
        >
          <Text>Register Device</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default WifiListScreen;