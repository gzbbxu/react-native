import React, { Component } from 'react';
import{
    Text,TextInput,TouchableOpacity,Image,StatusBar,ScrollView,ListView,Animated,Easing,Dimensions,findNodeHandle,TouchableWithoutFeedback,StyleSheet   
} from 'react-native';
import MCV from '../style/MCV';
import { UIManager} from 'NativeModules'; 
import { View } from 'react-native-animatable';
var Frameanim = require('./frameanim');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let centerx =totalWidth/2;
let centery =(totalHeight*0.5);
import Animation from 'lottie-react-native';
//正确的view动画
export default class AnimRightItem extends Component {
    constructor(props){
        super(props);
        this.handRowPressed = this.handRowPressed.bind(this);
        this.state = {
            leftX:0,
            topY:0,
            isShow:true,
            isShowFrame:false,
            progress: new Animated.Value(0),
        };
    }
    touchRef = null;
    handleTouchRef(ref){
        this.touchref = ref;
        // touchableWithoutFeedbackRefMap.set(position,ref);
        //  console.log("UIManager handleRef:"+position);
        // touchableWithoutFeedbackRefMap.
    }

    frameRef = null;
    handleFrameRef(ref){
        this.frameRef = ref;
    }

    animref = null;
    animalViewRef(ref){
      this.animref = ref;
        // animalViewMap.set(position,ref);
    }

    handRowPressed(compenent,animalViewCom,anim){
        console.log("UIManager handRowPressed:"+compenent+":anim:"+anim);
        if(animalViewCom===undefined){
            return;
        }
        // if(this.refs.backgrayview!==undefined&&!isShowGrayBack){
        //     this.refs.backgrayview.setNativeProps({
        //         style: {
        //             zIndex: 1,
        //         }
        //     });
        // }
        PubSub.publish('refresBackViewShow', '');
        const handle = findNodeHandle(animalViewCom);
        UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
            console.log("UIManager x:"+x+":y:"+y+":pageX:"+pageX+":pageY:"+pageY+":centerX-leftX:"+(centerx-pageX-50/2)+":centerY:"+centery+":centerY-topY:"+(centery-pageY));
             this.setState({leftX:(pageX+50/2),topY:(pageY+130/2),isShowFrame:true});
             
        });
        //父view 设置zindex
        animalViewCom.setNativeProps({
            style: {
                zIndex: 2,
            },
        });

        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(()=> {
            console.log("UIManager setTimeout");
            Animated.spring(anim, {
            toValue: 1,   
            velocity: 7,  
            tension: -20, 
            friction: 3,  
            easing:Easing.linear,
            }).start();


            if(this.frameRef!=null){
                Animated.timing(this.state.progress, {
                    toValue: 1,
                    duration: 5000,
                  }).start();

                console.log("AnimRightItem  frameRef fadeIn");
                this.frameRef.animate("fadeIn", 1000).then(() => {
                    this.frameRef.setNativeProps({
                         style: {
                             zIndex: 1,
                         },
                     });
                 });
            }
      
        }, 500);

        this.timer2 && clearTimeout(this.timer2);
        this.timer2 = setTimeout(()=>{
            isShowGrayBack =true;
            //动画结束了
            //隐藏灰色 隐藏 此view
            animalViewCom.setNativeProps({
                style: {
                    zIndex: -1,
                },
            });
            // console.log("UIManager setTimeout2 zindex0:"+position);
            // showViews.push(position);
            // mymap.set(position,true);
            
             this.setState({leftX:this.state.leftX,isShow:false});
            PubSub.publish('refresBackViewHide', '');
        },2000);
        
    }

    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
        this.timer2 && clearTimeout(this.timer2);
    }
    componentDidMount() {
        // console.log("componentDidMount");
      
      }
    
    showFrame(){
            // 原生帧动画
            // return (
            //     <View style = {MCV.frameView} ref={(ref)=>{
            //             this.handleFrameRef(ref);
            //     }}>
            //         <Frameanim style={MCV.frameAnimal} action = 'start' frameAnimFile = 'hotel_tts_frame' oneshot = {false}></Frameanim>
            //     </View>     
            // );
            // if(!this.state.isShowFrame){
            //     return;
            // }
            return (
            <View  style = {MCV.frameView} ref={(ref)=>{
                    this.handleFrameRef(ref);
            }}>
                <Animation
                    style={MCV.frameAnimal}
                    source={require('../assets/animation/ce.json')}
                    progress={this.state.progress}
            />
          </View>
        );
   
    }
    generateTouchableWithoutFeedback(){
  
        if(!this.state.isShow){
            console.log("Frameanim gender2..");
            return ;
        }
      
        return(
            <TouchableWithoutFeedback onPress={()=>{
                this.handRowPressed(this.touchref,this.animref,this.props.anim);         
                }} level={1.1}>
                   
                    <View  ref={(ref)=>{
                        this.handleTouchRef(ref);
                        }}>
                        
                        <Image source={this.props.img}  style={MCV.image} >
                        {this.showFrame()}
                     
                        </Image>
                     
                    </View>
        
        </TouchableWithoutFeedback>
        );
    }
    render(){
        return(
            <Animated.View style = {[MCV.myview,{position:'absolute',left:this.props.left,top:this.props.top},{
                transform:[
                    {translateX:this.props.anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, centerx-this.state.leftX],
                    })},
                    {translateY:this.props.anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, centery-this.state.topY],//相对
                    })},
                    {
                        scale: this.props.anim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.4],
                    })},

                ]
            }]}   ref={(ref)=>{
                this.animalViewRef(ref);
            }}>
                {this.generateTouchableWithoutFeedback()}
        
            </Animated.View>
        );
    }
}