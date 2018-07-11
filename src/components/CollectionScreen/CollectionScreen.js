import React from 'react';
import { Image, View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getScentIcon } from '../../helpers/icon';


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
        let _this = this;
        list = list.map(x => ({...x, key: x.recipe_id}));
        //list = list.filter (x => x.name == "우주코스모2");
        return (
          <View style = {styles.container}>
              <Text style = {styles.title}> Scent Collection </Text>
              <SearchBar
                  inputStyle = {{backgroundColor: '#babbbc', borderRadius: 6.802/360*screenWidth}}
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
                        ({item}) => (console.log ('The item is: ', item) ||
                        <TouchableOpacity style = {[]} onPress={() => {
                            //console.log("_this.props: ", _this.props);
                            //console.log ("this is : ", _this);
                            _this.props.onCollectionPress (item);
                            }}>
                        <View style={styles.collectionContainer} key = {item.recipe_id}>

                                <Image source = {{uri: item.img_url}} style = {styles.itemImage}/>
                                <View style = {{flexDirection: 'column', width: 151.437/360*screenWidth, position: 'absolute', left: (68.102-20.6485)/360*screenWidth}}>
                                <Text style = {styles.itemName} > {item.name} </Text>
                                <Text style = {styles.itemDescription} > {item.description} </Text>
                                </View>
                                <View style = {styles.ingredientContainer}>
                                {item.ingredients.map((i,index) => (<Image key = {index} source = {getScentIcon(i.scent)} style = {styles.ingredientImage}/>))}
                                </View>
                                {//renderItem = { ({item.ingredients}) => <Image source = {{(item.ingredients) => getScentIcon (item.i)}}/>}
                                }
                            
                        </View>
                        </TouchableOpacity>)
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
        width: 37.5/360*screenWidth,
        height: 37.5/360*screenWidth,
        borderRadius: 18.75/360*screenWidth,
    },
    ingredientImage: {
        width: 23.75,
        height: 23.75,
        borderRadius: 11.875,

    },
    ingredientContainer: {
        position: 'absolute',
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }



})
