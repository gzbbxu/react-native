import { StyleSheet, Dimensions } from 'react-native';
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let textSize = 10;
let readingUITitleHeight = textSize * 6;
let diaryBodyLine = totalHeight / textSize - 6;
let returnButtonHeight = textSize * 5;
let TOP = StyleSheet.create({
    image:{
        height:36,
        width:36
    },
    image_circle:{
        height:40,
        width:40
    },
    topView_firstRow: {  
        top:20,         		//firstRow用来定义屏幕最上方显示按钮的View
        height:100,    
        flexDirection: 'row',
        width:totalWidth - 4,           	// margin设置为2，两边加起来就是4，所以宽度要减4
        justifyContent: 'center',	//使用这个键值，可以看到这一行里的三个按钮不论
        margin:2                          	//屏幕宽度是多少都会乖乖地排列好，感觉还是很省心的
    },
    jinzhu:{
        flexDirection:'row',

    },
    topView_Column:{
        height:40,
        flexDirection:'column',
        width:40,
        margin:10,
        justifyContent: 'center',
        alignItems:'center',
    },
    topView_nickName:{
        marginTop:20,
        justifyContent:'center',
        fontSize: textSize+2,
    },
    juese:{
        fontSize: textSize,
        color:'#F5FCFF',
        alignSelf:'center',
        marginTop:2
    },
    nickBackGround:{
        width:50,
        height:40
    },
    middle:{
        flexDirection:'row',
        justifyContent: 'center',	
        width:60,
        marginLeft:10,
        marginRight:10,
    },
    jinagjin_style:{
        flexDirection:'row',
        justifyContent:'center',
        height:50,
        resizeMode:'contain'
    },
    jinzhu_bg:{
        resizeMode:'contain',
        height:20,
        width:36
    },
    jiangjin_font:{
        fontSize: textSize,
        marginLeft:206,
        marginTop:-46
    },
    redPack:{
        fontSize: textSize,
        marginLeft:186,
        color:'red',
        marginTop:5
    }
});
export {TOP as default };