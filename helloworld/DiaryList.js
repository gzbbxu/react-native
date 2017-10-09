
import React, { Component } from 'react';
import{
    View,Text,TextInput,TouchableOpacity,Image,StatusBar,ListView
} from 'react-native';
import MCV from './MCV';
let angryMood = require('./img/favicon.png')
export default class DiaryList extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     uiCode:1,
        //     diaryMood:null,
        //     diaryTime:'读取中....',
        //     diaryTitle:'读取中...',
        //     diaryBody:'读取中...',
        //   };
        this.state= {
            diaryListDataSource:new ListView.DataSource(
                {
                    rowHasChanged:(oldRow,newRow)=>oldRow!==newRow
                }
            ),
        };
        this.updateSearchKeyWord = this.updateSearchKeyWord.bind(this);
        this.renderListItem = this.renderListItem.bind(this);

    }
    comonentWillMount(){
        if(this.props.diaryList===null){
            return;
        }
        this.setState({
            diaryListDataSource:this.state.diaryListDataSource.cloneWithRows(this.props.diaryList)
        });
    }
    componentWillReceiveProps(nextProps){//这个函数很重要
        this.setState({
            diaryListDataSource:this.state.diaryListDataSource.cloneWithRows(nextProps.diaryList)
        });
    }
    renderListItem(log,sectionID,rowID){
        return(
            <TouchableOpacity onPress={()=>this.props.selectLististItem(rowID)}>
                <View style={MCV.secondRow}>
                    
                    <Image style={MCV.moodStyle} source={log.mood}/>
                    <View style={MCV.subViewInReader}>
                        <Text style={MCV.textInReader}>
                            {log.title}
                        </Text>
                        <Text style={MCV.textInReader}>
                            {log.time}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    updateSearchKeyWord(newText){
        this.props.searchKeyWord(newText);
        //将用户输入的搜索结果关键字交给上层,
    }
    render(){
        return(
            <View style = {MCV.container}>
                <StatusBar hidden={true}/>
                <View style={MCV.firstRow}>
                    <View style={{borderWidth:1}}>
                        <TextInput autoCapitalize="none" placeholder='输入搜索关键字' onChangeText={this.updateSearchKeyWord} style={MCV.searchBarTextInput}/>
                    </View>
                    <TouchableOpacity onPress={this.props.writeDiary}>
                        <Text style = {MCV.middleButton}>
                            写日记
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={MCV.diaryAbstractList}>
                    <View style={MCV.secondRow}>
                        <Image style={MCV.moodStyle}    source={angryMood}/>
                        <View style = {MCV.subViewInReader}>
                            <TouchableOpacity>
                                <Text style = {MCV.textInReader}>
                                    某变量记录假日记列表标题
                                </Text>
                            </TouchableOpacity>
                            <Text style={MCV.textInReader}>
                                    某变量记录日记列表时间
                            </Text>
                        </View>
                    </View>
                </View> */}
                {
                    (
                        (this.props.diaryList.length!==0)?(
                            <ListView dataSource={this.state.diaryListDataSource} renderRow={this.renderListItem}>

                            </ListView>
                        ):(
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={{fontSize:18}}>您还没有写日记哦。</Text>
                            </View>
                        )
                    )
                }
            </View>
        );
    }
}