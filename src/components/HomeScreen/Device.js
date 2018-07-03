import React from 'react';
import { Text, View, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome'
import Slider from "react-native-slider";

class Device extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSliding: false
    }
  }

  render() {
    return (
      <View>
        <Text>Carousel</Text>
        <Slider
          style={{width: 250, marginLeft: 30}}
          value={this.state.light}
          onSlidingStart={() => {
            this.props.onSlidingStateChange(true)
          }}
          onSlidingComplete={() => {
            this.props.onSlidingStateChange(false)
          }}
          onValueChange={(value) => {
            this.setState({
              light: Math.round(value),
            })
          }}
          minimumValue = {0}
          maximumValue = {100}
        />
      </View>
    )
  }
}

export default Device;