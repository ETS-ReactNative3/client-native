import React from 'react';
import { Image, View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { LinearGradient } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getScentIcon } from '../../helpers/icon';

let storebutton = '../../../assets/icon/setting-01.png';
let sharebutton = '../../../assets/icon/setting-01.png';

class EachCollectionScreen extends React.Component {
    constructor (props) {
        super (props);
    };

  
    render() {
      let _this = this;
      const { navigation } = this.props
      const item = navigation.getParam ("item", "no such item");
      const img = item.img_url;
      const ingre = item.ingredients;
      const name = item.name;
      const descr = item.description;
      return (
        <View style = {styles.container}>
          <Image 
            style = {styles.collectionTopImage}
            source = {{uri:img}}
          />
          <View>
            <Text style = {styles.collectionName}> {name} </Text>
            <View style={styles.collectionStoreandShare}>
              <TouchableOpacity>
                <Image source={require(storebutton)} style={styles.storeBtn}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require(sharebutton)} style={styles.shareBtn}/>
              </TouchableOpacity>
            </View>
            <View style={styles.collectionUserContainer}>
              <Image
                style={styles.collectionUserImage}
              />
              <Text> user id </Text>
            </View>
            <LinearGradient start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={['#ff9900', '#afc74b', '#99d8e9']} locations={[0.4, 0.7, 1.0]} style={styles.collectionIngredientBar}>
              <Text>   </Text>
            </LinearGradient>
            <View style={styles.collectionIngredientsContainer}>
              {item.ingredients.map ((i, index) => (
                <View key={index} style={styles.collectionEachIngredientContainer}>
                  <Image source={getScentIcon (i.scent)} style={styles.collectionIngredients}/>
                  <Text style={styles.collectionEachIngredient}> IngreName </Text>
                  <Text style={styles.collectionEachIngredient}> ??% </Text>
                </View>
              ))}
            </View>
            <Text style={styles.collectionDescription}> {descr} </Text>
            <TouchableOpacity  style={styles.collectionConnectBtn}>
              <Text style={styles.collectionConnectText}> Connect </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = { () => {
              console.log ("eachscreen this : ", img);
              _this.props.navigation.pop ();
              }
            }>
              <Text> Go Back </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }

}
export default EachCollectionScreen;

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
  collectionTopImage: {
    width: '100%',
    height: '30%',
    marginBottom: 10,
  },
  collectionName: {
    fontFamily: 'Noto Sans Bold',
    fontSize: 20,
    marginBottom: 10,
  },
  collectionStoreandShare: {
    flexDirection: 'row',
    position: "absolute",
    right: 0,
  },
  storeBtn: {
    height: 30,
    width: 30,
    tintColor: '#366501',
  },
  shareBtn: {
    height: 30,
    width: 30,
    tintColor: '#366501',
  },
  collectionUserContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  collectionUserImage: {
    
  },
  collectionIngredientBar: {
    borderRadius: 10,
    alignSelf: 'center',
    width: "90%",
    marginBottom: 10,
  },
  collectionIngredientsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 10,
  },
  collectionEachIngredientContainer: {
    flexDirection: 'column',
  },
  collectionIngredients: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  collectionEachIngredient: {
    fontFamily: 'Noto Sans Bold',
  },
  collectionDescription: {
    fontFamily: 'Noto Sans Bold',
    marginBottom: 10,
  },
  collectionConnectBtn: {
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: '#009b72',
    borderWidth: 2,
    width: screenWidth * 0.8,
    height: 35,
    backgroundColor: '#ffffff',
    shadowColor: 'black',
    shadowOffset:{  width: 0,  height: 0,  },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginBottom: 20,
  },
  collectionConnectText: {
    fontFamily: 'Noto Sans Bold',
    fontSize: 20,
    alignSelf: 'center',
  },
})
