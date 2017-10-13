import React, { Component } from 'react';
import{
    View,Text,TextInput,TouchableOpacity,Image,StatusBar,ScrollView,ListView,Animated,Easing,StyleSheet
} from 'react-native';
import MCV from './MCV';
let angryMood = require('./img/favicon.png')
let bg1 = require('./img/BG1.png')
let t1 = require('./img/T1.png')
let t2 = require('./img/T2.png')
let t3 = require('./img/T3.png')
let t4 = require('./img/T4.png')
let t5 = require('./img/T5.png')
let t6 = require('./img/T6.png')
let t7 = require('./img/T7.png')
let t8 = require('./img/T8.png')
let t9 = require('./img/T9.png')
let t10 = require('./img/T10.png')
let t11 = require('./img/T11.png')
let t12 = require('./img/T12.png')
let t13 = require('./img/T13.png')
let t14 = require('./img/T14.png')
let t15 = require('./img/T15.png')
let t16 = require('./img/T16.png')
let t17 = require('./img/T17.png')
let t18 = require('./img/T18.png')
let t19 = require('./img/T19.png')
let t20 = require('./img/T20.png')
let t21 = require('./img/T21.png')
let t22 = require('./img/T22.png')
let t23 = require('./img/T23.png')
let t24 = require('./img/T24.png')
let t25 = require('./img/T25.png')
let t26 = require('./img/T26.png')
let t27 = require('./img/T27.png')

const ANIMATION_TYPES = {
    'Sliding Entrances': [
        'slideInDown',
        'slideInUp',
        'slideInLeft',
        'slideInRight',
      ]
};

import Bounceable from "./bounceable";
export default class ScrollList extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: true,
            anim1: new Animated.Value(0),
            anim2: new Animated.Value(0),
            compositeAnim: new Animated.Value(0),
            anim9: new Animated.Value(0),
        };
    }
    render(){
        console.log("render:"+this.props.listArray);
        return(
        <ScrollView
            horizontal={true}
        >
            <Image style={MCV.myViewRoot} source={bg1}>
               
            </Image>
            <View style={[styles.view1,{position:'absolute',top:20}]}>
                <Bounceable onPress={()=>{
                        Animated.spring(this.state.anim1, {
                        toValue: 1,   
                        velocity: 7,  
                        tension: -20, 
                        friction: 3,  
                        easing:Easing.inOut,
                        }).start();

                    }} style={
                        {
                            transform:[
                           {translateX:this.state.anim1.interpolate({
                               inputRange: [0, 1],
                               outputRange: [0, 100],
                           })},
                         {translateY:this.state.anim1.interpolate({
                                inputRange: [0, 1],
                                 outputRange: [0, 100],//相对
                           })},
                           {
                                scale: this.state.anim1.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 1.2],
                          })},
                         

                      ]
                        }
                    }>
                    <Animated.Image source={t1} style={MCV.image}/>
                </Bounceable>
                
                <Image source={t4} style={MCV.image}/>
            </View>
            <View style={[styles.view1,{position:'absolute',top:120}]}><Image source={t2} style={MCV.image}/><Image source={t5} style={MCV.image}/></View>
            <View style={[styles.view1,{position:'absolute',top:240}]}><Image source={t3} style={MCV.image}/><Image source={t6} style={MCV.image}/></View>
        </ScrollView>
        );
      }

}
let styles = StyleSheet.create({
    view1:{
        flex:1,
        flexDirection: 'row',
        marginLeft:10
    },
    view2:{
        backgroundColor: 'yellow',
        width:100
    },
    view3:{
        backgroundColor: 'red',
        width:100
    }
});