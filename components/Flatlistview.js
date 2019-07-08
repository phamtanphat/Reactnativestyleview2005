import React, { Component } from 'react'
import { Text, View , FlatList} from 'react-native'

const words = [
    {id : "a1" , en : "One" , vn : "Môt" , isMemorized : true},
    {id : "a2" , en : "Two" , vn : "Hai" , isMemorized : false},
    {id : "a3" , en : "Three" , vn : "Ba" , isMemorized : false},
    {id : "a4" , en : "Four" , vn : "Bốn" , isMemorized : true},
]
export default class Flatlistview extends Component {
    _renderFlatlist = (item) => {
        return (
            <Text style={{fontSize : 30 , color : item.isMemorized ? "green" : "red"}}>{item.en}</Text>
        )
    }
    render() {
        return (
            <View style={{flex : 1 }}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={words}
                    renderItem={({item , index}) => this._renderFlatlist(item)}
                    />
            </View>
        )
    }
}
