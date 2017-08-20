import React,{Component} from 'react';
import{
    StyleSheet,Text,View
}from 'react-native';
export default class WaitingLeaf extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                    <Text style={styles.textPromptStyle}>
                        登陆使用的手机号:{this.props.phoneNumber}
                    </Text>
                    <Text style={styles.textPromptStyle}>
                        登陆使用的密码:{this.props.userPW}
                    </Text>
                    <Text style={styles.bigTexPrompt} onPress={()=>this.onGoBackPressed()}></Text>
            </View>
        );
    }
    onGoBackPressed(){
        this.props.navigator.pop();
    }
}
let styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#F5FCFF'
        },
        textPromptStyle:{
            fontSize:20
        },
        bigTexPrompt:{
            width:300,
            backgroundColor:'gray',
            color:'white',
            textAlign:'center',
            fontSize:60
        }
    }
);