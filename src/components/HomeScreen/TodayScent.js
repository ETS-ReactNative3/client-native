import React from 'react';
import { Text, View, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome'

const bookmarkIcon = (<Icon name="bookmark" size={20} color="#000" />)
const shareIcon = (<Icon name="share-alt" size={20} color="#000" />)

const myImportantData = () => store.getState();

class TodayScent extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const todayScent = (
      <View>
        <View style={styles.rowView}>
          <Text>{this.props.todayScent[0]["name"]}</Text>
          {bookmarkIcon}
          <Text>{this.props.todayScent[0]["saves"]}</Text>
          {shareIcon}
          <Text>{this.props.todayScent[0]["shares"]}</Text>
        </View>
        <View style={styles.rowView}>
          <Text>{this.props.todayScent[1]["name"]}</Text>
          {bookmarkIcon}
          <Text>{this.props.todayScent[1]["saves"]}</Text>
          {shareIcon}
          <Text>{this.props.todayScent[1]["shares"]}</Text>
        </View>
        <View style={styles.rowView}>
          <Text>{this.props.todayScent[2]["name"]}</Text>
          {bookmarkIcon}
          <Text>{this.props.todayScent[2]["saves"]}</Text>
          {shareIcon}
          <Text>{this.props.todayScent[2]["shares"]}</Text>
        </View>
      </View>
    )

    return (
      <View style = {styles.container}>
        {console.log(myImportantData)}
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