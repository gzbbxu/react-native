import React,{
    Component
} from 'react';
import{
    StyleSheet,View,Text
} from 'react-native';
import NaviBar from './NaviBar';
export default class Page3 extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            inputedNum:'',
            inputedPW:''
        };
        this.onNaviBarPress= this.onNaviBarPress.bind(this);
        //不同的page，需要对应修改下面这个数组
        this.naviStatus=[0,0,1,0];
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
               
                return;
            case 3:
                this.props.navigation.replace({name:'Page4'});
                return;
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <NaviBar naviBarStatus={this.naviStatus} onNaviBarPress={this.onNaviBarPress}/>
                <View style={styles.whatLeft}>
                    <Text>
                        栏目三内容
                        
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