import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class Flexbox extends PureComponent {
    render() {
        return (
            <View style={{flex : 1 ,flexDirection : "row" }}>
                <View style={{ backgroundColor : "blue" , justifyContent : "flex-end" }}>
                    <Text style={{fontSize : 20,  color : "red" , backgroundColor : "yellow"}}>View1</Text>
                </View>
                <View style={{ }}>
                    <Text style={{fontSize : 20,  color : "red" , backgroundColor : "yellow"}}>View2</Text>
                </View>
            </View>
        )
    }
}
