/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import DiaryList from './DiaryList';
import DiaryReader from './DiaryReader';
export default class helloworld extends Component {
 
  showDiaryList(){
    return (
      <DiaryList/>
    );
  }
  showDiaryReader(){
    return (
      <DiaryReader/>
    );
  }
  render() {
    return this.showDiaryReader();
  }
}
AppRegistry.registerComponent('helloworld', () => helloworld);
