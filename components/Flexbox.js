import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class Flexbox extends PureComponent {
    render() {
        return (
            <View>
                <Text style={{color : "red" , fontSize : 20, backgroundColor : "yellow"}}>View1</Text>
                <Text style={{color : "red" , fontSize : 20, backgroundColor : "green"}}>View2</Text>
                <Text style={{color : "red" , fontSize : 20, backgroundColor : "blue"}}>View3</Text>
            </View>
        )
    }
}
