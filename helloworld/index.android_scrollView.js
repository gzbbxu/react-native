import React, { Component } from 'react';
import {
  AppRegistry,StyleSheet,Text,View,ScrollView,RefreshControl
} from 'react-native';
import DiaryList from './DiaryList';
import DiaryReader from './DiaryReader';
import DiaryWriter from './DiaryWriter';
import DataHandler from './DataHandler';
export default class LearnRN extends Component{
    constructor(props){
        super(props);
        this.onSrollBeginDrag = this._onScrollBeginDrag.bind(this);
        this.onScrollEndDrag = this._onScrollEndDrag.bind(this);
        this.onMomentumScrollBegin = this._onMomentumScrollBegin.bind(this);
        this.onMomentumScrollEnd=this._onMomentumScrollEnd.bind(this);
        this.onRefresh = this._onRefresh.bind(this);
        this.onscroll = this._onscroll.bind(this);
    }
    _onScrollBeginDrag(){
        console.log('begin drag');
    }
    _onScrollEndDrag(){
        console.log('end drag');
    }
    _onMomentumScrollBegin(){
        console.log('_onMomentumScrolBegin');
    }
    _onMomentumScrollEnd(){
        console.log('__onMomentumScrollEnd');
    }
    _onRefresh(){
        console.log('_onRefresh is called');
    }
    _onscroll(aEvent){
        console.log('on Scroll is called . aEvent');
    }
    render(){
        return(
            <View style = {styles.container}>
                <ScrollView style={styles.scrollview} 
                    onMomentumScrollBegin={this._onMomentumScrollBegin}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                    onScrollBeginDrag={this._onScrollBeginDrag}
                    onScroll={this.onScroll}
                    refreshControl={
                        <RefreshControl
                            refreshing={false}
                            onRefresh={this._onRefresh}
                            tintColor="#ff0000"
                            title="loading...."
                            colors={['#ff0000','#00ff00','#0000ff']}
                            progressBackgroundColor='#ffff00'
                        />
                    }
                    onScrollEndDrag={this._onScrollEndDrag}
                >
                <View style ={styles.aview}/>
                    <ScrollView horizontal={true} style={styles.midScrollView}>
                        <View style ={styles.bView}/>
                        <View style = {styles.bView}/>
                    </ScrollView>
                    <View style={styles.aview}/>
                </ScrollView>
            </View>
        );
    }
   
}
var styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'gray',
        },
        scrollview:{
            backgroundColor:'#CCCCCC',
        },
        midScrollView:{
            height:150,
            borderWidth:1,
            borderColor:'black',
        },
        aview:{
            margin:1,
            padding:0,
            backgroundColor:'#eaeaea',
            height:375,
        },
        bView:{
            flex:1,
            height:148,
            width:300,
            borderWidth:1,
            borderColor:'black',
            backgroundColor:'gray'
        }
    }    
 );
AppRegistry.registerComponent('helloworld', () => LearnRN);