import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  Image
} from 'react-native';
import MCV from './MCV';
let default_img = require('./img/favicon.png');
export default class TopView extends Component {
    constructor(props){
        super(props);
        this.state={
            jinzhu:'',
            zhuchi:''
        }

    }
    render(){
        return(
            <View style={MCV.topView_firstRow}>
                <View style={MCV.jinzhu}>
                    <View style={MCV.topView_Column}>
                        <Image source={default_img}></Image>
                        <Text numberOfLines={1}>金主</Text>
                    </View>
                    <Text style={MCV.topView_nickName}>
                        詹姆斯豆
                    </Text>
                </View>
                <View>
                    <Text>总奖金</Text>
                </View>

                <View style={MCV.jinzhu}>
                    <Text style={MCV.topView_nickName}>
                        香香之城市
                    </Text>
                    <View style={MCV.topView_Column}>
                        <Image source={default_img}></Image>
                        <Text numberOfLines={1}>主持人</Text>
                    </View>
                </View>
            </View>
         
        );
    }

}