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
                        {/* Group 4 :  3 4 */}
                    <View style={{flex : 0.8 , backgroundColor : "white" ,flexDirection : "column" }}>
                        <View style={{flex : 1 , justifyContent : "center" , alignItems : "center" , backgroundColor : "red" }}>
                            <Text style={{fontSize : 30}}>3</Text>
                        </View>
                        <View style={{flex : 1 , justifyContent : "center" , alignItems : "center" , backgroundColor : "coral" }}>
                            <Text style={{fontSize : 30}}>4</Text>
                        </View>
                    </View>

                </View>
                {/* Group 2 :  2 5 6 7 8 9*/}
                <View style={{flex : 0.5 , backgroundColor : "yellow" , flexDirection : "row"}}>  
                    {/* Group 5 :  2 */}
                    <View style={{flex : 2 , backgroundColor : "chartreuse" , justifyContent : "center" , alignItems : "center"}}>
                        <Text style={{fontSize :  30}}>2</Text>
                    </View>
                    {/* Group 6 :  5 6 */}
                    <View style={{flex : 5 , backgroundColor : "white" ,flexDirection : "column" }}>
                        <View style={{flex : 1 , justifyContent : "center" , alignItems : "center" , backgroundColor : "blue" }}>
                            <Text style={{fontSize : 30}}>5</Text>
                        </View>
                        <View style={{flex : 1 , justifyContent : "center" , alignItems : "center" , backgroundColor : "darkblue" }}>
                            <Text style={{fontSize : 30}}>6</Text>
                        </View>
                    </View>
                    {/* Group 7 :  7 8 9 */}
                    <View style={{flex : 3 , backgroundColor : "darkgoldenrod"}}>

                    </View>
                </View>
            </View>
        )
    }
}
