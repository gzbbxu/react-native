import React,{
    Component
} from 'react';
import{
    StyleSheet,Text,View,TouchableHighlight,Dimensions
}from 'react-native'


export default class NaviBar extends Component{
    constructor(props){
         super(props);
        this._naviTab0Pressed = this._naviTab0Pressed.bind(this);
        this._naviTab1Pressed = this._naviTab1Pressed.bind(this);
        this._naviTab2Pressed = this._naviTab2Pressed.bind(this);
        this._naviTab3Pressed = this._naviTab3Pressed.bind(this);

    }
    componentWillMount(){
        this.buttonColors = this.props.naviBarStatus.map(
            function(aNumber){
                if(aNumber==0){
                    return 'white';
                }else {
                    return 'gray';
                }
            }
        );
    }
    _naviTab0Pressed(){
        this.props.onNaviBarPress(0);
    }
    _naviTab1Pressed(){
        this.props.onNaviBarPress(1);
    }
    _naviTab2Pressed(){
        this.props.onNaviBarPress(2);
    }
    _naviTab3Pressed(){
        this.props.onNaviBarPress(3);
    }
    render(){
        return(
            <View style={styles.naviRow}>
                <TouchableHighlight  onPress={this._naviTab0Pressed}>
                    <View style ={[styles.button,{backgroundColor:this.buttonColors[0]}]}>
                        <Text style={styles.testStyle1}>
                            栏目1
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight  onPress={this._naviTab1Pressed}>
                    <View style ={[styles.button,{backgroundColor:this.buttonColors[1]}]}>
                        <Text style={styles.testStyle1}>
                            栏目2
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight  onPress={this._naviTab2Pressed}>
                    <View style ={[styles.button,{backgroundColor:this.buttonColors[2]}]}>
                        <Text style={styles.testStyle1}>
                            栏目3
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight  onPress={this._naviTab3Pressed}>
                    <View style ={[styles.button,{backgroundColor:this.buttonColors[3]}]}>
                        <Text style={styles.testStyle1}>
                            栏目4
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

        );
    }
}
NaviBar.PropTypes={
    // PropTypes.arrayOf(SomeClass)
    
    // instead of
    
    // PropTypes.arrayOf(PropTypes.instanceOf(SomeClass))
    naviBarStatus:React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
    // naviBarStatus:React.PropTypes.arrayOf(React.PropTypes.instanceOf(number)).isRequired,
    onNaviBarPress:React.PropTypes.func.isRequired,
  
}
let totalWidth = Dimensions.get('window').width;
let naviButtonWidth = totalWidth/4;
let naviButtonHeight = naviButtonWidth*0.75;
var styles = StyleSheet.create({

    naviRow:{
        flexDirection:'row',
    },
    button:{
        width:naviButtonWidth,
        height:naviButtonHeight,
        justifyContent:'center'
    },
    testStyle1:{
        fontSize:20,
        textAlign:'center',
    }
});
