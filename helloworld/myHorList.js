import React, { Component } from 'react';
import{
    View,Text,TextInput,TouchableOpacity,Image,StatusBar,ListView,ScrollView,FlatList
} from 'react-native';
import MCV from './MCV';
let angryMood = require('./img/favicon.png')
import Bounceable from "./bounceable";
export default class HoriList extends Component{
    constructor(props){
        super(props);
        this.state={
          listdatasource:new ListView.DataSource({
            rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
          })
        };
        this.renderListItem=this.renderListItem.bind(this);
  
      }
      componentWillMount(){
          if(this.props.listArray===null){
            return;
          }
         
         this.setState({
             listdatasource:this.state.listdatasource.cloneWithRows(this.props.listArray)
         });
      }
      componentWillReceiveProps(nextProps){
        this.state({
            listdatasource:this.state.listdatasource.cloneWithRows(nextProps.listArray)
        });
      }
      render(){
        console.log("render:"+this.props.listArray);
        return(
        <View style={MCV.container}>
            <ListView 
                dataSource={this.state.listdatasource}
                renderRow={this.renderListItem}
                horizontal={true}
                showsHorizontalScrollIndicator = {false}
                pagingEnabled = {true}
          />
        </View>
        );
      }
  
    //   renderListItem(log ,sectionID,rowID){
    //     return(
    //         <View style={MCV.item}>
    //             <View style={MCV.list_item}> 
    //                <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={angryMood} /></Bounceable> 
    //                <Bounceable  onPress={()=>console.log("pressed!")} level={1.1}><Image source={angryMood} style={MCV.item_element}/></Bounceable> 
    //                 <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={angryMood} /></Bounceable> 
    //             </View>
    //             <View style={MCV.list_item}> 
    //                 <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={angryMood} /></Bounceable> 
    //                 <Bounceable  onPress={()=>console.log("pressed!")} level={1.1}><Image source={angryMood} style={MCV.item_element}/></Bounceable> 
    //                 <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={angryMood} /></Bounceable> 
    //             </View>
    //         </View>

            
    //     );
        
    //   }
    renderListItem(log ,sectionID,rowID){
        return(
            <View style={MCV.item}>
                <Text>{log}</Text>
            </View>

            
        );
        
      }
}