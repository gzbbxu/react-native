import React, { Component } from 'react';
import{
    View,Text,TextInput,TouchableOpacity,StatusBar,Alert
} from 'react-native';
import MCV from './MCV';
export default class DiaryWriter extends Component{
    returnPressed(){
        Alert('请确认','你确定要退回日记吗？',[{text:'确定'},{text:'取消'}]);
    }
    render(){
        return (
            <View style = {MCV.container}>
                <StatusBar hidden={true}/>
                <View style = {MCV.firstRow}>
                    <TouchableOpacity onPress = {this.returnPressed}>
                        <Text style={MCV.smallButton}>
                            返回
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}