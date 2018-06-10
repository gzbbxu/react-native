import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


// import HorList from './myScroll';
// import TopView from './topView';
// import BottomView from './bottom';
// import BottomNav from './bottom_nav';
// import TopNav from './top_nav';
var Frameanim = require('./frameanim');

// export default class helloworld extends Component {

//   constructor(props){
//     super(props);
//     this.state={
//       dataArray: ["page one", "page two","page three","page four","page five","page six","page egight","page nine","page ten"],
//       listRedPack:["10.2","1","0.1","3.2","1.32","23.2"],
//       onLineUser:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"],
//     }
//     this.showList=this.showList.bind(this);
//   }
//   comonentWillMount(){
//     console.log("comonentWillMount");
//   }
//     render(){
//       return this.showList();
//     }
//     showList(){
//         return(
//           <View>
//             {/* <StatusBar hidden={true}/>
//             <TopNav onLineUser={this.state.onLineUser}/>
//             <TopView/>
//             <HorList
//               listArray={this.state.dataArray}
//             />
//             <BottomView listRedPack={this.state.listRedPack}/>
//             <BottomNav/> */}
//             <Text>a</Text>
//           </View>
         
//         );
//     }
//     showTop(){

//     }
// }


export default class frameanim extends Component {
  
  render() {
      return (
        <View style = {styles.demo}>
          <Frameanim style={{width:40,height:40}} action = 'start' frameAnimFile = 'hotel_tts_frame' oneshot = {false}></Frameanim>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    demo: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
      }
  });
AppRegistry.registerComponent('MyReactNativeApp', () => frameanim);