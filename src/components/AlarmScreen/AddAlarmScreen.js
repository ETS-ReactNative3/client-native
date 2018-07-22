import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';



class AddAlarmScreen extends React.Component {
  constructor (props) {
    super (props);
  };

  render () {
    let _this = this;

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> 향기 알람 추가 </Text>
        </View>
        <View styl={styles.listContainer}>
          <View style={styles.listLeftContainer}>
            <Text style={styles.listLeft}> arom 기기 선택 </Text>
          </View>
          <View style={styles.liftRightContainer}>
            <Text style={styles.listRight}> adfdfadf </Text>
          </View>
        </View>
      </View>
    
    )
  }
};

export default AddAlarmScreen;

const styles = EStyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginBottom: 63.75,
  },
  titleContainer: {
    height: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontFamily: 'Noto Sans Bold',
    fontSize: 20,
  },
  listContainer: {
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  listLeftContainer: {
    //position: 'absolute',
    left: 0,

  },
  listRightContainer: {
    //position: 'absolute',
    right: 0,
  },
  listLeft: {
    fontFamily: 'Noto Sans',
    fontSize: 20,
  },
  listRight: {
    fontFamily: 'Noto Sans',
    fontSize: 20,
    color: 'grey',
  },
})
