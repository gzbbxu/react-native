import React, { Component } from 'react';
import {
  View,Text,TextInput,TouchableOpacity,Image,StatusBar
} from 'react-native';
let angryMood = require('./img/favicon.png')
import MCV from './MCV';
export default class DiaryReader extends Component{
    render(){
        return (
            <View style = {MCV.container}>
                <StatusBar hidden={true}/> 
                <View style = {MCV.firstRow}>
                    <TouchableOpacity onPress={this.props.returnPress}>
                        <Text style = {MCV.middleButton}>
                            返回
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.readingPreviousPressed}>
                        <Text style = {MCV.middleButton}>
                            上一篇
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.readingNextPressed}>
                        <Text style = {MCV.middleButton}>
                            下一篇
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style = {MCV.secondRow}>
                    <Image style={MCV.moodStyle} source={this.props.diaryMood}/>
                    <View style = {MCV.subViewInReader}>
                        <Text style = {MCV.textInReader}>
                            {this.props.diaryTitle}
                        </Text>
                        <Text style = {MCV.textInReader}>
                            {this.props.diaryTime}
                        </Text>
                    </View>
                </View>
                 <TextInput style = {[MCV.diaryBodyStyle,{color:'black'}]} multiline={true} editable={false} value = {this.props.diaryBody}/>

            </View>
           
        );
    }
}