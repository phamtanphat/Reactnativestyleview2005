import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class Flexbox extends PureComponent {
    render() {
        return (
            <View style={{flex : 1}}>
                <Text style={{flex : 0.25,color : "red" , fontSize : 20, backgroundColor : "yellow"}}>View1</Text>
                <Text style={{flex : 0.10,color : "red" , fontSize : 20, backgroundColor : "green"}}>View2</Text>
                <Text style={{flex : 0.40,color : "red" , fontSize : 20, backgroundColor : "blue"}}>View3</Text>
                <Text style={{flex : 0.25,color : "red" , fontSize : 20, backgroundColor : "gray"}}>View4</Text>
            </View>
        )
    }
}
