import React, { Component } from 'react';
import{
    View,Text,TextInput,TouchableOpacity,Image,StatusBar,FlatList
} from 'react-native';

import Waterfall from 'react-native-waterfall'
import MCV from './MCV';
let angryMood = require('./img/favicon.png')
import Bounceable from "./bounceable";

export default class WaterFalllist extends Component{
    constructor(props){
        super(props);
        this.renderListItem=this.renderListItem.bind(this);
    }

    render(){
        console.log("render:"+this.props.listArray);
        return(
        <View style={MCV.container}>
            <Waterfall 
           
                data={this.props.listArray}
                renderItem={this.renderListItem}
                horizontal={true}
                showsHorizontalScrollIndicator = {false}
                pagingEnabled = {true}
          />
        </View>
        );
      }

    renderListItem(log ,sectionID,rowID){
        return(
            <View style={MCV.item}>
                <View style={MCV.list_item}> 
                   <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={angryMood} /></Bounceable> 
                   <Bounceable  onPress={()=>console.log("pressed!")} level={1.1}><Image source={angryMood} style={MCV.item_element}/></Bounceable> 
                    <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={angryMood} /></Bounceable> 
                </View>
                <View style={MCV.list_item}> 
                    <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={angryMood} /></Bounceable> 
                    <Bounceable  onPress={()=>console.log("pressed!")} level={1.1}><Image source={angryMood} style={MCV.item_element}/></Bounceable> 
                    <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={angryMood} /></Bounceable> 
                </View>
            </View>
        );
        
      }

}