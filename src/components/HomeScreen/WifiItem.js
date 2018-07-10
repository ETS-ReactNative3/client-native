import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class WifiItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.title, '23772377');
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default WifiItem