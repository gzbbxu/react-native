import React,{
    Component
} from 'react';
import{
    StyleSheet,View,Text
} from 'react-native';
import NaviBar from './NaviBar';
export default class Page4 extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            inputedNum:'',
            inputedPW:''
        };
        this.onNaviBarPress= this.onNaviBarPress.bind(this);
        //不同的page，需要对应修改下面这个数组
        this.naviStatus=[0,0,0,1];
    }
    onNaviBarPress(aNumber){
        switch(aNumber){
            case 0:
               this.props.navigation.replace({name:'Page1'});
                return; 
            case 1:
                this.props.navigation.replace({name:'Page2'});
                return;
            case 2:
                this.props.navigation.replace({name:'Page3'});
                return;
            case 3:
                return;
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <NaviBar naviBarStatus={this.naviStatus} onNaviBarPress={this.onNaviBarPress}/>
                <View style={styles.whatLeft}>
                    <Text>
                        栏目四内容放大所
                    </Text>
                </View>
            </View>
        );
    }
  
}
var styles = StyleSheet.create({
    container:{
        flex:1,
    },
    whatLeft:{
        flex:1,
        borderTopWidth:1,
        borderColor:'black',
    }
});