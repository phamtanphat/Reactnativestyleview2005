import React, { PureComponent } from 'react'
import { Text, View , TouchableOpacity } from 'react-native'

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
            <View style={{flex : 1 , justifyContent : "center" , alignItems : "center"}}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Home2")}
                    style={{backgroundColor : "gray" , padding : 10 , borderRadius : 5 }}
                >
                    <Text style={{color : "red" , fontSize : 20}}> Component1</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
