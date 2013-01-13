#import "js_bindings_config.h"
#import "js_bindings_core.h"
#import "js_bindings_CCScrollView_classes.h"
#import "js_bindings_CCScrollView_registration.h"

void jsb_register_CCScrollView( JSContext *_cx, JSObject *globalO) { //1
    jsval ns;
    JS_GetProperty(_cx, globalO, "cc", &ns); //2
    JSObject* CCScrollView = JSVAL_TO_OBJECT(ns); //3
    
#import "js_bindings_CCScrollView_classes_registration.h" //4
}
