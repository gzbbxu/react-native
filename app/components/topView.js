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

import TOP from '../style/TOP';
let default_img = require('../assets/img/favicon.png');
let jinzhu_img = require('../assets/img/friend_red_pack_icon.png');
let jinzhu_circle_img = require('../assets/img/crazy_unstart_user_bg.png');
let nick_back_img = require('../assets/img/crazy_start_bg.png');
let jiangjin_img = require('../assets/img/new_game_start_rewad_bg.png');
let host_bg = require('../assets/img/crazy_host_bg.png');
export default class TopView extends Component {
    constructor(props){
        super(props);
        this.state={
            jinzhu:'',
            zhuchi:''
        }

    }
    render(){
        // <Text numberOfLines={1} style={TOP.juese}>金主</Text>
        // <Text style={[TOP.jiangjin_font,{positon:"absolute",zIndex:11}]}>1234567890</Text>
      
        return(
            <View style={TOP.topView_firstRow}>
                <View style={TOP.jinzhu}>
                    <View style={TOP.topView_Column}>
                        <View>
                            <Image source={jinzhu_circle_img }style={TOP.image_circle}></Image>
                            <Image source={jinzhu_img} style={[TOP.image,{position:"absolute",top:2,left:2}]} ></Image>
                        </View>
                        <View>
                            <Image source={host_bg} style={TOP.jinzhu_bg}>
                                <Text numberOfLines={1} style={TOP.juese}>银主</Text>
                            </Image>
                           
                        </View>
                       
                    </View>
                    <View>
                        <Text style={TOP.topView_nickName}>
                                周大哥2
                        </Text>
                      
                    </View>
                    
                </View>

                <View style={TOP.middle}>
                    <View >
                  
                        <Image source={jiangjin_img} style={TOP.jinagjin_style}></Image>
                        <Text style={[TOP.jiangjin_font,{zIndex:11}]}>总奖金</Text>
                        <Text style={[TOP.redPack,{zIndex:11}]}>本轮红包14000个</Text>
                    </View>
                  
                </View>

                <View style={TOP.jinzhu}>
                    <Text style={TOP.topView_nickName}>
                        香香之城
                    </Text>
                    <View style={TOP.topView_Column}>
                        <View>
                            <Image source={jinzhu_circle_img }style={TOP.image_circle}></Image>
                            <Image source={jinzhu_img} style={[TOP.image,{position:"absolute",top:2,left:2}]} ></Image>
                        </View>
                      
                        <View>
                            <Image source={host_bg} style={TOP.jinzhu_bg}>
                                <Text numberOfLines={1} style={TOP.juese}>主持人</Text>
                            </Image>
                           
                        </View>
                    </View>
                </View>
            </View>
         
        );
    }

}