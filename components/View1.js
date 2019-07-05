import React, { PureComponent } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import Button from './Button';

export default class View1 extends PureComponent {
    render() {
        return (
            <View>
                <Button 
                    style={{backgroundColor : "black" ,  borderWidth : 1 , borderColor : "yellow"}}
                    onPress={() => alert("Day la button")}/>
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
