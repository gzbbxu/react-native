import React, { Component } from 'react';
import{
    Text,TextInput,TouchableOpacity,Image,StatusBar,ScrollView,ListView,Animated,Easing,Dimensions,findNodeHandle,TouchableWithoutFeedback,StyleSheet   
} from 'react-native';
const PubSub = require('pubsub-js');
import MCV from '../style/MCV';
export default class GranBackGroundView extends Component {
    constructor(props){
        super(props);
        this.refreshZindexHide=this.refreshZindexHide.bind(this);
        this.refreshZindexShow = this.refreshZindexShow.bind(this);
        PubSub.subscribe('refresBackViewShow', this.refreshZindexShow);
        PubSub.subscribe('refresBackViewHide', this.refreshZindexHide);
        this.state={
            isShow:true
        }
    }
    refreshZindexHide(){
        this.refs.backgrayview.setNativeProps({
            style: {
                zIndex: 0,
            }
        });
    }
    refreshZindexShow(){
        if(this.refs.backgrayview!==undefined){
            this.refs.backgrayview.setNativeProps({
                style: {
                    zIndex: 1,
                }
            });
        }
    }
    render(){
        return( 
            <Text style={[MCV.graybackground,{position:'absolute',top:0}]} ref = "backgrayview"></Text>
        );
    }
}