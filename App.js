import React, {Component} from 'react';
import { Text, View , StyleSheet} from 'react-native'

import Stack from './components/StackNavigation/stack';
import Cameragallery from './components/Cameragallery';

export default class App extends Component {
  render() {
    return (
      <View style={{flex : 1}}>
        <Cameragallery/>
      </View>
    );
  }
}
