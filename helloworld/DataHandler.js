import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';

let angryMood = require('./img/favicon.png');
let peaceMood = require('./img/favicon.png');
let happyMood= require('./img/favicon.png');
let sadMood = require('./img/favicon.png');
let miseryMood= require('./img/favicon.png');
export default class DataHandler{
    static realDairyList=[];
    static listIndex = 0;
    static bubleSortDiaryList(){
        let tempObj;
        for(let i=0;i<DataHandler.realDairyList.length;i++){
            for(let j=0;j<DataHandler.realDairyList.length-i-1;j++){
                if(DataHandler.realDairyList[j].index>DataHandler.realDairyList[j+1].index){
                    tempObj = DataHandler.realDairyList[j];
                    DataHandler.realDairyList[j] = DataHandler.realDairyList[j+1];
                    DataHandler.realDairyList[j+1] = tempObj;
                }
            }
        }
    }
    static getDiaryAtIndex(aIndex){
        DataHandler.listIndex = aIndex;
        return{
            uiCode:2,
            diaryTime:DataHandler.realDairyList[aIndex].time,
            diaryTitle:DataHandler.realDairyList[aIndex].title,
            diaryMood:DataHandler.realDairyList[aIndex].mood,
            diaryBody:DataHandler.realDairyList[aIndex].body
        };
    }

