import React,{Compontent} from 'react';
import{
  AppRegistry,StyleSheet,Text,View,Dimensions,TextInput
}from 'react-native';
let widthOfMargin = Dimensions.get("window").width*0.05;

export default class LoginLeaf extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          inputNum:'',
          inputPwd:''
        };
        this.updatePw=this.updatePw.bind(this);
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
        <Text style={styles.bigTextPrompt}>
          确定
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
