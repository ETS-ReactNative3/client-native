import React from 'react';
import { Text, View, Button, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Image from 'react-native-remote-svg';

let background = '../../../assets/imgs/login/new_bg_login.jpeg'
let logo = '../../../assets/imgs/login/logo_small.svg'


// {
//   "email": "string",
//   "pwd": "string",
//   "name": "string",
//   "birthday": "2018-06-25T05:34:25.426Z",
//   "gender": "male",
//   "place": "string",
//   "space": "string",
//   "purpose": "string",
//   "prefer_scents": [
//     "string"
//   ]
// }
class SecondScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pwd: '',
      name: '',
      birthday: '',
      gender: '',
      place: '',
      space: '',
      purpose: '',
      prefer_scents: []
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onCancelPress}>
          <Text>취소</Text>
        </TouchableOpacity>
        <Image source={require(logo)} />
        <Text> sign up 2nd screen </Text>
      </View>
    );
  }
}

export default SecondScreen;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20
  },
});
