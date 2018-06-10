import { StyleSheet, Dimensions } from 'react-native';
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let textSize = 15;
let readingUITitleHeight = textSize * 6;
let diaryBodyLine = totalHeight / textSize - 6;
let returnButtonHeight = textSize * 5;
let TOPA = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height:30,
        backgroundColor:'#D198F4'
    },
    backimg:{
        width:25,
        height:25,
        resizeMode:'contain',
        alignSelf:'center',
    },
    tv:{
        alignSelf:'center',
        color:'white',
        fontSize: textSize,
    },
    onLineImg:{
        width:25,
        height:25
    },
    lv:{
        marginRight:70
    },
    rightView:{
        flexDirection:'column'
    },
    rightViewTop:{
        flexDirection:'row'
    },
    rightok:{
        width:14,
        height:14,
        resizeMode:'contain',
    },
    smallTv:{
        fontSize:textSize-4,
        color:'white'
    }
});
export { TOPA as default };