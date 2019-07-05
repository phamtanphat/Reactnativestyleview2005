import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'

export default class Button extends PureComponent {
    render() {
        return (
            <TouchableOpacity 
                style={{...this.props.style , backgroundColor : "orange"}}
                onPress={this.props.onPress}>
                <View>
                    <Text style={{color : "red" , fontSize : 20 }}>Button</Text>
                </View>
           </TouchableOpacity>
        )
    }
}
