import React from 'react';
import { Image, Text, View, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome'
import {getScentIcon} from '../../helpers/icon'

const bookmarkIcon = (<Icon name="bookmark" size={20} color="#000" />);
const shareIcon = (<Icon name="share-alt" size={20} color="#000" />);
const iconLink = '../../../assets/imgs/scent_image/';

class TodayScent extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const returnIcons = (iconArray) => iconArray.map(x =>
      <Image 
        key={x}
        source= { getScentIcon(x) }
        style={{width: 30, height: 30}}
      />
    );
    const todayScent = (
      <View>
        <View style={styles.rowView}>
          <Text>{this.props.todayScent["name"]}</Text>
          {returnIcons(this.props.todayScent["icons"])}
          {bookmarkIcon}
          <Text>{this.props.todayScent["saves"]}</Text>
          {shareIcon}
          <Text>{this.props.todayScent["shares"]}</Text>
        </View>
      </View>
    )

    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>Today's Scent</Text>
        <View style={styles.smallContainer}>
          { todayScent }
        </View>
      </View>
    )
  }
}

export default TodayScent;



const screenWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create ({
  container: {
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  smallContainer: {
    width: '90%',
    borderWidth: 2
  },
  rowView: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 30
  }
});