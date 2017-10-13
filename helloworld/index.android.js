import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
} from 'react-native';

import { Loop, Stage } from 'react-game-kit';
import HorList from './myScroll_relative';
import TopView from './topView';
export default class helloworld extends Component {

  constructor(props){
    super(props);
    this.state={
      dataArray: ["page one", "page two","page three","page four","page five","page six","page egight","page nine","page ten"],
    }
    this.showList=this.showList.bind(this);
  }
    render(){
      return this.showList();
    }
    showList(){
        return(
          <View>
            <TopView/>
            <HorList
              listArray={this.state.dataArray}
            />
          </View>
         
        );
    }
    showTop(){

    }
}

AppRegistry.registerComponent('helloworld', () => helloworld);