import React from 'react';
import { loadCollection } from '../../actions/recipe';
import EachCollectionScreen from '../../components/CollectionScreen/EachCollectionScreen';
import { connect } from 'react-redux';
import { userinfoOthers } from '../../actions/user';



const mapStateToProps = state => {
  //console.log ("state is ", state);
  return ({
    loading: state.getIn(['recipe', 'collection', 'loading']),
    error: state.getIn(['recipe', 'collection', 'error']),
    list: state.getIn(['recipe', 'collection', 'list']),
    user_name: state.getIn (['user', 'userinfo', 'data', 'name']),
  })
};

const mapDispatchToProps = (dispatch, props) => ({
  async loadCollection() {
    dispatch(loadCollection({}));
  },

  async userinfo (user_id) {
    dispatch (userinfoOthers (user_id));
  }

});

export class EachCollectionScreenContainer extends React.Component {

  onGetUserId = async (user_id) => {
    await this.props.userinfo (user_id);
  }

  render() {
    return <EachCollectionScreen
      {...this.props}
      onGetUserId = {this.onGetUserId}
     />
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EachCollectionScreenContainer);
