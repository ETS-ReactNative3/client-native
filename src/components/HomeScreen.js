import React from 'react';
import { Text, View, Dimensions} from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import EStyleSheet from 'react-native-extended-stylesheet';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome'
import Slider from "react-native-slider";


import AlarmScreen from '../screens/AlarmScreen';
import ControlScreen from '../screens/ControlScreen';

const bookmarkIcon = (<Icon name="bookmark" size={20} color="#000" />)
const shareIcon = (<Icon name="share-alt" size={20} color="#000" />)

const onButtonIcon = (<Icon name="power-off" size={100} color="#000" />)
const clockIcon = (<Icon name="clock-o" size={20} color="#000" />)


const data = [];
class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: ENTRIES1,
      activeSlide:0,
      light: 0,
      scent: 0,
      isSliding: false
    }
  }

  _renderItem ({item, index}) {
    return (
        <View style={styles.smallContainer}>
        
          <Text style={styles.title}>{ item.name }</Text>
        </View>
    );
  }

  get pagination () {
    const { entries, activeSlide } = this.state;
    return (
        <View style={{borderColor: '#123', borderWidth: 0}}>
          <Pagination
            dotsLength={this.props.device.length}
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

  render () {

    function putDeviceData(input) {
      for (let i = 0; i < input.length; i++) {
        data.push(input[i])
      }
    }
    const todayScent = (
      <View>
        <View style={styles.rowView}>
          <Text>{this.props.todayScent[0]["name"]}</Text>
          {bookmarkIcon}
          <Text>{this.props.todayScent[0]["saves"]}</Text>
          {shareIcon}
          <Text>{this.props.todayScent[0]["shares"]}</Text>
        </View>
        <View style={styles.rowView}>
          <Text>{this.props.todayScent[1]["name"]}</Text>
          {bookmarkIcon}
          <Text>{this.props.todayScent[1]["saves"]}</Text>
          {shareIcon}
          <Text>{this.props.todayScent[1]["shares"]}</Text>
        </View>
        <View style={styles.rowView}>
          <Text>{this.props.todayScent[2]["name"]}</Text>
          {bookmarkIcon}
          <Text>{this.props.todayScent[2]["saves"]}</Text>
          {shareIcon}
          <Text>{this.props.todayScent[2]["shares"]}</Text>
        </View>
      </View>
    )

    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>Today's Scent</Text>
        <View style={styles.smallContainer}>
          { todayScent }
        </View>
        
        <View style={styles.rowView}>
          <Text style={styles.title}>Device</Text>
          { this.pagination }
        </View>
        {putDeviceData(this.props.device)}
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={data}
          scrollEnabled={this.state.isSliding ? false : true}
          renderItem={({item, index}) => (
            <View style={styles.smallContainer}>
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
                    color="#000" 
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
        {/* {console.log(data)} */}
        {console.log("Is sliding is: ",this.state.isSliding)}
      </View>
    )
  }
}

export default HomeScreen;


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

export const ENTRIES1 = [
  {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',  },
  {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
  },
  {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
  },
  {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
  },
  {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
  },
  {
      title: 'Middle Earth, Germany',
      subtitle: 'Lorem ipsum dolor sit amet',
  }
];