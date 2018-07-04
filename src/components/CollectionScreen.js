import React from 'react';
import { View, FlatList, Text } from 'react-native';


class CollectionScreen extends React.Component {
    constructor (props) {
        super (props);
    };

  componentDidMount() {
    this.props.loadCollection();
  }
  

    render() {
      if (this.props.list) {
        var dummy = this.props.list.toJS();
        dummy = dummy.map(x => ({...x, key: x.recipe_id}));

        return (
          <View>
              <Text> Hello </Text>
              <FlatList
                  data = {dummy}
                  renderItem={
                      ({item}) => (console.log ('The item is: ' + item) || 
                      <Text key={item.recipe_id}>{item.name}</Text>)
                  }
              >
              </FlatList>
          </View>
          )

      }
      return <View/>
   }
}
export default CollectionScreen;