    static getAllTheDiary(){
        return new Promise(
            function(resolve,reject){
                AsyncStorage.getAllKeys().then(
                    (keys)=>{
                        if(keys.length===0){
                            let returnValue ={
                                diaryTime:'没有历史日记',
                                diaryTitile:'没有历史日记',
                                diaryBody:''
                            };
                            resolve(returnValue);
                            return;
                        }
                        AsyncStorage.multiGet(keys).then(
                            (results)=>{
                                let resultsLength = results;
                                for(let counter=0;counter<resultsLength;counter++){
                                    DataHandler.realDairyList[counter]=JSON.parse(results[counter][1]);
                                    switch(DataHandler.realDairyList[resultsLength].mood){
                                        case 2:
                                            DataHandler.realDairyList[counter].mood = angryMood;
                                            break; 
                                        case 3:
                                            DataHandler.realDairyList[counter].mood = sadMood;
                                            break;
                                        case 4:
                                            DataHandler.realDairyList[counter].mood = happyMood;
                                            break;
                                        case 5:
                                            DataHandler.realDairyList[counter].mood = miseryMood;
                                            break;
                                        default:
                                            DataHandler.realDairyList[counter].mood = peaceMood;
                                    }
                                    let atime = new Date(DataHandler.realDairyList[counter].time);
                                }
                                DataHandler.bubleSortDiaryList();//排序
                                if(resultsLength>0){//日记列表有数据,取出最后一条数据
                                    resultsLength--;
                                    DataHandler.listIndex = resultsLength;
                                    let newMoodIcon;
                                    switch(DataHandler.realDairyList[resultsLength].mood){
                                        case 2:
                                            newMoodIcon = angryMood;
                                        break;
                                        case 3:
                                            newMoodIcon = sadMood;
                                        break;
                                        case 4:
                                            newMoodIcon = happyMood;
                                        break;
                                        case 5:
                                            newMoodIcon = miseryMood;
                                        break;
                                        default:
                                            newMoodIcon = peaceMood;
                                    }
                                    let newTitle =DataHandler.realDairyList[resultsLength].title;
                                    let newBody = DataHandler.realDairyList[resultsLength].body;
                                    let ctime = new Date(DataHandler.realDairyList[resultsLength].time);
                                    let timeString = ''+ctime.getFullYear()+'年 '+ctime.getHours()+':'+ctime.getMinutes();
                                    let rValue = {
                                        diaryMood :newMoodIcon,
                                        diaryTime:timeString,
                                        diaryTitile:newTitle,
                                        diaryBody:newBody
                                    };
                                    resolve(rValue);
                                }else{
                                    let returnValue={
                                        diaryTime:'没有历史日记',
                                        diaryTitile:'没有历史日记',
                                        diaryBody:''
                                    };
                                    resolve(returnValue);
                                }
                            }
                        ).catch(
                            (error)=>{
                                console.log(error);
                            }
                        );
                    }
                ).catch(
                  (error)=>{
                      console.log('a error happends while read all the diary.');
                      console.log('error');
                      AsyncStorage.clear;
                      let aValue ={
                          diaryTime:'没有历史日记',
                          diaryTitile:'没有历史日记',
                          diaryBody:''
                      };
                      resolve(aValue);
                  }  
                );
            }
        );
    }
    static getPreviousDiary(){//请求上一篇日记数组处理函数
        if(DataHandler.listIndex===0){
            return null;
        }
        DataHandler.listIndex--;
        let resultsLength = DataHandler.listIndex;
        let newMoodIcon ;
        switch(DataHandler.realDairyList[resultsLength].mood){
            case 2:
                newMoodIcon = angryMood;
                break;
            case 3:
                newMoodIcon = sadMood;
                break;
            case 4:
                newMoodIcon = happyMood;
                break;
            case 5:
                newMoodIcon = miseryMood;
                break;
            default:
                newMoodIcon = peaceMood;    
        }
        let newTitle = DataHandler.realDairyList[resultsLength].title;
        let newBody = DataHandler.realDairyList[resultsLength].body;
        let ctime = new Date(DataHandler.realDairyList[resultsLength].time);
        let timeString = ''+ctime.getFullYear()+'年'+(ctime.getMonth()+1)+'月'+ctime.getDate()+'日 星期'+(ctime.getDay()+1)+' '+ctime.getHours()+':'+ctime.getMinutes();
        return {
            diaryMood:newMoodIcon,
            diaryTime:timeString,
            diaryTitile:newTitle,
            diaryBody:newBody
        }

    }
    static getNextDiary(){//请求下一篇日记数据的处理函数
        if(DataHandler.listIndex===(DataHandler.realDairyList.length-1)){
            return null;
        }
        DataHandler.listIndex++;
        let resultsLength  = DataHandler.listIndex;
        let newMoodIcon;
        switch(DataHandler.realDairyList[resultsLength].mood){
            case 2:
                newMoodIcon = angryMood;
                break;
            case 3:
                newMoodIcon = sadMood;
                break;
            case 4:
                newMoodIcon = happyMood;
                break;
            case 5:
                newMoodIcon = miseryMood;
                break;
            default:
                newMoodIcon = peaceMood;
        }
        let newTitle = DataHandler.realDairyList[resultsLength].title;
        let newBody = DataHandler.realDairyList[resultsLength].body;
        let ctime = new Date(DataHandler.realDairyList[resultsLength].time);
        let timeString  = ''+ ctime.getFullYear()+'年'+(ctime.getMonth()+1)+'月'+ctime.getDate()+'日  星期'+(ctime.getDay()+1)+'  '+ctime.getHours()+':'+ctime.getMinutes();
        return{
            diaryMood:newMoodIcon,
            diaryTime:timeString,
            diaryTitile:newTitle,
            diaryBody:newBody
        }
    }
    static saveDiary(newDiaryMood,newDiaryBody,newDiaryTitle){//保存日记数据
        return new Promise(function(resolve,reject){
            let currentTime=new Date();
            let timeString = ''+currentTime.getFullYear()+'年'+(currentTime.getMonth()+1)+'月'+currentTime.getDate()+'日 星期'+(currentTime.getDay+1) +'  '+currentTime.getHours+':'+currentTime.getMinutes();
            let aDiary = Object();
            aDiary.title = newDiaryTitle;
            aDiary.body = newDiaryBody;
            aDiary.mood = newDiaryMood;
            aDiary.time = currentTime;
            aDiary.sectionID = ''+currentTime.getFullYear()+' 年 '+(currentTime.getMonth()+1) + '月';
            //sectionID 用来对日记列表进行分段显示
            aDiary.index = Data.parse(currentTime);
            //从当前时间生成唯一值，用来索引日记列表，这个值精确到毫秒，可以认为他是唯一的。
            AsyncStorage.setItem(''+aDiary.index,JSON.stringify(aDiary)).then(
                ()=>{
                    let totalLength = DataHandler.realDairyList.length;
                    DataHandler.realDairyList[totalLength] = aDiary;
                    DataHandler.listIndex = totalLength;
                    let newMoodIcon;
                    switch(newDiaryMood){
                        case 2:
                            newMoodIcon = angryMood;
                            break;
                        case 3:
                            newMoodIcon = sadMood;
                            break;
                        case 4:
                            newMoodIcon = happyMood;
                            break;
                        case 5:
                            newMoodIcon = miseryMood;
                            break;
                        default:
                            newMoodIcon = peaceMood;
                    }
                    let aValue = {
                        uiCode:1,
                        diaryTime:timeString,
                        diaryTitle:newDiaryTitle,
                        diaryMood:newMoodIcon,
                        diayBody:newDiaryBody
                    };
                    resolve(aValue);
                }
            ).catch(
                (error)=>{
                    console.log('saving failed,error');
                }
            );
        });
    }
}