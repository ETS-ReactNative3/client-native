import React from 'react';

import { loadCollection } from '../../actions/recipe';
import EachCollectionScreen from '../../components/CollectionScreen/EachCollectionScreen';

import { connect } from 'react-redux';



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

export class EachCollectionScreenContainer extends React.Component {

  render() {
    return <EachCollectionScreen
    {...this.props}
     />
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EachCollectionScreenContainer);
