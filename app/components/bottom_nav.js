import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  Image,TouchableOpacity,NetInfo,ArrayBuffer
} from 'react-native';
import { NativeModules } from 'react-native';
//底部 赞 送花  踩
let zan = require('../assets/img/icon_praise.png');
let flower = require('../assets/img/icon_flower.png');
let tread = require('../assets/img/icon_tread.png');
import BOTA from '../style/bottomNavStyle';
import NetUtil  from '../util/NetUtil';
import NetRequest from '../net/netrequest';
const PubSub = require('pubsub-js');
// let request_url = "http://configlist.ifreetalk.com/config/client/android/token.json";
let newRequest=new NetRequest();  
export default class BottomNavView extends Component{
    constructor(props){
        super(props);
      
        this.agreeWith=this.agreeWith.bind(this);
        this.sendFlow =this.sendFlow.bind(this);
        this.callback=this.callback.bind(this);
        PubSub.subscribe('sendflow', this.sendFlowResponse);
        PubSub.subscribe('agreeWith', this.agreeWithResponse);
    }
    sendFlowResponse(msg, data){
        //console.log("mySubscriber:msg:"+msg+":data:"+data);
        //updateUi
    }
    agreeWithResponse(msg,data){
        console.log("mySubscriber:agreeWithResponse:msg:"+msg+":data:"+data);
        // //updateUi
    }

   
    callback(str){
        console.log("response callback:"+str);
    }
    sendFlow(){
        //送花
        // console.log("送花");
        newRequest.test();
        newRequest.sendGetDeg2FriendsCountRQ(2332667);
        // NetRequest.sendGetDeg2FriendsCountRQ(2332667);
    }
    agreeWith(){
      
     // 网络请求
//    NetUtil.fetchRequest("token.json","get","").then(
//            (result)=>{
//                 console.log("fetchRequest success:"+result);
//            }
//        ).catch(
//             (error)=>{
//                 console.log("fetchRequest error:"+error);
//             }
//        )
       //var builder = ProtoBuf.loadProtoFile("./example.proto");
     /*  测试pb
       var basepb = require('./base_pb');  
       console.log("basePb1:"+basepb);
       var message = new basepb.SearchRequest();  
       console.log("basePb2:"+message);  

       message.setName("TS");  
       message.setPassword("123456");  
         
       var bytes = message.serializeBinary();  
       console.log("    :"+bytes);  
         
       var message2 = basepb.SearchRequest.deserializeBinary(bytes);  //Uint8Array
       console.log("basePb4:"+message2);  */
        newRequest.rnSendDeleteDeg2FrendRq(9999999,9999998);

    }
    render(){
        return(
            <View style={BOTA.container}>
                  <TouchableOpacity onPress={this.agreeWith}>
                    <View style={BOTA.item1} >
                        <Image source={zan} style={BOTA.img} >
                            
                        </Image>
                        <Text style={BOTA.tv} >赞</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.sendFlow}>
                    <View style={BOTA.item2}>
                        <Image source={flower} style={BOTA.img}>

                        </Image>
                        <Text style={BOTA.tv}>送花</Text>
                    </View>
                </TouchableOpacity>
                <View style={BOTA.item3}>
                    <Image source={tread} style={BOTA.img}>

                    </Image>
                    <Text style={BOTA.tv}>踩</Text>
                </View>
            </View>
        );
    }
}