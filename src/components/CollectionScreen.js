import React from 'react';
import { View, FlatList, Text } from 'react-native';


class CollectionScreen extends React.Component {
    constructor (props) {
        super (props);
    };
    render() {
        var dummy = [
            {key : "Apple"},
            {key : "Banana"},
            {key : "Vanilla"}
        ];
        return (
        <View>
            <Text> Hello </Text>
            <FlatList
                data = {dummy}
                renderItem={
                    ({item}) => (console.log ('The item is: ' + item) || 
                    <Text>{item.key}</Text>)
                }
            >
            </FlatList>
        </View>
        )
   }
}
export default CollectionScreen;