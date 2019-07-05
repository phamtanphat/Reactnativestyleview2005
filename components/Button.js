import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'

export default class Button extends PureComponent {
    render() {
        return (
            <TouchableOpacity 
                style={{backgroundColor : "#607CB7" , marginHorizontal : 30 , borderRadius : 2 , marginTop : 200}}>
                <View>
                    <Text style={{color : "white" , fontSize : 20 }}>Login in facebook</Text>
                </View>
           </TouchableOpacity>
        )
    }
}
