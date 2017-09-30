/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  FlatList,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';
import Page4 from './Page4.js';


export default class helloworld extends Component {
  constructor(props){
      super(props);
      this.renderScene = this.renderScene.bind(this);
      this.configureScene = this.configureScene.bind(this);
  }
  configureScene(route){
     return Navigator.SceneConfigs.FadeAndroid;
  }
  componentWillMount(){
    let constantData = require('./data/SimpleSample.json');
    console.log("constantData's type:"+typeof(constantData));
    console.log("employees'type:"+typeof(constantData.employees));
    console.log("employees'lenght:"+constantData.employees.length);
    console.log("no1 giveName:"+constantData.employees[0].givenName);
    console.log("no1 salary:"+constantData.employees[0].salary);
  }
  renderScene(router,navigation){
    this.navigation = navigation;
      switch(router.name){
        case "Page1":
          return <Page1 navigation = {navigation}/>
        case "Page2":
          return <Page2 navigation = {navigation} /> 
        case "Page3":
          return <Page3 navigation = {navigation} /> 
        case "Page4":
         return <Page4 navigation = {navigation} /> 
      }
  }
  render() {
    return (
        <Navigator initialRoute={{name:'Page1'}} configureScene = {this.configureScene} renderScene={this.renderScene}/>
    );
  }
}
AppRegistry.registerComponent('helloworld', () => helloworld);
