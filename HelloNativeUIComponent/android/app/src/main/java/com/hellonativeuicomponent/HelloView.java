package com.hellonativeuicomponent;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

/**
 * Created by shailesh on 15/03/16.
 */
public class HelloView extends Button {

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
        //textView.setText(message);
        requestLayout();
    }

    private String message;

    private TextView textView;

    public HelloView(Context context) {
        super(context);

        //setOrientation(LinearLayout.VERTICAL);
        setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        //textView = new TextView(context);
        //addView(textView);
        setText("Hello");

    }


    private final Runnable mLayoutRunnable = new Runnable() {
        @Override
        public void run() {
            measure(MeasureSpec.makeMeasureSpec(getWidth(), MeasureSpec.EXACTLY),
                    MeasureSpec.makeMeasureSpec(getHeight(), MeasureSpec.EXACTLY));
            layout(getLeft(), getTop(), getRight(), getBottom());
        }
    };





    @Override
    public void requestLayout() {
        super.requestLayout();
        post(mLayoutRunnable);
    }


}
