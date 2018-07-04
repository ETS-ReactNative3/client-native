import React from 'react';
import CollectionScreen from '../components/CollectionScreen'

import { connect } from 'react-redux';
import { loadCollection } from '../actions/recipe';


const mapStateToProps = state => ({
  loading: state.getIn(['recipe', 'collection', 'loading']),
  error: state.getIn(['recipe', 'collection', 'error']),
  list: state.getIn(['recipe', 'collection', 'list'])
});

const mapDispatchToProps = (dispatch, props) => ({
  async loadCollection() {
    dispatch(loadCollection({}));
  }
});
/*
export class CollectionScreenContainer extends React.Component {

  render() {
    return <CollectionScreen />
  }
}*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionScreen);
