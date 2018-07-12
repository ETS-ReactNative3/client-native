import React from 'react';

import { Text, View, FlatList } from 'react-native';
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
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    )
  }
}

export default AlarmScreen;
