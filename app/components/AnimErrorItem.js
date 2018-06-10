import React, { Component } from 'react';
import{
    Text,TextInput,TouchableOpacity,Image,StatusBar,ScrollView,ListView,Animated,Easing,TouchableWithoutFeedback,StyleSheet   
} from 'react-native';
import { View } from 'react-native-animatable';
import MCV from '../style/MCV';
let wrongImg = require('../assets/img/wrong.png')
export default class AnimErrorItem extends Component {
    constructor(props){
        super(props);
        this.state={
            isShowError:false,
            isShowRemind:false,
            animValue: new Animated.Value(1),
            currentValue: 1, //标志位
            fadeAnim: new Animated.Value(0)
        }
    }
    remindRef = null;
    handleRemindRef(ref){
        this.remindRef = ref;
    }
    touchRef = null;
    handleTouchRef(ref){
        this.touchref = ref;
    }
    wrongRef = null;
    handleWrongRef(ref){
        this.wrongRef = ref;
    }
    showRemindTimeAnim(){
        Animated.timing(this.state.animValue, {
            toValue: 0,
            duration: 100,
        }).start()
        this.timer2 && clearTimeout(this.timer2);
        this.timer2 = setTimeout(()=> {
            this.setState({isShowRemind:false,animValue: new Animated.Value(1)});
        }, 500);
    }
    handRowPressed(compenent,anim){
      this.setState({isShowError:true,isShowRemind:true});
      console.log("AnimErrorItem handRowPressed start");
      console.log("AnimErrorItem handlRowPressed end");
    //    compenent.setNativeProps({
    //         style: {
    //             zIndex: 0,
    //         }
    //     });

        compenent.animate("jello", 1500).then(() => {
           compenent.setNativeProps({
                style: {
                    zIndex: 0,
                },
            });
        });

        // compenent.setNativeProps({
        //     style: {
        //         zIndex: 0,
        //     }
        // });
        //淡出 淡
        if(this.wrongRef!==undefined){
            this.timer && clearTimeout(this.timer);
            this.timer = setTimeout(()=> {
                //wrong img 淡出
                // console.log("AnimErrorItem timeout1");
                this.wrongRef.animate("fadeOut", 1000).then(() => {
                    // this.wrongRef.setNativeProps({
                    //      style: {
                    //          zIndex: 0,
                    //      },
                    //  });
                 });
                 this.showRemindTimeAnim();
            }, 0);
        }

    }
    showError(){
        // if(!this.state.isShowError){
        //     return;
        // }
        return (
           <View  style={[{zIndex:1},{  opacity:0}]} ref={(ref)=>{
            this. handleWrongRef(ref);   
            }}> 
                <Image source={wrongImg} style={[MCV.wrongImg,{zIndex:1}]}>
                </Image>
            </View>
        );
    }
    showRemind(){
        if(!this.state.isShowRemind){
            return ;
        }
        return(
            <Animated.View  style={[MCV.remindView,{
                transform:[
                    {
                        translateY: this.state.animValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 20] //线性插值，0对应-100，1对应0
                        })
                    },
                ]
            }]} ref={(ref)=>{
                this.handleRemindRef(ref);
            }}>
                <Text style ={[MCV.remindSeconds]}>-1 经验</Text>
            </Animated.View>
        );
       
    }
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }
    generateTouchableWithoutFeedback(){
        return(
            <TouchableWithoutFeedback onPress={()=>{
                this.handRowPressed(this.touchref,this.props.anim);         
                }} level={1.1}>
                    <View  ref={(ref)=>{
                        this.handleTouchRef(ref);
                        }}>
                        <Image source={this.props.img}  style={MCV.image} >
                            {this.showError()}
                        </Image>
                       
                    </View>
        
        </TouchableWithoutFeedback>
        );
    }
    
    render(){
        console.log("AnimErrorItem render");
        return(
            <View style = {[MCV.myview,{position:'absolute',left:this.props.left,top:this.props.top}]} >
                {this.generateTouchableWithoutFeedback()}
                {this.showRemind()}
             </View>
        );
    }
}