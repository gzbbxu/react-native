import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  StatusBar
} from 'react-native';


import HorList from '../components/myScroll';
import TopView from '../components/topView';
import BottomView from '../components/bottom';
import BottomNav from '../components/bottom_nav';
import TopNav from '../components/top_nav';


export default class helloworld extends Component {

  constructor(props){
    super(props);
    this.state={
      dataArray: ["page one", "page two","page three","page four","page five","page six","page egight","page nine","page ten"],
      listRedPack:["10.2","1","0.1","3.2","1.32","23.2"],
      onLineUser:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"],
    }
    this.showList=this.showList.bind(this);
  }
  comonentWillMount(){
    console.log("comonentWillMount");
  }
    render(){
      return this.showList();
    }
    showList(){
        return(
          <View>
            <StatusBar hidden={true}/>
            <TopNav onLineUser={this.state.onLineUser}/>
            <TopView/>
            <HorList
              listArray={this.state.dataArray}
            />
            <BottomView listRedPack={this.state.listRedPack}/>
            <BottomNav/>
          
          </View>
         
        );
    }
    showTop(){

    }
}


