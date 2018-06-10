import React, { Component } from 'react';
import{
    Text,TextInput,TouchableOpacity,Image,StatusBar,ScrollView,ListView,Animated,Easing,Dimensions,findNodeHandle,TouchableWithoutFeedback,StyleSheet   
} from 'react-native';
import MCV from '../style/MCV';
import { UIManager} from 'NativeModules'; 
let angryMood = require('../assets/img/favicon.png')
let bg1 = require('../assets/img/BG1.png')
let t1 = require('../assets/img/T1.png')
let t2 = require('../assets/img/T2.png')
let t3 = require('../assets/img/T3.png')
let t4 = require('../assets/img/T4.png')
let t5 = require('../assets/img/T5.png')
let t6 = require('../assets/img/T6.png')
let t7 = require('../assets/img/T7.png')
let t8 = require('../assets/img/T8.png')
let t9 = require('../assets/img/T9.png')
let t10 = require('../assets/img/T10.png')
let t11 = require('../assets/img/T11.png')
let t12 = require('../assets/img/T12.png')
let t13 = require('../assets/img/T13.png')
let t14 = require('../assets/img/T14.png')
let t15 = require('../assets/img/T15.png')
let t16 = require('../assets/img/T16.png')
let t17 = require('../assets/img/T17.png')
let t18 = require('../assets/img/T18.png')
let t19 = require('../assets/img/T19.png')
let t20 = require('../assets/img/T20.png')
let t21 = require('../assets/img/T21.png')
let t22 = require('../assets/img/T22.png')
let t23 = require('../assets/img/T23.png')
let t24 = require('../assets/img/T24.png')
let t25 = require('../assets/img/T25.png')
let t26 = require('../assets/img/T26.png')
let t27 = require('../assets/img/T27.png')
let t28 = require('../assets/img/T28.png')
let t29 = require('../assets/img/T29.png')
let t30 = require('../assets/img/T30.png')
let t31 = require('../assets/img/T31.png')
let t32 = require('../assets/img/T32.png')
let t33 = require('../assets/img/T33.png')
let imgs = [];
imgs.push(t1);
imgs.push(t2);
imgs.push(t3);
imgs.push(t4);
imgs.push(t5);
imgs.push(t6);
imgs.push(t7);
imgs.push(t8);
imgs.push(t9);
imgs.push(t10);
imgs.push(t11);
imgs.push(t12);
imgs.push(t13);
imgs.push(t14);
imgs.push(t15);
imgs.push(t16);
imgs.push(t17);
imgs.push(t18);
imgs.push(t19);
imgs.push(t20);
imgs.push(t21);
imgs.push(t22);
imgs.push(t23);
imgs.push(t24);
imgs.push(t25);
imgs.push(t26);
imgs.push(t27);
imgs.push(t28);
imgs.push(t29);
imgs.push(t30);
imgs.push(t31);
imgs.push(t32);
imgs.push(t33);
const ANIMATION_TYPES = {
    'Sliding Entrances': [
        'slideInDown',
        'slideInUp',
        'slideInLeft',
        'slideInRight',
      ]
};
import { View } from 'react-native-animatable';
// import Bounceable from "./bounceable";
let scrollx =0;

let isShowGrayBack=false;
let animableMap=new Map();//int,boolean 表示 可以执行动画的map
import AnimRightView from './AnimRightItem';
import AnimErrorItem from './AnimErrorItem';
import BackGroundView from './GrayBackGround';

let animMap = new Map();
let xPositon=   [0,0,   0, 150,150,150,280,280,280,410,410,410,540,540,540,670,670,670,800,800,800,930,930,930,1060,1060,1060,1190,1190,1190,1320,1320,1320];//1-33
let yPosition = [0,110,200,0,  80,180,0  ,150,220,0  ,100,200,0  ,100,200,0,100,200,0,100,200,0,100,200,0,100,200,0,100,200,0,100,200];//1-33

export default class ScrollList extends Component{

    constructor(props){
        super(props);
        this.stopCall = this.stopCall.bind(this);
        animableMap.set(1,true);
        animableMap.set(2,true);
        animableMap.set(3,true);
        animableMap.set(4,true);
        animableMap.set(18,true);
        for(let i=1;i<=33;i++){
            animMap.set(i,new Animated.Value(0) );
        }
    }
    stopCall(){
        
    }
  
    backgroundGrayFun(){
        return (
            <Text style={[MCV.graybackground,{position:'absolute',top:0}]} ref = "backgrayview"></Text>
        );
    }
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
        this.timer2 && clearTimeout(this.timer2);
    }
    setBackGroundGrayFun(){
        if(isShowGrayBack){
            this.refs.backgrayview.setNativeProps({
                style: {
                    zIndex: 0,
                }
            });
        }
        isShowGrayBack =false;
    }
 

    render(){
        var views =[];
        for(var i = 0;i<33;i++){
            if(animableMap.get(i+1)){
                views.push(
                    <AnimRightView left={xPositon[i]} top={yPosition[i]} anim={animMap.get(i+1)} img={imgs[i]}>

                    </AnimRightView>
                );
            }else{
                views.push(
                 
                    <AnimErrorItem left={xPositon[i]} top={yPosition[i]} anim={animMap.get(i+1)} img={imgs[i]}>

                    </AnimErrorItem>
                );
            }
           
        }
        return(
        <ScrollView
            horizontal={true} 
        >
        <View style={MCV.myViewRoot}>
            <BackGroundView/>
            <Image source={bg1} style={MCV.backgroundimg}/>
                {views}
        </View>
        </ScrollView>
        );
      }

}