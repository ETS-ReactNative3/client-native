import React from 'react';
import { Text, View } from 'react-native';

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
        <Text>This is alarmscreen</Text>
        <Text>This is alarmscreen</Text>
        <Text>This is alarmscreen</Text>
      </View>
    )
  }
}

export default AlarmScreen;
