import React, {Component} from 'react';
import { Text, View , StyleSheet} from 'react-native'
import View1 from './components/View1';
import Flatlistview from './components/Flatlistview';

export default class App extends Component {
  render() {
    return (
      <View style={{flex : 1}}>
        <Flatlistview/>
      </View>
    );
  }
}
