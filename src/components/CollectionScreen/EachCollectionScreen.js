import React from 'react';
import { Image, View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { LinearGradient } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getScentIcon } from '../../helpers/icon';
import Immutable from 'immutable';

let likeYesBtn = '../../../assets/icon/CollectionScreen/Saved.png';
let likeNoBtn = '../../../assets/icon/CollectionScreen/Notsaved.png';
let shareBtn = '../../../assets/icon/CollectionScreen/Share.png';




class EachCollectionScreen extends React.Component {
    constructor (props) {
      super (props);

      const {navigation} = this.props;
      const item = navigation.getParam ("item", "no such item");
      const user_id = item.user_id;
      const device_id = navigation.getParam ("device_id", null );
      console.log ("device_id is ", device_id);

      this.state={
        device_id: device_id,
        user_id: user_id,
      }

    };

  componentDidMount () {
    this.props.onGetUserId (this.state.user_id);
    this.props.onGetDeviceStatePress (this.state.device_id);


    /*if (this.state.device_id != null) {
      this.props.onGetDeviceStatePress (this.state.device_id);
      console.log ("hello?");
      const device_state = this.props.device_state;
      console.log ("device_State is: ", device_state);
        //const light;
        //const angle=[];
        //const power;
    }

    else {
      console.log ("device_id is null");
    }*/
  }



  
    render() {
      let _this = this;
      const { navigation } = this.props
      const item = navigation.getParam ("item", "no such item");
      console.log ("item is : ", item);
      const img = item.img_url;
      const ingre = item.ingredients;
      const name = item.name;
      const descr = item.description;
      const user_id = item.user_id;
      const like_num = item.like;
      const like_list = Immutable.fromJS (item.like_user);
    

      //console.log (this.props.device_state);
      var device_state = Immutable.Map (this.props.device_state);
      if (this.state.device_id != null)
      {
        console.log (device_state);
        const cur_light = device_state.getIn ([this.state.device_id, 'state', 'reported', 'light']);
        let cur_power = device_state.getIn ([this.state.device_id, 'state', 'reported', 'power']);
        let angle = [0,0,0,0];
        const device_name = device_state.getIn ([this.state.device_id, 'state', 'name']);

        angle[0] = Math.round (device_state.getIn ([this.state.device_id, 'state', 'reported', 'fan1'])/100*360);
        angle[1] = Math.round (device_state.getIn ([this.state.device_id, 'state', 'reported', 'fan2'])/100*360);
        angle[2] = Math.round (device_state.getIn ([this.state.device_id, 'state', 'reported', 'fan3'])/100*360);
        angle[3] = Math.round (device_state.getIn ([this.state.device_id, 'state', 'reported', 'fan4'])/100*360);

        console.log ("cur device state: ", cur_light);
        console.log (cur_power);
        console.log (angle);
      }





      

      if (like_list.includes (user_id))
      {
        console.log ("yes!");
      }
      else
      {
        console.log ("no!");
      }

      return (
        <View style = {styles.container}>
          <Image 
            style = {styles.collectionTopImage}
            source = {{uri:img}}
          />
          <View>
            <Text style = {styles.collectionName}> {name} </Text>
            <View style={styles.collectionStoreandShare}>
              {like_list.includes (user_id)&&
              <TouchableOpacity>
                <Image source={require(likeYesBtn)} style={styles.likeYesBtn}/>
              </TouchableOpacity>
              }
              {!like_list.includes (user_id)&&
              <TouchableOpacity>
                <Image source={require(likeNoBtn)} style={styles.likeNoBtn}/>
              </TouchableOpacity>
              }
              <TouchableOpacity>
                <Image source={require(shareBtn)} style={styles.shareBtn}/>
              </TouchableOpacity>
            </View>
            <View style={styles.collectionUserContainer}>
              <Image
                style={styles.collectionUserImage}
              />
              <Text> {this.props.user_name} </Text>
            </View>
            <LinearGradient start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} colors={['#ff9900', '#afc74b', '#99d8e9']} locations={[0.4, 0.7, 1.0]} style={styles.collectionIngredientBar}>
              <Text>   </Text>
            </LinearGradient>
            <View style={styles.collectionIngredientsContainer}>
              {item.ingredients.map ((i, index) => (
                <View key={index} style={styles.collectionEachIngredientContainer}>
                  <Image source={getScentIcon (i.scent)} style={styles.collectionIngredients}/>
                  <Text style={styles.collectionEachIngredient}> {Immutable.fromJS (ingre[index]).get("scent")} </Text>
                  <Text style={styles.collectionEachIngredient}> {Immutable.fromJS (ingre[index]).get("ratio") * 100} </Text>
                </View>
              ))}
            </View>
            <Text style={styles.collectionDescription}> {descr} </Text>

            {(this.state.device_id) &&
            <TouchableOpacity onPress={() => this.props.onSendDeviceStatePress (this.state.device_id, cur_power , cur_light, device_name, angle[0], angle[1], angle[2], angle[3])} style={styles.collectionConnectBtn}>
              <Text style={styles.collectionConnectText}> Connect </Text>
            </TouchableOpacity>
            }
            {(!this.state.device_id) &&
            <Text> no connected device </Text>
            }
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
  likeYesBtn: {
    height: 30,
    width: 30,
    tintColor: 'grey',
  },
  likeNoBtn: {
    height: 30,
    width: 30,
    tintColor: "grey",
  },
  shareBtn: {
    height: 30,
    width: 30,
    tintColor: 'grey',
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
