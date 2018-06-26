import React from 'react';
import { Text, TextInput, View, Button, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import Image from 'react-native-remote-svg';

import { oneString } from './agreement';
import DatePicker from 'react-native-datepicker'
import { Dropdown } from 'react-native-material-dropdown';

// Custom components
import UnderlinedTextInput from '../common/UnderlinedTextInput';
import ToggleSwitch from '../common/ToggleSwitch';

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
      pwdConfirm: '',
      name: '',
      date:"2016-05-15",
      gender: 'female',
      place: 'house',
      space: '',
      purpose: '',
      prefer_scents: ['','','']
    }
  }

  changeState = (state, result) => {
    this.setState({[state]: result})
  };

  getState = (state) => (
    this.state[state]
  );


 
  render() 
  {
    const printState = () => {
      console.log(
        "email:", this.state.email, 
        "\npwd:",this.state.pwd,
        "\npwdConfirm:", this.state.pwdConfirm,
        "\nname:", this.state.name,
        "\ndate:", this.state.date,
        "\ngender:",this.state.gender,
        "\nplace:",this.state.place,
        "\nspace:",this.state.space,
        "\npurpose:",this.state.purpose,
        "\nprefer_scents:",this.state.prefer_scents
      );
    }

    return (
      <View style={styles.container}>
        <ImageBackground
          style = {styles.imgBackground}
          source = {require(background)}
          blurRadius={90} >

          <View style={styles.topBar}>
            <TouchableOpacity onPress={this.props.onCancelPress}>
              <Text style = {styles.cancelText}>취소</Text>
            </TouchableOpacity>
            <Image 
              source={require(logo)} 
              style = {styles.logo} />
          </View>
          <ScrollView style={styles.scrollviewContainer} >
          <UnderlinedTextInput 
            placeholder="이메일"
            bottomMargin={30}
            state="email"
            changeState={this.changeState}
            getState={this.getState} />
          <UnderlinedTextInput 
            placeholder="비밀번호"
            bottomMargin={5}
            state="pwd"
            changeState={this.changeState}
            getState={this.getState} />
          <UnderlinedTextInput 
            placeholder="비밀번호 확인"
            bottomMargin={30}
            state="pwdConfirm"
            changeState={this.changeState}
            getState={this.getState} />
          <UnderlinedTextInput 
            placeholder="이름"
            bottomMargin={30}
            state="name"
            changeState={this.changeState}
            getState={this.getState} />
            <View style={[styles.rowView, {height: 50}]}>
              <Text style={[styles.textNormal,{marginTop: 8}]}>생일</Text>
              <DatePicker
                style={styles.datePicker}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="1900-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                showIcon={false}
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    position: 'relative',
                  },
                  dateText: {
                    fontSize: 20,
                    color: '#ffffff'
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              />
            </View>
            <View style={styles.rowView}>
              <Text style={styles.textNormal}>성별</Text>
              <ToggleSwitch 
                leftBtnName = "여성"
                rightBtnName = "남성"
                onColor = "#D5E16E"
                offColor = "#fff"
                leftWidth = {100}
                rightWidth = {100}
                leftOn = {true}
                leftOnFunction = {() => {
                  this.setState({
                    gender: 'female'
                  })
                }}
                rightOnFunction = {() => {
                  this.setState({
                    gender: 'male'
                  })
                }}
              />
            </View>
            <Text style={{color: '#fff'}}>
              향후 개인 맞춤형 추천 서비스를 제공하기 위해 사용하실 장소 / 목적 / 향기 정보를 수집하고 있습니다. 수집된 정보는 위 목적으로만 활용되며 공개되지 않습니다.
            </Text>
            <View style={styles.rowView}>
              <Text style={styles.textNormal}>장소</Text>
              <ToggleSwitch 
                leftBtnName = "집"
                rightBtnName = "직장"
                onColor = "#D5E16E"
                offColor = "#fff"
                leftWidth = {100}
                rightWidth = {100}
                leftOn = {true}
                leftOnFunction = {() => {
                  console.log("Change to house");
                  this.setState({
                    place: 'house'
                  })
                }}
                rightOnFunction = {() => {
                  this.setState({
                    place: 'work'
                  })
                }}
              />
            </View>
            <View style={styles.rowView}>
              <View style={styles.usageDropdownView}>
                <Dropdown
                  style={styles.usageDropdown}
                  label='사용할 장소'
                  data={place}
                  onChangeText={(value, index, data) => {
                    this.setState({
                      space: value
                    });
                  }}
                />
              </View>
              <View style={styles.usageDropdownView}>
                <Dropdown
                  style={styles.usageDropdown}
                  label='사용할 목적'
                  data={purpose}
                  onChangeText={(value, index, data) => {
                    this.setState({
                      purpose: value
                    });
                  }}
                />
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: '#fff'}}>좋아하는 향기를 3순위까지 선택해주세요.</Text>
            </View>
            <View style={styles.rowView}>
              <View style={styles.scentDropdownView}>
                <Dropdown
                  style={styles.usageDropdown}
                  label='1순위'
                  data={scent}
                  onChangeText={(value, index, data) => {
                    let newArray = this.state.prefer_scents.slice();
                    newArray[0] = value;
                    this.setState({prefer_scents: newArray});
                  }}
                />
              </View>
              <View style={styles.scentDropdownView}>
                <Dropdown
                  style={styles.usageDropdown}
                  label='2순위'
                  data={scent}
                  onChangeText={(value, index, data) => {
                    let newArray = this.state.prefer_scents.slice();
                    newArray[1] = value;
                    this.setState({prefer_scents: newArray});
                  }}
                />
              </View>
              <View style={styles.scentDropdownView}>
                <Dropdown
                  style={styles.usageDropdown}
                  label='3순위'
                  data={scent}
                  onChangeText={(value, index, data) => {
                    let newArray = this.state.prefer_scents.slice();
                    newArray[2] = value;
                    this.setState({prefer_scents: newArray});
                  }}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.submitBtn} onPress={printState}>
              <Text style = {styles.submitText}>Submit</Text>
            </TouchableOpacity>
            <Button
                onPress={printState}
                title="click"
                color="#841584"
            />
          </ScrollView>
        
        </ImageBackground>
      </View>
    );
  }
}

