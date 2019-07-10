import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class Home2 extends PureComponent {

    render() {
        const {navigation} = this.props
        return (
            <View>
                <Text> {navigation.getParam("home2","")}</Text>
            </View>
        )
    }
}
