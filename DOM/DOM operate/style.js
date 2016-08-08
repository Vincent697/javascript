/**
 * Dom操作技术 
 * 动态样式
 */

function loadStyle(url) {
    // body...  
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
}
//调用 loadStyles() 函数的代码如下所示：
loadStyles("styles.css");


function loadStyleString(css) {
    // body...  
    var style = document.createElement("style");
    style.type = "text/css";
    try {
        style.appendChild(document.createTextNode(css));
    } catch (ex) {
        style.styleSheet.cssText = css;
    }
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
}
//调用这个函数的示例如下：
loadStyleString("body{background-color:red}");