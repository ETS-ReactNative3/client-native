import React from 'react';
import SettingScreen from '../components/SettingScreen'
import { connect } from 'react-redux';
import { logout } from '../actions/user';
import _ from 'lodash';

const mapStateToProps = state => ({
  loading: state.getIn(['user', 'auth', 'loading']),
  token: _.toString(state.getIn(['user', 'auth', 'token', 'auth_token'])),
  error: _.toString(state.getIn(['user', 'auth', 'error']))
}) ;

const mapDispatchToProps = (dispatch, props) => ({
  async logout() {
    await dispatch(logout());
  }
});

export class SettingScreenContainer extends React.Component {

  onLogoutPress = async () => {
    await this.props.logout();
    this.props.navigation.popToTop();
  }

  render() {
    return <SettingScreen 
      onLogoutPress = {this.onLogoutPress}
    />
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingScreenContainer);
