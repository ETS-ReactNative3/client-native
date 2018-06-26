import React from 'react';
import { TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class UnderlinedTextInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TextInput
      style={[styles.SignUpInput,{marginBottom: this.props.bottomMargin}]}
      placeholder={this.props.placeholder}
      placeholderTextColor="#AFAFAF"
      onChangeText = {(input) => this.props.changeState(this.props.state, input)}
      value = {this.props.getState(this.props.state)}
      />
    );
  }
}


const styles = EStyleSheet.create({
  SignUpInput: {
    fontSize: 20,
    padding: 3,
    borderBottomWidth: 3,
    borderColor: '#fff',
    color: '#fff',
  }
})

export default UnderlinedTextInput;