import React, { Component } from 'react';
import{
    View,Text,TextInput,TouchableOpacity,Image,StatusBar,FlatList
} from 'react-native';
import MCV from './MCV';
let angryMood = require('./img/favicon.png')
import Bounceable from "./bounceable";
export default class HoriPlatlist extends Component{
    constructor(props){
        super(props);
      
        this.renderListItem=this.renderListItem.bind(this);
  
      }
    //   componentWillMount(){
    //       if(this.props.listArray===null){
    //         return;
    //       }
         
    //      this.setState({
    //          listdatasource:this.state.listdatasource.cloneWithRows(this.props.listArray)
    //      });
    //   }
    //   componentWillReceiveProps(nextProps){
    //     this.state({
    //         listdatasource:this.state.listdatasource.cloneWithRows(nextProps.listArray)
    //     });
    //   }
      render(){
        console.log("render:"+this.props.listArray);
        return(
        <View style={MCV.container}>
            <FlatList 
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
    // renderListItem(log ,sectionID,rowID){
    //     return(
    //         <View style={MCV.item}>
    //             <View style={MCV.list_item}>
    //                 <Text>{log}</Text>
    //             </View>
    //             <View style={MCV.list_item}>
    //                 <Text>{log}</Text>
    //             </View>
    //         </View>
    //     );
    //   }
}