import React from 'react';
import { Text, View, FlatList, SectionList, TouchableOpacity, Switch } from 'react-native';
import Immutable from 'immutable';
import EStyleSheet from 'react-native-extended-stylesheet';
import _ from 'lodash';


const reservationSection = (list, device_id) => {
  var myList = Immutable.fromJS (list);
  var result = myList.filter (function (item) {
    
    return item.getIn (["device_id"]) == device_id;
  })

  return result.toJS ();
}

const listToSet = (list) => {
  var newList = Immutable.fromJS (list);
  var result = [];
  newList.forEach (function (item) {
    //console.log ("idTONae.get!~:", idToName.get ("arom_jaeyoung"));
    result.push (item.get ("device_id"));
  }) 
  return (_.uniq (result));
}



class AlarmScreen extends React.Component {
  constructor (props) {
    super (props);
    /*
    var device = this.props.device;
    if (this.props.list) {
      var list = this.props.list.toJS ();
      list = list.map (x => ({...x, key: x.reservation_id}));
      var deviceSet = listToSet (list);

      list.forEach (function (item) {
        item["device_name"] = device.get (item["device_id"]);
        console.log ("device.get~:", item);
      });

      var newList = [];
      deviceSet.forEach (function (item) {
        const map = {device_id: item, data: reservationSection (list, item)};
        newList.push (map);
      })
      
    }*/
    /*
    this.state = {
      newList: null,
    }*/
  };

  componentDidMount () {
    this.props.loadReservation ();
  };


  render() {
    var device = this.props.device;
    if (this.props.list) {
      var list = this.props.list.toJS ();
      list = list.map (x => ({...x, key: x.reservation_id}));
      var deviceSet = listToSet (list);

      list.forEach (function (item) {
        item["device_name"] = device.get (item["device_id"]);
        console.log ("device.get~:", item);
      });

      var newList = [];
      deviceSet.forEach (function (item) {
        const map = {device_id: item, data: reservationSection (list, item)};
        /* 
        map = { device_id: "arom_jaeyoung", data: {...}} 
         */
        newList.push (map);
      })

    }

    //this.state.newList = newList;
    //console.log (this.props.loadReservation ());
    if (newList)
    {
      return (
        <View style={styles.container}>
          <View style={styles.alarmTextContainer}>
            <Text style={styles.alarmText}> 알람 </Text>
          </View>
          <SectionList
            sections = {newList}
            renderItem = {
              ({item}) =>
                <TouchableOpacity onPress={() => this.props.onPressMod (item)}>
                  <View style={styles.alarmItemContainer} key = {item.reservation_id}>
                    <Text style={styles.alarmItem}> {item.endTime} </Text>
                  </View>
                </TouchableOpacity>
            }
            renderSectionHeader = {
              ({section}) =>
                (<View style={styles.alarmSectionContainer} key={section.device_id}>
                  <Text style={styles.alarmSection}>
                    {device.get(section.device_id)} 
                  </Text>
                </View>)
            }
          >
          </SectionList>
        </View>
      )
    }
    else {
      return (
        <View>
          <Text> Please try again! </Text>
        </View>
      )
    }
  }
}

export default AlarmScreen;


const styles = EStyleSheet.create ({
  container: {
    flex:1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginBottom: 63.75,
  },
  alarmTextContainer: {
    backgroundColor: '#fff',
    height: 50,
    //alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20.6485,
    marginRight: 20.6485,
  },
  alarmText: {
    fontFamily: 'Noto Sans Bold',
    fontSize: 20,
    //alignSelf: 'center',
  },
  alarmItem: {
    fontFamily: 'Noto Sans Bold',
    fontSize: 20,
    
  },
  alarmItemContainer: {
    backgroundColor: '#fff',
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
    height: 65,
    marginRight: 20.6485,
    marginLeft: 20.6485,
    justifyContent: 'center',
  },
  alarmSection: {
    fontFamily: 'Noto Sans Bold',
    fontSize: 15,
    marginLeft: 20.6485,
    marginRight: 20.6485,
  },
  alarmSectionContainer: {
    backgroundColor: 'grey',
    //marginRight: 20.6485,
    //marginLeft: 20.6485,
  }
})
