package com.helloworldtest;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;


/**
 * Created by Administrator on 2017/8/21 0021.
 */

public class ExampleInterface extends ReactContextBaseJavaModule {
    private  ReactApplicationContext context;
    private final ActivityEventListener activityEventListener = new BaseActivityEventListener(){
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
          if(resultCode==Activity.RESULT_OK){
              String strData = data.getStringExtra("data");
              sendMessage(strData);

          }
        }
    };
    public ExampleInterface(ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = reactContext;
        context.addActivityEventListener(activityEventListener);
    }
    private void sendMessage(String msg){
        //像react native 侧发送消息
        context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("AndroidToRNMessage",msg);
    }

    @Override
    public String getName() {
        return "ExampleInterface";
    }
    @ReactMethod
    public void HandleMessage(String msg){
        Log.i("zhouke","received message from RN:"+msg);
        Intent intent = new Intent();
        intent.setClass(context,TestActivity.class);
       // intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivityForResult(intent,0,null);

    }
}
