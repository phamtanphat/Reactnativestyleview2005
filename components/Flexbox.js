import React, { PureComponent } from 'react'
import { Text, View , Dimensions} from 'react-native'

export default class Flexbox extends PureComponent {
    render() {
        return (
            <View style={{flex : 1 ,flexDirection : "column"}}>
                {/* Group 1 :  1 3 4*/}
                <View style={{flex : 0.5 , backgroundColor : "red" , flexDirection : "row"}}> 
                        {/* Group 3 :  1 */}
                    <View style={{flex : 0.2 ,justifyContent : "center" , alignItems : "center" , backgroundColor : "green"}}>
                        <Text style={{fontSize : 30 }}>1</Text>
                    </View>
                        {/* Group 4 :   3 4 */}
                    <View style={{flex : 0.8 , backgroundColor : "white"}}>
                        <Text>3</Text>
                        <Text>4</Text>
                    </View>

                </View>
                {/* Group 2 :  2 5 6 7 8 9*/}
                <View style={{flex : 0.5 , backgroundColor : "yellow"}}>  
                    
                </View>
            </View>
        )
    }
}
