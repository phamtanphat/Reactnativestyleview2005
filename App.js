import React, {Component} from 'react';
import { Text, View , StyleSheet} from 'react-native'
import View1 from './components/View1';

export default class App extends Component {
  render() {
    return (
      <View style={{flex : 1}}>
        <View1/>
      </View>
    );
  }
}
