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
import DiaryWriter from './DiaryWriter';
import DataHandler from './DataHandler';
export default class helloworld extends Component {
  constructor(props){
    super(props);
    this.state={
      uiCode:1,
      diaryList:[],
      diaryMood:null,
      diaryTime:'读取中....',
      diaryTitle:'读取中...',
      diaryBody:'读取中...',
    };
    this.bindAllMyFunction();
    DataHandler.getAllTheDiary().then(
        (result) =>{
            this.setState({diaryList:result});
        }
    ).catch(
      (error)=>{
          console.log(error);
      }
    );
  }
  bindAllMyFunction(){
    this.selectLististItem = this.selectLististItem.bind(this);
    this.writeDiary = this.writeDiary.bind(this);
    this.returnPress = this.returnPress.bind(this);
    this.saveDiaryAndReturn = this.saveDiaryAndReturn.bind(this);
    this.readingPreviousPressed = this.readingPreviousPressed.bind(this);
    this.readingNextPressed = this.readingNextPressed.bind(this);
  }

  //阅读日记界面请求读上一篇日记处理函数
  readingPreviousPressed(){
    let previousDiary = DataHandler.getPreviousDiary();
    if(previousDiary==null){
      return;
    }
    this.setState(previousDiary);
  }
  //阅读日记界面请求读下一篇日记处理函数
  readingNextPressed(){
    let nextDiary = DataHandler.getNextDiary();
    if(nextDiary===null){
        return;
    }
    this.setState(nextDiary);
  }
  returnPress(){
    console.log("返回了");
    this.setState({uiCode:1});
  }
  //写日记就i额没保存日记并返回日记列表界面的处理函数
  saveDiaryAndReturn(newDiaryMood,newDiaryBody,newDiaryTitle){
    DataHandler.saveDiary(newDiaryMood,newDiaryBody,newDiaryTitle).then(
        (result)=>{
          this.setState(result);
        }
    ).catch(
        (error)=>{
          console.log(error);
        }
    );
  }
  writeDiary(){//写日记按钮被按下时的处理函数
      this.setState(
        ()=>{
          return{
            uiCode:3
          };
        }
      );
  }
  selectLististItem(aIndex){
      //this.setState({uiCode:2});
      // console.log("selectLististItem  "+aIndex);
      let rValue = DataHandler.getDiaryAtIndex(aIndex);
      this.setState(rValue);
  }
  showDiaryList(){
    return (
      <DiaryList 
        fakeListTitle={this.state.diaryTitle}
        fakeListTime={this.state.diaryTime}

        fakeListMood={this.state.diaryTime}

        selectlististItem={this.selectLististItem}
        diaryList={this.state.diaryList}//intent 
        searchKeyWord={this.searchKeyword}
        writeDiary={this.writeDiary}
      />
    );
  }
  searchKeyword(keyword){
    console.log('search keyword is:'+keyword);
  }
  showDiaryReader(){
    return (
      <DiaryReader returnToDiaryList={this.returnPress}
                    diaryTitle={this.state.diaryTitle}
                    diaryTime={this.state.diaryTime}
                    readingPreviousPressed={this.state.readingPreviousPressed}
                    returnPress={this.returnPress}
                    readingNextPressed={this.readingNextPressed}
                    diaryBody={this.state.diaryBody}
      />
    );
  }
  showDiaryWriter(){
    return(
      <DiaryWriter returnPressed ={this.returnPress}
                    saveDiary={this.saveDiaryAndReturn}
      />
    );
  }
  render() {
    if(this.state.uiCode===1){
      console.log("uicode ==1");
        return this.showDiaryList();
    }
    if(this.state.uiCode ===2){
        return this.showDiaryReader();
    }
    if(this.state.uiCode==3){
        return this.showDiaryWriter();
    }
   
  }
}
AppRegistry.registerComponent('helloworld', () => helloworld);
