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
import TOPA from '../style/topNavStyle';
let backIcon = require('../assets/img/theme_toolbar_btn_back_fg_normal0.png');
let people_img = require('../assets/img/guide_people_circle_icon.png');
let rightOk= require('../assets/img/edit_arrow_btn_normal.png');
export default class TopNavView extends Component{
    constructor(props){
        super(props);
        this.state= {
            ListDataSource:new ListView.DataSource(
            {
                rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
            }
        ),
    };
        this.renderListItem=this.renderListItem.bind(this);
    }
    renderListItem(log,sectionID,rowID){
        return(
            <Image source={people_img} style={TOPA.onLineImg}>
                
            </Image>
        );
    }
    componentWillMount(){
        console.log("listRedPack11:"+this.props.onLineUser);
        if(this.props.onLineUser===null){
            return;
        }
        console.log("listRedPack:"+this.props.onLineUser);
        this.setState({
            ListDataSource:this.state.ListDataSource.cloneWithRows(this.props.onLineUser)
        });
    }
    componentWillReceiveProps(nextProps){//这个函数很重要
        this.setState({
            ListDataSource:this.state.ListDataSource.cloneWithRows(nextProps.onLineUser)
        });
    }
    render(){
        return(
            <View style={TOPA.container}>
                <Image source={backIcon} style={TOPA.backimg}></Image>
                <Text style={TOPA.tv}>火眼金睛</Text>
                <ListView dataSource={this.state.ListDataSource} renderRow={this.renderListItem}   horizontal = {true}
                   showsHorizontalScrollIndicator = {false}   pagingEnabled = {true} style={TOPA.lv}>
                </ListView>
                <View style={TOPA.rightView}>
                    <View style={TOPA.rightViewTop}>
                        <Text style={TOPA.smallTv}>参与人数</Text>
                        <Image source={rightOk} style={TOPA.rightok} ></Image>
                    </View>
                    <Text style={TOPA.smallTv}>23424</Text>
                </View>
            </View>
        );
    }
}