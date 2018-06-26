import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftOn: this.props.leftOn != null ? this.props.leftOn : true
    }
  }
  render() {
    let onColor = this.props.onColor!=null ? this.props.onColor : null;
    let offColor = this.props.offColor!=null ? this.props.offColor : null;
    let leftWidth = this.props.leftWidth!=null ? this.props.leftWidth : 100;
    let rightWidth = this.props.rightWidth!=null ? this.props.rightWidth : 100;
    return (
      <View style={styles.container}>
        <TouchableOpacity style = {[styles.LeftBtn, {backgroundColor: this.state.leftOn ? onColor : offColor, width: leftWidth}]} onPress={() => {
          this.setState({
            leftOn: true
          });
          this.props.leftOnFunction()
        }}>
            <Text style={styles.buttonText}>{this.props.leftBtnName}</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.RightBtn, {backgroundColor: !this.state.leftOn ? onColor : offColor, width: rightWidth},]} onPress={() => {
          this.setState({
            leftOn: false
          });
          this.props.rightOnFunction()
        }}>
            <Text style={styles.buttonText}>{this.props.rightBtnName}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ToggleSwitch;

const styles = EStyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  LeftBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderWidth: 1,
    borderColor: '#ffffff',
    height: 30
  },
  RightBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 1,
    borderColor: '#ffffff',
    height: 30
  },
})