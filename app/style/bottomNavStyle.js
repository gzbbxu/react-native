import { StyleSheet, Dimensions } from 'react-native';
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let textSize = totalWidth / 18;
let readingUITitleHeight = textSize * 6;
let diaryBodyLine = totalHeight / textSize - 6;
let returnButtonHeight = textSize * 5;
let BOTA = StyleSheet.create({
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
    img:{
        width:50,
        height:50
    },
    tv:{
        alignSelf:'center',
    }
});
export { BOTA as default };