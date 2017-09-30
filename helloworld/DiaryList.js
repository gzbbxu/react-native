
import React, { Component } from 'react';
import{
    View,Text,TextInput,TouchableOpacity,Image,StatusBar
} from 'react-native';
import MCV from './MCV';
let angryMood = require('./img/favicon.png')
export default class DiaryList extends Component{
    constructor(props){
        super(props);
        this.updateSearchKeyWord = this.updateSearchKeyWord.bind(this);
    }
    updateSearchKeyWord(newText){
        this.props.searchKeyWord(newText);
        //将用户输入的搜索结果关键字交给上层,
    }
    render(){
        return(
            <View style = {MCV.container}>
                <StatusBar hidden={true}/>
                <View style={MCV.firstRow}>
                    <View style={{borderWidth:1}}>
                        <TextInput autoCapitalize="none" placeholder='输入搜索关键字' onChangeText={this.updateSearchKeyWord} style={MCV.searchBarTextInput}/>
                    </View>
                    <TouchableOpacity>
                        <Text style = {MCV.middleButton}>
                            写日记
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={MCV.diaryAbstractList}>
                    <View style={MCV.secondRow}>
                        <Image style={MCV.moodStyle}    source={angryMood}/>
                        <View style = {MCV.subViewInReader}>
                            <TouchableOpacity>
                                <Text style = {MCV.textInReader}>
                                    某变量记录假日记列表标题
                                </Text>
                            </TouchableOpacity>
                            <Text style={MCV.textInReader}>
                                    某变量记录日记列表时间
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}