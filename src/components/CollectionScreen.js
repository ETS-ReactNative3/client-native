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
class CollectionScreen extends React.Component {
    render() {
        return (
        <View>
            <Text>This is alarmscreen</Text>
            <Text>This is alarmscreen</Text>
            <Text>This is alarmscreen</Text>
        </View>
        )
   }
}

export default CollectionScreen;