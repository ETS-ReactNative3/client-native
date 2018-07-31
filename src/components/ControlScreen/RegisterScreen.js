import React from 'react';
import { TextInput, ScrollView, Text, View, TouchableOpacity, Slider } from 'react-native';
//import { SelectPicker } from 'react-native-select-picker';
//import { MaterialDialog, SinglePickerMaterialDialog, MultiPickerMaterialDialog } from 'react-native-material-dialog';
//import DatePicker from 'react-native-datepicker';
import EStyleSheet from 'react-native-extended-stylesheet';
//import _ from 'lodash';
import Immutable from 'immutable';
//import CircularSliderSet from '../common/CircularSliderSet';



class RegisterScreen extends React.Component {
  constructor (props) {
    super (props);

    const { navigation } = this.props
    const device_id = navigation.getParam ("device_id", "no such device id");
    //const device_state = this.props.onGetDeviceStatePress (device_id);


    this.state = {
      ingredients: [{
        "scent": "lavender",
        "ratio": 1,
        "valueRate": 100,
      },
      ],
      name: "test name",
      description: "test description",
      imgUrl: "test imgUrl",
      recipeLogId: "000000000000000000000000",

      device_id: device_id,
    }
  };




  componentDidMount () {
    this.props.onGetDeviceStatePress (this.state.device_id);
  }



  makeRandomString = (number) => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < number; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    console.log ("this is makeRandomString(8): ", text);
    return text;
  };

  render () {
    console.log ("현 기기의 device_state: ", this.props.device_state);

    const device_state = this.props.device_state;

    let cur_scent = [];
    let cart1_scent = Immutable.fromJS (device_state).getIn ([this.state.device_id, "state", "reported", "cart1_scent"  ]);
    let cart2_scent = Immutable.fromJS (device_state).getIn ([this.state.device_id, "state", "reported", 'cart2_scent' ]);
    let cart3_scent = Immutable.fromJS (device_state).getIn ([this.state.device_id, "state", "reported", 'cart3_scent' ]);
    let cart4_scent = Immutable.fromJS (device_state).getIn ([this.state.device_id, "state", "reported", 'cart4_scent' ]);
    let fan1 = Immutable.fromJS (device_state).getIn ([this.state.device_id, "state", "reported", "fan1" ]);
    let fan2 = Immutable.fromJS (device_state).getIn ([this.state.device_id, "state", "reported", "fan2" ]);
    let fan3 = Immutable.fromJS (device_state).getIn ([this.state.device_id, "state", "reported", "fan3" ]);
    let fan4 = Immutable.fromJS (device_state).getIn ([this.state.device_id, "state", "reported", "fan4" ]);

    cur_scent.push ({scent: cart1_scent, fan: fan1});
    cur_scent.push ({scent: cart2_scent, fan: fan2});
    cur_scent.push ({scent: cart3_scent, fan: fan3});
    cur_scent.push ({scent: cart4_scent, fan: fan4});
    console.log ("cur_scent: ", cur_scent);

    this.state.ingredients = cur_scent;

    
    return (
      <ScrollView>
        <View>
          <TextInput
            placeholder="향기 이름을 적어주세요"
            onChangeText={(inputName) => this.setState ({name: inputName})}
            value={this.state.name}
          />
        </View>


        <View>
          <TextInput
            placeholder="향기에 대해 설명해주세요"
            onChangeText={(inputDescription) => this.setState ({description: inputDescription})}
            value={this.state.description}
          />
        </View>
        <TouchableOpacity onPress={ () => {this.props.onRegisterRecipeStatePress (this.state.ingredients, this.state.name, this.state.description, this.state.imgUrl, this.state.recipeLogId)}}>
          <Text> hello </Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
};

export default RegisterScreen;

const styles = EStyleSheet.create ({
})
