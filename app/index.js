import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
const store = configureStore()

import App from './containers/App'
import codePush from 'react-native-code-push';
export default class Root extends Component {
    render() {
      console.log('aaaaa');
      return (
        <Provider store={store}>
           <App />
        </Provider>
      );
    }
    componentWillMount(){
      codePush.sync({
        updateDialog:false,//不向用户弹出更新提示
        installMode:codePush.InstallMode.IMMEDIATE//安装模式设为立即安装
      });
    }
  }
  let codePushOptions = {checkFrequency:codePush.CheckFrequency.MANUAL};
  Root = codePush(codePushOptions)(Root);
  