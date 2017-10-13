import React, { Component } from 'react';
import{
    View,Text,TextInput,TouchableOpacity,Image,StatusBar,ScrollView,ListView,Animated,Easing
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
        <View style={MCV.myViewRoot}>
            <Image source={bg1} style={MCV.backgroundimg}/>
            
                <Animated.View style = {[MCV.myview,{position:'absolute',top:20},{
                    transform:[
                        {translateX:this.state.anim1.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 150],
                        })},
                        {translateY:this.state.anim1.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 150],//相对
                        })},
                        {
                            scale: this.state.anim1.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.2],
                        })},

                    ]
                }]}>
                  <Bounceable onPress={() => {
                    Animated.spring(this.state.anim1, {
                    toValue: 1,   
                    velocity: 7,  
                    tension: -20, 
                    friction: 3,  
                    easing:Easing.inOut,
                    }).start();
                }} level={1.1}><Image source={t1}  style={MCV.image}/></Bounceable>
                  <Text>1</Text>
                </Animated.View>
                 {/* 2 */}
                <Animated.View style = {[MCV.myview,{position:'absolute',top:150},{
                    transform:[
                        {translateX:this.state.anim2.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 150],
                        })},
                        {translateY:this.state.anim2.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 150],
                        })},
                      
                    ]
                }]}>
                    <Bounceable onPress={()=>{

                        {/* Animated.spring(this.state.anim2, {
                            toValue: 1,   
                            velocity: 7,  
                            tension: -20, 
                            friction: 3,  
                         }).start(); */}

                    }} level={1.1}><Image source={t2} style={MCV.image}/></Bounceable>
                    <Text>2</Text>
                </Animated.View>
                 {/* 3 */}
                <View style = {[MCV.myview,{position:'absolute',top:280}]}>
                    <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t3} style={MCV.image} /></Bounceable>
                    <Text>3</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:20,left:150}]}>
                    <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t4} style={MCV.image} /></Bounceable>
                    <Text>4</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:150,left:150}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t5}  style={MCV.image}/></Bounceable>
                     <Text>5</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:280,left:150}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t6} style={MCV.image} /></Bounceable>
                     <Text>6</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:20,left:280}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t7} style={MCV.image} /></Bounceable>
                     <Text>7</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:150,left:280}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t8}  style={MCV.image}/></Bounceable>
                     <Text>8</Text>
                </View>

                {/* <Animated.View style = {[MCV.myview,{position:'absolute',top:280,left:280 }, ]} >
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t9}  style={MCV.image}/></Bounceable>
                     <Text>9</Text>
                </Animated.View> */}


                <Animated.View style = {[MCV.myview,{position:'absolute',top:280,left:280},{
                    transform:[
                        {translateX:this.state.anim9.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -150],
                        })},
                        {translateY:this.state.anim9.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -150],
                        })},
                        
                        {
                            scale: this.state.anim9.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 1.2],
                        })},


                    ]
                }]}>
                  <Bounceable onPress={() => {
                    Animated.spring(this.state.anim9, {
                    toValue: 1,   
                    velocity: 7,  
                    tension: -20, 
                    friction: 3,  
                    }).start();
                }} level={1.1}><Image source={t9}  style={MCV.image}/></Bounceable>
                  <Text>9</Text>
                </Animated.View>


                <View style = {[MCV.myview,{position:'absolute',top:20,left:410}]}>
                    <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t10} style={MCV.image} /></Bounceable>
                    <Text>10</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:150,left:410}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t11} style={MCV.image} /></Bounceable>
                     <Text>11</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:280,left:410}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t12} style={MCV.image} /></Bounceable>
                     <Text>12</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:20,left:540}]}>
                    <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t13} style={MCV.image} /></Bounceable>
                    <Text>13</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:150,left:540}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t14} style={MCV.image} /></Bounceable>
                     <Text>14</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:280,left:540}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t15} style={MCV.image} /></Bounceable>
                     <Text>15</Text>
                </View>


                <View style = {[MCV.myview,{position:'absolute',top:20,left:670}]}>
                    <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t16} style={MCV.image} /></Bounceable>
                    <Text>16</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:150,left:670}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t17} style={MCV.image} /></Bounceable>
                     <Text>17</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:280,left:670}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t18} style={MCV.image} /></Bounceable>
                     <Text>18</Text>
                </View>


                <View style = {[MCV.myview,{position:'absolute',top:20,left:800}]}>
                    <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t19} style={MCV.image} /></Bounceable>
                    <Text>19</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:150,left:800}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t20}  style={MCV.image} /></Bounceable>
                     <Text>20</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:280,left:800}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t21} style={MCV.image} /></Bounceable>
                     <Text>21</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:20,left:930}]}>
                    <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t22} style={MCV.image} /></Bounceable>
                    <Text>22</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:150,left:930}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t23} style={MCV.image} /></Bounceable>
                     <Text>23</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:280,left:930}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t24} style={MCV.image} /></Bounceable>
                     <Text>24</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:20,left:1060}]}>
                    <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t25} style={MCV.image} /></Bounceable>
                    <Text>25</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:150,left:1060}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t26} style={MCV.image} /></Bounceable>
                     <Text>26</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:280,left:1060}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t27} style={MCV.image} /></Bounceable>
                     <Text>27</Text>
                </View>

                
                <View style = {[MCV.myview,{position:'absolute',top:20,left:1190}]}>
                    <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t27} style={MCV.image} /></Bounceable>
                    <Text>28</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:150,left:1190}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t27} style={MCV.image} /></Bounceable>
                     <Text>29</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:280,left:1190}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t27} style={MCV.image} /></Bounceable>
                     <Text>30</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:20,left:1320}]}>
                    <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t27} style={MCV.image} /></Bounceable>
                    <Text>28</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:150,left:1320}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t27} style={MCV.image} /></Bounceable>
                     <Text>29</Text>
                </View>

                <View style = {[MCV.myview,{position:'absolute',top:280,left:1320}]}>
                     <Bounceable onPress={()=>console.log("pressed!")} level={1.1}><Image source={t27} style={MCV.image} /></Bounceable>
                     <Text>30</Text>
                </View>
          
        </View>
        </ScrollView>
        );
      }

}