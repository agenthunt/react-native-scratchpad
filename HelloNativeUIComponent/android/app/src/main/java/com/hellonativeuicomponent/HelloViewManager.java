package com.hellonativeuicomponent;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import javax.annotation.Nullable;

/**
 * Created by shailesh on 15/03/16.
 */
public class HelloViewManager extends SimpleViewManager<HelloView> {

    @Override
    public String getName() {
        return "HelloView";
    }

    @Override
    protected HelloView createViewInstance(ThemedReactContext reactContext) {
        return new HelloView(reactContext);
    }

    @ReactProp(name = "message")
    public void setMessage(HelloView helloView, @Nullable String message) {
        helloView.setMessage(message);
    }
}
