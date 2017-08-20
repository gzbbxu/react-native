import React,{Component} from 'react';
import{
  AppRegistry,BackAndroid,Platform,Text, 
}from 'react-native';
import LoginLeaf from './LoginLeaf'
import WaitingLeaf from './WaitingLeaf'
import { Navigator } from 'react-native-deprecated-custom-components'
export default class NaviModule extends Component{
  constructor(props){
      super(props);
      this.renderScene = this.renderScene.bind(this);
      this.configureScene=this.configureScene.bind(this);
      this.handleBackAndroid=this.handleBackAndroid.bind(this);
  }
  configureScene(route){
      return Navigator.SceneConfigs.FadeAndroid;
    //return Navigator.SceneConfigs.VerticalDownSwipeJump;
  }
  renderScene(router,navigator){
    this.navigator = navigator;
    switch(router.name){
        case "login":
          return  < LoginLeaf navigator={navigator}/>
        case "waiting":
          return <WaitingLeaf phoneNumber={router.phoneNumber} userPW={router.userPW} navigator={navigator}/>
    }
  }
  render(){
    return(
      <Navigator 
      initialRoute={{name:'login'}}
      configureScene={this.configureScene}
      renderScene={this.renderScene}
      />
    );
  }
  handleBackAndroid(){
    if(this.navigator.getCurrentRoutes().length>1){
      this.navigator.pop();
      return true;
    }
    return false;
  }
  componentDidMount(){
    if(Platform.OS=="android"){
        BackAndroid.addEventListener('hardwareBackPress',this.handleBackAndroid);
    }
  }
  componentWillUnmount(){
    if(Platform.OS=="android"){
      BackAndroid.removeEventListener('hardwareBackPress',this.handleBackAndroid);
    }
  }
} 
AppRegistry.registerComponent('HelloWorldTest',()=>NaviModule);