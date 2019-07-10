import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class Home1 extends PureComponent {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View>
                <Text> textInComponent  1</Text>
            </View>
        )
    }
}
