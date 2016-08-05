/**
 * 客户端能力检测
 */

//这样更好：检查 sort 是不是函数
function isSortable(object) {
    return typeof object.sort == "function";
}

//在浏览器环境下测试任何对象的某个特性是否
//存在， 要使用下面这个函数。
//作者： Peter Michaux
function isHostMethod(object, property) {
    var t = typeof object[property];
    return t == 'function' ||
        (!!(t == 'object' && object[property])) ||
        t == 'unknown';
}
//可以像下面这样使用这个函数：
result = isHostMethod(xhr, "open"); //true
result = isHostMethod(xhr, "foo"); //false


// 识别呈现引擎
// 主要检测五大呈现引擎： IE、 Gecko、 WebKit、 KHTML 和 Opera。
var client=function(){
    var engine={
        //呈现引擎
        ie: 0,
        gecko: 0,
        webkit: 0,
        khtml: 0,
        opera: 0,
        //具体的版本号
        ver: null
    }
    
    //在此检测呈现引擎、平台和设备
    
    return {
        engine : engine
    };
}();




//-------------- 浏览器检测

/**
 * form jquery 1.3.0
 */

// Use of jQuery.browser is deprecated.
// It's included for backwards compatibility and plugins,
// although they should work to migrate away.

var userAgent = navigator.userAgent.toLowerCase();

// Figure out what browser is being used
jQuery.browser = {
    version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
    safari: /webkit/.test( userAgent ),
    opera: /opera/.test( userAgent ),
    msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
    mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
};