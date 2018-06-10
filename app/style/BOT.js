import { StyleSheet, Dimensions } from 'react-native';
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let textSize = 12;
let readingUITitleHeight = textSize * 6;
let diaryBodyLine = totalHeight / textSize - 6;
let returnButtonHeight = textSize * 5;
let BOT = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height:100,
    },
    item1:{
    },
    item2:{
        
    },
    item3:{

    },
    item4:{
    },
    lv_item:{
        flexDirection: 'row',
        height:25,
    },
    lv_item_people_img:{
        resizeMode:'contain',
        height:25,
        width:25
    },
    lv_item_view:{
        alignSelf:'center',
        marginTop:2,
        flexDirection:'row'
    },
    lv_item_tv:{
        fontSize: textSize,
       
    },
    lv_item_tv_red:{
        fontSize: textSize,
        color:'red'
    },
    item_img:{
        height:60,
        width:80,
        marginTop:20,
        resizeMode:'contain',
    },
  
    item_num_bg:{
        height:15,
        width:15,
        alignSelf:'flex-end',
        marginTop:-58
    },
    item_num:{
        fontSize: textSize,
        color:'white',
        alignSelf:'center'
    }


});
export { BOT as default };