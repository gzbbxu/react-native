import React, { Component } from 'react';
import { NativeModules,DeviceEventEmitter } from 'react-native';
const PubSub = require('pubsub-js');
export default class FindSomeHandler{
   constructor(){
       DeviceEventEmitter.addListener('onProcess',this.onProcess.bind(this));
   }
     sendGetDeg2FriendsCountRQ(userid){
        var getDeg2FriendsCountRq =  require('../pb/GetDeg2FriendsCountRQ_pb');
        var getDeg2FriendsCountMsg = new getDeg2FriendsCountRq.GetDeg2FriendsCountRQ();
        getDeg2FriendsCountMsg.setUserId(userid);
        var bytes = getDeg2FriendsCountMsg.serializeBinary();
        var array=new Array();// Uint8Array
        for(var i=0;i<bytes.length;i++){
            array[i] = bytes[i];
        }  
        var exampleInter = NativeModules.example;
        
        exampleInter.FlowerClick(array);//object Uint8Array  unsin  g 8 byte
        
        // var message2 = getDeg2FriendsCountRq.GetDeg2FriendsCountRQ.deserializeBinary(bytes);  
        // console.log("sendGetDeg2FriendsCountRQ resp:"+message2);
    }
    rnSendDeleteDeg2FrendRq(userid,peerid){
        var friendshape =  require('../pb/friendshapeRQ_pb');
        var DeleteDeg2FriendRQMsg = new friendshape.DeleteDeg2FriendRQ();
        DeleteDeg2FriendRQMsg.setUserId(userid);
        DeleteDeg2FriendRQMsg.setPeerId(peerid);
        var bytes = DeleteDeg2FriendRQMsg.serializeBinary();  
        var myArray=new Array();// Uint8Array
       
        for(var i=0;i<bytes.length;i++){
            myArray[i] = bytes[i];
        }
        var message2 = friendshape.DeleteDeg2FriendRQ.deserializeBinary(bytes);  
        var exampleInter = NativeModules.example;
    
        exampleInter.HandleMessage(99,myArray);//object Uint8Array  unsing 8 byte
    }
    onProcess(map){
        if(map.packtype===3113){
            var friendRS = require('../pb/friendshapeRS_pb');
            let array = new Uint8Array(map.data);
            var message2 = friendRS.DeleteDeg2FriendRS.deserializeBinary(array);
            // console.log("onProcess map message2 :"+message2.getErrInfo().getErrCode());  
            
            PubSub.publish('agreeWith', message2);
        }else if(map.packtype===3134){
            var getDeg2FriendsCountRs =  require('../pb/GetDeg2FriendsCountRS_pb');
            let array = new Uint8Array(map.data);
            var message2 = getDeg2FriendsCountRs.GetDeg2FriendsCountRS.deserializeBinary(array);  
            PubSub.publish('sendflow', message2);
        }
       
    }
    test(){
        var protobuf = require("protobufjs");
        var builder = protobuf.newBuilder();
        var filePath  = "../pb/friendshapeRQ.proto";
        protobuf.protoFromFile(filePath, builder);
    }
    
}