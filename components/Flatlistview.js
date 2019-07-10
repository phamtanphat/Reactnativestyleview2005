import React, { Component } from 'react'
import { Text, View , FlatList} from 'react-native'


export default class Flatlistview extends Component {
    constructor(props){
        super(props);
        this.state = {
            words : [
                {id : "a1" , en : "One" , vn : "Môt" , isMemorized : true},
                {id : "a2" , en : "Two" , vn : "Hai" , isMemorized : false},
                {id : "a3" , en : "Three" , vn : "Ba" , isMemorized : false},
                {id : "a4" , en : "Four" , vn : "Bốn" , isMemorized : true},
            ],
            alert : "a"
        }
    }
    _renderFlatlist = (item) => {
        return (
            <View>
                <Text style={{fontSize : 30 , color : item.isMemorized ? "green" : "red"}}>{item.en}</Text>
                <Text>{this.state.alert}</Text>
            </View>
            
        )
    }
    render() {
        return (
            <View style={{flex : 1 }}>
                <FlatList
                    ref={(ref) => this.flatlist = ref}
                    keyExtractor={item => item.id}
                    data={this.state.words}
                    renderItem={({item}) => this._renderFlatlist(item)}
                    />
                    
            </View>
        )
    }
}
