import React from 'react';
import CollectionScreen from './CollectionScreen';
import EachCollectionScreen from './EachCollectionScreen';
import MainHeader from '../../components/Headers/MainHeader';
import GoBackHeader from '../../components/Headers/GoBackHeader';
import { createStackNavigator } from 'react-navigation';


const CollectionNav = createStackNavigator ({
  Collection: {
    screen: CollectionScreen,
    navigationOptions: ({navigation}) => ({
      header: <MainHeader navigation={navigation}/>
    })
  },
  EachCollection: {
    screen: EachCollectionScreen,
    navigationOptions: ({navigation}) => ({
      header: <GoBackHeader navigation={navigation} />
    })
  },
  },
  {
    initialRouteName: "Collection",
  })

export default CollectionNav;
