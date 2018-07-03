import React from 'react';
import { Text, View, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome'
import Slider from "react-native-slider";
import Device from "./Device";

let data = [];
const clockIcon = (<Icon name="clock-o" size={20} color="#000" />);
class DeviceSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      light: 0,
      scent: 0,
      isSliding: false,
      devices: null
    }
  }

  setIsSliding = (currentState) => {
    this.setState({
      isSliding: currentState
    })
  }

  get pagination () {
    const { entries, activeSlide } = this.state;
    return (
        <View style={{borderColor: '#123', borderWidth: 0}}>
          <Pagination
            dotsLength={this.props.devices.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: '#fff' }}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 10,
                marginHorizontal: -10,
                backgroundColor: '#D66876'
            }}
            inactiveDotStyle={{
              // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            loop = {false}
          />
        </View>
    );
  }


  render() {

    function putDeviceData(input) {
      for (let i = 0; i < input.length; i++) {
        data.push(input[i])
      }
    }
    
    return (
      <View style={styles.container}>
        {putDeviceData(this.props.devices)}

        <View style={styles.rowView}>
          <Text style={styles.title}>Device</Text>
          { this.pagination }
        </View>

        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={data}
          scrollEnabled={this.state.isSliding ? false : true}
          renderItem={({item, index}) => (
            <View style={styles.smallContainer}>
              <Device onSlidingStateChange = {this.setIsSliding}/>
              <View style={styles.rowView}>
                <View style={{justifyContent:'center', padding: 10}}>
                  <Text style={[styles.title, {paddingBottom: 5}]}>
                    { item.name }
                  </Text>
                  <View style={styles.rowView}>
                    {clockIcon}
                    {clockIcon}
                    {clockIcon}
                    {clockIcon}
                  </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', padding: 30}}>
                  <Icon
                    name="power-off" 
                    size={50} 
                    color="red" 
                  />
                </View>
              </View>
              <Text>
                Light
              </Text>
              <Slider
                style={{width: 250, marginLeft: 30}}
                value={this.state.light}
                onSlidingStart={() => {
                  this.setState({
                    isSliding: true
                  })
                }}
                onSlidingComplete={() => {
                  this.setState({
                    isSliding: false
                  })
                }}
                onValueChange={(value) => {
                  this.setState({
                    light: Math.round(value),
                  })
                }}
                minimumValue = {0}
                maximumValue = {100}
              />
              <Text>
                Scent
              </Text>
              <Slider
                style={{width: 250, marginLeft: 30}}
                value={this.state.scent}
                onSlidingStart={() => {
                  this.setState({
                    isSliding: true
                  })
                }}
                onSlidingComplete={() => {
                  this.setState({
                    isSliding: false
                  })
                }}
                onValueChange={(value) => {
                  this.setState({
                    scent: Math.round(value),
                  })
                }}
                minimumValue = {0}
                maximumValue = {100}
              />
            </View>
          )}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
        />
      </View>
    )
  }
}

export default DeviceSlide;



const screenWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    marginTop: 50
  },
  smallContainer: {
    width: '90%',
    borderWidth: 2
  },
  rowView: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 30
  }
});
