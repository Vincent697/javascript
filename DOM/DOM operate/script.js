/**
 * Dom操作技术 
 * 动态脚本
 */
// var script = document.createElement("script");

// script.type = "text/javascript";

// script.src = "script.js";

// document.body.appendChild(script);


function loadScript(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}
//然后，就可以通过调用这个函数来加载外部的 JavaScript 文件了：
loadScript("client.js");


function loadScriptString(code) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    try {
        script.appendChild(document.createTextNode(code));
    } catch (ex) {
        script.text = code;
    }
    document.body.appendChild(script);
}
//下面是调用这个函数的示例：
loadScriptString("function sayHi(){alert('hi');}");

