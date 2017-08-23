import React,{Component} from 'react';
import{
  AppRegistry,StyleSheet,Text,View,Dimensions,TextInput,Alert,NativeModules,DeviceEventEmitter
}from 'react-native';

let widthOfMargin = Dimensions.get("window").width*0.05;

export default class LoginLeaf extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          inputNum:'',
          inputPwd:'',
          otherMsg:''
        };
        this.updatePw=this.updatePw.bind(this);
        this.jumpoWaiting =this.jumpoWaiting.bind(this);
   }
  updatePw(newText){
    this.setState(()=>{
        return{
          inputPwd:newText,
        };
      }
    );
  }

  updateNum(newText){
     this.setState(()=>{
         return{
           inputNum:newText,
          };
      }
    );
  }
  userPressConfirm(){
 
    Alert.alert('提示','确定使用'+this.state.inputNum+'号码登陆吗?',[{
        text:'取消',onPress:(()=>{}),style:'cancel'
    },{
        text:'确定',onPress:this.jumpoWaiting
    }]);
  }
  userPressAddressBook(){
    // 回掉函数
    /*DeviceEventEmitter.addListener('AndroidToRNMessage',this.handleAndridMessage.bind(this));
    var {NaiveModules} = require('react-native');
    let ExampleInterface = NativeModules.ExampleInterface;
    NativeModules.ExampleInterface.HandleMessage('testMessage');*/
    var {NaiveModules} = require('react-native');
    let ExampleInterface = NativeModules.ExampleInterface;
    NativeModules.ExampleInterface.HandleMessage('testMessage').then(
        (reult)=>{
            console.log('ok');
            this.setState(()=>{
              return{
                otherMsg:reult,
              };
            });
        }
    ).catch(
      (error)=>{
        console.log(error);//打印异常信息
        console.log(error.message);//打印android 异常信息
        console.log(error.code);//打印自己提供的异常
      }
    );
  }
  handleAndridMessage(aMessage){
      console.log('handleAndridMessage:'+aMessage);
      this.setState(()=>{
        return{
          otherMsg:aMessage,
        };
      });
  }
  jumpoWaiting(){
   this.props.navigator.push(
      {
        phoneNumber:this.state.inputNum,
        userPW:this.state.inputPwd,
        name:'waiting',
      }
    );
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput 
        
          placeholder={'请输入手机号'}
           onChangeText={
            (newText)=>this.updateNum(newText)
          } 
        />
        <Text style={styles.textPromptStyle}>
          您输入的手机号:{this.state.inputNum}
        </Text>
        <TextInput style={styles.textInputStyle}
          secureTextEntry={true}
          placeholder={'请输入密码'}
          onChangeText={this.updatePw}
        />
        <Text style={styles.bigTextPrompt}
              onPress={()=>this.userPressConfirm()}>
          确定
        </Text>
        <Text style={styles.bigTextPrompt}
              onPress={()=>this.userPressAddressBook()}>
          原生通信
        </Text>
        <Text style={styles.textPromptStyle}>
          原生通信返回的信息:{this.state.otherMsg}
        </Text>
      </View>
    );
  }
}

let styles= StyleSheet.create(
  {
    container:{
      flex:1,
      backgroundColor:'white'
    },
    textInputStyle:{
      margin:widthOfMargin,
      fontSize:20,
      backgroundColor:'gray'
    },
    textPromptStyle:{
      margin:widthOfMargin,
      fontSize:20
    },
    bigTextPrompt:{
      margin:widthOfMargin,
      backgroundColor:'gray',
      color:'white',
      textAlign:'center',
      fontSize:30
    }

  }
);
