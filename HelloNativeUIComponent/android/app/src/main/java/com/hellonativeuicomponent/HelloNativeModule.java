package com.hellonativeuicomponent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

/**
 * Created by shailesh on 15/03/16.
 */
public class HelloNativeModule extends ReactContextBaseJavaModule {

    public HelloNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "HelloNativeModule";
    }
}
