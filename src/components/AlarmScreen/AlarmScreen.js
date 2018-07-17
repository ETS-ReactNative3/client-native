import React from 'react';

import { Text, View, FlatList, TouchableOpacity } from 'react-native';
class AlarmScreen extends React.Component {
  constructor (props) {
    super (props);
  };

  componentDidMount () {
    this.props.loadReservation ();
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => {
          console.log ("This is components/AlarmScreen.js" );
          this.props.loadReservation ();}} >
          <Text> hello </Text>
        </TouchableOpacity>
        <Text>This is alarmscreen</Text>
        <Text>This is alarmscreen</Text>
        <Text>This is alarmscreen</Text>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    )
  }
}

export default AlarmScreen;
