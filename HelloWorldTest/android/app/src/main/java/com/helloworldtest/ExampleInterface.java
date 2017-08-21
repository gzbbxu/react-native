package com.helloworldtest;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Administrator on 2017/8/21 0021.
 */

public class ExampleInterface extends ReactContextBaseJavaModule {
    public ExampleInterface(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ExampleInterface";
    }
    @ReactMethod
    public void HandleMessage(String msg){
        Log.i("zhouke","received message from RN:"+msg);
    }
}
