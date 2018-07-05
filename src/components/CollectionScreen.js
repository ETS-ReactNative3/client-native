import React from 'react';
import { Image, View, FlatList, Text, TextInput} from 'react-native';
import { SearchBar } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';


class CollectionScreen extends React.Component {
    constructor (props) {
        super (props);
    };

  componentDidMount() {
    this.props.loadCollection();
  }
  
    render() {
      if (this.props.list) {
        var list = this.props.list.toJS();
        list = list.map(x => ({...x, key: x.recipe_id}));
        //list = list.filter (x => x.name == "우주코스모2");
        return (
          <View style = {styles.container}>
              <Text style = {styles.title}> Scent Collection </Text>
              <SearchBar
                  inputStyle = {{backgroundColor: '#babbbc'}}
                  containerStyle = {{backgroundColor: 'white', borderBottomColor: 'transparent', borderTopColor: 'transparent',
                    borderLeftColor: 'transparent', borderRightColor: 'transparent'}}
                  placeholder="Search"
                  placeholderTextColor = '#626263'
                  icon = {{type: 'font-awesome', name: "search", color: "#626263"}}
                  //searchIcon={false}
                  //onChangeText = {(input) => this.setState({??: input})}
                  //value={this.state.??}
                />
              <FlatList
                  data = {list}
                  renderItem={
                      ({item}) => (console.log ('The item des is: ', item.description) ||
                      <View style={styles.collectionContainer} key = {item.recipe_id}>

                        <Image source = {{uri: item.img_url}} style = {styles.itemImage}/>
                        <View style = {{flexDirection: 'column'}}>
                          <Text style = {styles.itemName} > {item.name} </Text>
                          <Text style = {styles.itemDescription} > {item.description} </Text>
                        </View>
                        
                      </View>)
                  }
              >
              </FlatList>
          </View>
        )

    }
      else {
          return (
              <View>
                  <Text> Please Try Again! </Text>
              </View>
          )
      }
   }
}
export default CollectionScreen;

const Dimensions = require('Dimensions');
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const elementWidth = screenWidth - 80
const elementHeight = 40

const styles = EStyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        marginTop: 50,
        marginBottom: 63.75,
      },
    title: {
        margin: 20,
        fontSize: 35,
        fontFamily: 'Noto Sans Bold',
        //fontWeight: 'bold',
    },
    textInput: {
        backgroundColor: '#fff',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 1,
        width: elementWidth,
        height: elementHeight,
        marginBottom: 2,
        padding: 5
        // alignItems: 'center'
    },
    collectionContainer: {
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
        marginRight: 20.6485,
        marginLeft: 20.6485,
        flex: 1,
        flexDirection: 'row',
        height: 65,
        alignItems: 'center',

        //borderWidth: 2,
        //borderBottomEndRadius: 10,
        //width: "80%",
        //borderRadius: 4,
    },
    itemName: {
        fontFamily: 'Noto Sans Bold',
        fontSize: 20,
        marginLeft: 5,
        //flexDirection: 'column',

    },
    itemDescription: {
        fontFamily: 'Noto Sans Bold',
        fontSize: 10,
        marginLeft: 5,

    },
    itemImage: {
        width: 37.5,
        height: 37.5,
        borderRadius: 18.75,
    },




})
