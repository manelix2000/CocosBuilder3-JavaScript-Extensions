CocosBuilder3-JavaScript-Extensions
===================================

Since cocos2d-iphone 2.1 comes with Javascript enabled bindings, a new door to cross-platform development has been opened.

For those who don't know how JavaScript bindings work, here you have a great introduction: 

JSBindings: [https://github.com/zynga/jsbindings/] (https://github.com/zynga/jsbindings/)

But not all is magic: if you want to use pure JavaScript, every piece of native code should have his jsbinding. If you start to develop with CocosBuilder3 for creating your scenes, you will see that you cannot use some of the controls that are bundled (CCControlButton,CCScrollView,etc). This controls are cocosbuilder extensions that you have to download in order to use them in your projects. 

Once you download the code, you will see that you cannot use these controls if you are using JavaScript controlled controllers. That is because the 'glue code' for this controls has not been generated. 

In this project you will find the 'glue code' (jsbindings) for CCControl,CCControlButton,CCScrollView and CCScale9Sprite. 

## Using the JavaScript Extensions

Follow the steps below in order to use these extensions:

1. Install templates from cocos2d-iphone 2.1beta4
2. Create a new cocos2d-iOS with Javascript project
3. Delete jsbindings/src and CocosBuilderReader dirs from 'libs'
4. Copy all folders inside 'CCBReader' dir to your 'libs' dir and add them to your Xcode project (be carefull with 'js' resources since Xcode does not copy them by default in your target -copy resources build phase-)
5. Start using CocosBuilder3 JavaScript Extensions!

And example has been provided to see how these extensions work! Enjoy it!

## Requeriments

1. CocosBuilder 3 [http://www.cocosbuilder.com](http://www.cocosbuilder.com)
2. cocos2d-iphone 2.1beta4 [http://www.cocos2d-iphone.org/](http://www.cocos2d-iphone.org/download)

## License (MIT)
Copyright (c) 2011 Viktor Lidholt

Copyright (c) 2012 Zynga Inc.

Copyright (c) 2013 Divertap

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
