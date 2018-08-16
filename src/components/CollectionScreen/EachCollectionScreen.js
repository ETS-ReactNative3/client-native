import React from 'react';
import { Image, View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';
import { SearchBar } from 'react-native-elements';
import { LinearGradient } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { getScentIcon } from '../../helpers/icon';
import Immutable from 'immutable';
import _ from 'lodash';

let likeYesBtn = '../../../assets/icon/CollectionScreen/Saved.png';
let likeNoBtn = '../../../assets/icon/CollectionScreen/Notsaved.png';
let shareBtn = '../../../assets/icon/CollectionScreen/Share.png';




class EachCollectionScreen extends React.Component {
    constructor (props) {
      super (props);

      const {navigation} = this.props;
      const item = navigation.getParam ("item", "no such item");
      const uploader_id = item.user_id;
      const device_id = navigation.getParam ("device_id", null );
      console.log ("device_id is ", device_id);
      //this.props.onGetUploaderId (uploader);
      //const uploader_id = this.props.uploader;
      //console.log ("uploader is ", uploader_id);

      this.state={
        device_id: device_id,
        device_name: "dd",

        showDevice: false,
        singleDeviceSelectedItem: null,

        uploader_id : uploader_id,
      }

      //const uploader_id = this.props.onGetUploaderId (uploader);

    };

  componentDidMount () {
    //this.props.onGetUploaderId (uploader);
    this.props.onGetDeviceStatePress (this.state.device_id);
    this.props.onGetUploaderId (this.state.uploader_id);
    this.props.onGetUserInfo ();
    console.log ("successa");

  }



  
  render() {

    //console.log ("this.props.user_Device", this.props.user_device);
    //let test = (this.props.user_device);
    let user_device_value = Immutable.Map (this.props.user_device).valueSeq ().toArray ();
    let user_device_key = Immutable.Map (this.props.user_device).keySeq ().toArray ();
    console.log (user_device_value, user_device_key);


    const uploader_name = (Immutable.Map (this.props.user)).getIn ([this.state.uploader_id, "data", "name"]);

    //this.props.onGetUserInfo ();
    let _this = this;
    const { navigation } = this.props
    const item = navigation.getParam ("item", "no such item");
    console.log ("item is : ", item);
    const img = item.img_url;
    const ingre = item.ingredients;
    const name = item.name;
    const descr = item.description;
    const like_num = item.like;
    const like_list = Immutable.fromJS (item.like_user);
    
    var device_state = Immutable.Map (this.props.device_state);

    const cur_light = device_state.getIn ([this.state.device_id, 'state', 'reported', 'light']);
    let cur_power = device_state.getIn ([this.state.device_id, 'state', 'reported', 'power']);

    let cur_scent = [null, null, null, null];
    cur_scent[0] = device_state.getIn ([this.state.device_id, "state", "reported", "cart1_scent"]);
    cur_scent[1] = device_state.getIn ([this.state.device_id, "state", "reported", "cart2_scent"]);
    cur_scent[2] = device_state.getIn ([this.state.device_id, "state", "reported", "cart3_scent"]);
    cur_scent[3] = device_state.getIn ([this.state.device_id, "state", "reported", "cart4_scent"]);


    let angle = [0,0,0,0];
    angle[0] = Immutable.fromJS (ingre[0]).get ("ratio") * 100;
    angle[1] = Immutable.fromJS (ingre[1]).get ("ratio") * 100;
    angle[2] = Immutable.fromJS (ingre[2]).get ("ratio") * 100;
    angle[3] = Immutable.fromJS (ingre[3]).get ("ratio") * 100;


    let ingre_ready = true;
    for (let i=0; i<ingre.length; i++){
      if (!cur_scent.includes (ingre[i])) {
        ingre_ready = false;
      }
    }

    if (like_list.includes (this.state.uploader_id))
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
              {like_list.includes (this.state.uploader_id)&&
              <TouchableOpacity>
                <Image source={require(likeYesBtn)} style={styles.likeYesBtn}/>
              </TouchableOpacity>
              }
              {!like_list.includes (this.state.uploader_id)&&
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
              <Text> {uploader_name} </Text>
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

            {(this.state.device_id && ingre_ready) &&
            <TouchableOpacity onPress={() => {this.setState ({showDevice: true})}} style={styles.collectionConnectBtn}>
              <Text style={styles.collectionConnectText}> Connect </Text>
            </TouchableOpacity>
            }

            <SinglePickerMaterialDialog
              title={'arom 기기 선택'}
              items={ user_device_value.map ((row, index) => ({value: index, label: row})) }
              visible={this.state.showDevice}
              selectedItem={this.state.singleDeviceSelectedItem}
              onCancel={() => this.setState ({showDevice: false})}
              onOk={result => {
                this.setState ({showDevice: false});
                this.setState({singleDeviceSelectedItem: result.selectedItem});
                this.setState({device_id: user_device_key[result.selectedItem.value]});
                this.setState ({device_name: result.selectedItem.label});
                this.props.onGetDeviceStatePress (this.state.device_id);

                this.props.onSendDeviceStatePress (this.state.device_id, cur_power , cur_light, this.state.device_name, angle[0], angle[1], angle[2], angle[3]);
              }}
            />

            {(!this.state.device_id) &&
            <Text> no connected device </Text>
            }
            {(this.state.device_id && !ingre_ready) &&
            <Text> 향기 캡슐이 필요합니다 </Text>
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
