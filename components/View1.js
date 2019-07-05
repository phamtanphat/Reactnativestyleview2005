import React, { PureComponent } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import Button from './Button';
import Flexbox from './Flexbox';

export default class View1 extends PureComponent {
    render() {
        return (
        <View style={{flex : 1}}>
            <Flexbox /> 
        </View>         
        )
    }
}
const styles = StyleSheet.create({
    text:{
        color : 'red', 
        fontSize : 30,
        backgroundColor : 'maroon', 
        fontStyle : "italic", 
        fontWeight : "500",
        alignContent:"center"
    }
})
