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
// import HorList from './myHorList';
//import HorList from './myplatlist';
import HorList from './myScroll.js';

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
          <HorList
            listArray={this.state.dataArray}
          />
        );
    }
}

AppRegistry.registerComponent('helloworld', () => helloworld);