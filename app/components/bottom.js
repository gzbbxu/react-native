import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  Image,
} from 'react-native';
let people_img = require('../assets/img/guide_people_circle_icon.png');
let help=require('../assets/img/game_assist_new_help_not_times.png');
let jifen=require('../assets/img/game_assist_new_double_jifen.png');
let paichu = require('../assets/img/game_assist_new_remove.png');
let circle = require('../assets/img/game_assist_new_count.png');
import BOT from '../style/BOT';
export default class BottomView extends Component {
    constructor(props){
        super(props);
        console.log("constructor BottomView");
        this.state= {
                ListDataSource:new ListView.DataSource(
                {
                    rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
                }
            ),
        };
        this.renderListItem = this.renderListItem.bind(this);
    }
    componentWillMount(){
        console.log("listRedPack11:"+this.props.listRedPack);
        if(this.props.listRedPack===null){
            return;
        }
        console.log("listRedPack:"+this.props.listRedPack);
        this.setState({
            ListDataSource:this.state.ListDataSource.cloneWithRows(this.props.listRedPack)
        });
    }
    componentWillReceiveProps(nextProps){//这个函数很重要
        this.setState({
            ListDataSource:this.state.ListDataSource.cloneWithRows(nextProps.listRedPack)
        });
    }
    renderListItem(log,sectionID,rowID){
        console.log("renderListItem");
        return(
            <View style={BOT.lv_item}>
                <Image style={BOT.lv_item_people_img} source={people_img}></Image>
                <View style={BOT.lv_item_view}>
                  <Text style={BOT.lv_item_tv}>赢取了</Text>
                  <Text style={BOT.lv_item_tv_red}>{log}</Text>
                  <Text style={BOT.lv_item_tv}>元</Text>
                </View>
               
            </View>
        );
    }
    render(){
        console.log("render:"+this.props.listRedPack);
        return(
            <View style={BOT.container}>
                <View>
                    <ListView dataSource={this.state.ListDataSource} renderRow={this.renderListItem} showsVerticalScrollIndicator={false}>

                    </ListView>
                </View>
                <View style={BOT.item2}>
                    <Image source={help} style={BOT.item_img}></Image>
                    <View>
                        <Image source={circle} style={BOT.item_num_bg}>
                            <Text style={BOT.item_num}>1</Text>
                        </Image>
                        
                    </View>
                </View>
                <View style={BOT.item3}>
                    <Image source={jifen} style={BOT.item_img}></Image>
                    <View>
                      <Image source={circle} style={BOT.item_num_bg}>
                        <Text style={BOT.item_num}>2</Text>
                     </Image>
                    </View>
                </View>
                <View style={BOT.item4}>
                    <Image source={paichu} style={BOT.item_img}></Image>
                    <View>
                        <Image source={circle} style={BOT.item_num_bg}>
                            <Text style={BOT.item_num}>3</Text>
                        </Image>
                    </View>
                </View>
            </View>
        );
    }

}