export default SecondScreen;

const Dimensions = require('Dimensions');
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  rowView: {
    flex: 1,
    flexDirection: 'row'
  },
  imgBackground: {
    width: '100%',
    height: '100%',
  },
  topBar: {
    marginTop: 40,
    paddingLeft: 10,
    height: 40
  },
  cancelText: {
    fontSize: 15,
    color: '#fff'
  },
  logo: {
    height: 17,
    alignItems: 'center'
  },
  scrollviewContainer: {
    marginTop: 15,
    padding: 40
  },
  textNormal: {
    fontSize: 20,
    color: '#AFAFAF',
    padding: 3
  },
  datePicker: {
    width: 200,
    marginLeft: 40
  },
  dateText: {
    fontSize: 20,
    color: '#ffffff'
  },
  usageDropdownView: {
    width: '50%',
  },
  usageDropdown: {
    color: 'white'
  },
  scentDropdownView: {
    width: '33%'
  },
  submitBtn: {
    backgroundColor: '#D5E16E',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 5,
    alignSelf: 'flex-end'
  },
  submitText: {
    color: '#000',
    fontSize: 20
  }
});

const data = [{
  value: 'Banana',
}, {
  value: 'Mango',
}, {
  value: 'Pear',
}];

const place = [{
  value: '거실',
}, {
  value: '부엌'
}, {
  value: '방'
}, {
  value: '베란다'
}, {
  value: '화장실'
}, {
  value: '기타'
}];

const purpose = [{
  value: '숙면을 위해'
}, {
  value: '요가할 때'
}, {
  value: '집중하기 위해'
}, {
  value: '좋은 향기를 나게 하려고'
}, {
  value: '기타'
}];

const scent = [{
  value: '라벤더'
}, {
  value: '페퍼민트'
}, {
  value: '레몬'
}, {
  value: '시트로넬라'
}, {
  value: '없음'
}]