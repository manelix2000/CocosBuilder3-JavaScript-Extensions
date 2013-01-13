//  ____ ____ ____ ____ ____ ____ ____ ____
// ||D |||i |||v |||e |||r |||t |||a |||p ||
// ||__|||__|||__|||__|||__|||__|||__|||__||
// |/__\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|
//
//  Copyright Divertap 2013. All rights reserved.

#import "js_bindings_config.h"

#ifdef JSB_INCLUDE_CCCONTROL

#import "jsapi.h"
#import "jsfriendapi.h"

#import "js_bindings_core.h"
#import "js_bindings_CCControl_classes.h"
#import "js_bindings_basic_conversions.h"

// "setCallback" in JS
// item.setCallback( callback_fn, callback_evnt, [this]);
JSBool JSB_CCControl_setBlock_forControlEvents_( JSContext *cx, uint32_t argc, jsval *vp ) {
	
	JSObject* jsthis = (JSObject *)JS_THIS_OBJECT(cx, vp);
	JSB_NSObject *proxy = (JSB_NSObject*) jsb_get_proxy_for_jsobject(jsthis);
	
	JSB_PRECONDITION( proxy && [proxy realObj], "Invalid Proxy object");
	JSB_PRECONDITION( argc==2 || argc==3, "Invalid number of arguments. Expecting 2 or 3 args" );
	jsval *argvp = JS_ARGV(cx,vp);
	js_block js_func;
	JSObject *js_this = NULL;
    
    int32_t js_evnt;

	JSBool ok = JS_TRUE;
    
	if(argc==3) {
		ok &= JS_ValueToObject(cx, argvp[2], &js_this);
        ok &= jsb_set_reserved_slot(jsthis, 2, argvp[2] );
	}

	ok &= JS_ValueToInt32(cx, argvp[1], &js_evnt);
    ok &= jsb_set_reserved_slot(jsthis, 1, argvp[1] );
    
	ok &= jsval_to_block_1( cx, argvp[0], js_this, &js_func );
    ok &= jsb_set_reserved_slot(jsthis, 0, argvp[0] );

    
	JSB_PRECONDITION3(ok, cx, JS_FALSE, "Error parsing arguments");
	
	CCControl *real = (CCControl*) [proxy realObj];
    
	[real setBlock:(void(^)(id sender, CCControlEvent event))js_func forControlEvents:(CCControlEvent)js_evnt];
    
	JS_SET_RVAL(cx, vp, JSVAL_VOID);
    
	return JS_TRUE;
}

// "openURL" in JS
// item.openURL( url );
JSBool JSB_CCControl_openURL_( JSContext *cx, uint32_t argc, jsval *vp ) {
	
	JSObject* jsthis = (JSObject *)JS_THIS_OBJECT(cx, vp);
	JSB_NSObject *proxy = (JSB_NSObject*) jsb_get_proxy_for_jsobject(jsthis);
	
	JSB_PRECONDITION( proxy && [proxy realObj], "Invalid Proxy object");
	JSB_PRECONDITION( argc==1 , "Invalid number of arguments. Expecting 1 args" );
	jsval *argvp = JS_ARGV(cx,vp);
    
    NSString *url;
    
	JSBool ok = JS_TRUE;
    
	ok &= jsval_to_NSString( cx, argvp[0], &url );
    
    
	JSB_PRECONDITION3(ok, cx, JS_FALSE, "Error parsing arguments");
	
	CCControl *real = (CCControl*) [proxy realObj];
    
	[real openURL:url];
    
	JS_SET_RVAL(cx, vp, JSVAL_VOID);
    
	return JS_TRUE;
}

#endif // JSB_INCLUDE_CCCONTROL

