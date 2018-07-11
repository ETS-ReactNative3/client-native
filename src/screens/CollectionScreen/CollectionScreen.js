import React from 'react';
import CollectionScreen from '../../components/CollectionScreen/CollectionScreen'
import EachCollectionScreen from '../../components/CollectionScreen/EachCollectionScreen'

import { connect } from 'react-redux';
import { loadCollection } from '../../actions/recipe';


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

export class CollectionScreenContainer extends React.Component {

  onCollectionPress = (item) => {
    console.log ("item at CollectionScreen: ", item);
    this.props.navigation.replace ("EachCollection",{
      item: item 
      });
    
  };

  render() {
    return <CollectionScreen
    {...this.props}
    onCollectionPress = {this.onCollectionPress} />
  }

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionScreenContainer);
