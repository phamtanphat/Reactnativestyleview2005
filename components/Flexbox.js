import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class Flexbox extends PureComponent {
    render() {
        return (
            <View style={{flex : 1 ,flexDirection : "column" }}>
                {/* Group 1 :  1 3 4*/}
                <View style={{flex : 0.5 , backgroundColor : "red"}}>  
                    
                </View>
                {/* Group 2 :  2 5 6 7 8 9*/}
                <View style={{flex : 0.5 , backgroundColor : "yellow"}}>  
                    
                </View>
            </View>
        )
    }
}
