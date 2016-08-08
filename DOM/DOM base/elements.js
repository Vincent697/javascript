/**
 * Element type  
 */

//<div id="myDiv" class="bd" title="Body text" lang="en" dir="ltr"></div>
var div = document.getElementById("mydiv");
console.log(div.id); // 'mydiv'
console.log(div.class); // 'bd'
console.log(div.title); // 'Body text'
console.log(div.lang); // 'en'
console.log(div.dir); // 'ltr'


div.removeAttribute("class");

div.setAttribute("id", "someOtherId");
div.setAttribute("class", "ft");
div.setAttribute("title", "Some other text");
div.setAttribute("lang", "fr");
div.setAttribute("dir", "rtl");



/**
 * [outputAttributes]  输出一个element的所有属性及值 
 * @param  {[type]} element [description]
 * @return {[type]}         [description]
 */
function outputAttributes(element) {
    var pairs = new Array(),
        attrName,
        attrValue,
        i,
        len;
    for (i = 0, len = element.attributes.length; i < len; i++) {
        attrName = element.attributes[i].nodeName;
        attrValue = element.attributes[i].nodeValue;
        if (element.attributes[i].specified) {
            pairs.push(attrName + "=\"" + attrValue + "\"");
        }
    }
    return pairs.join(" ");
}

// ----------------------- 
// 创建一个element 
var myDiv = document.createElement("div");

myDiv.id = "div-id";
myDiv.class = "div-class";

document.body.appendChild(myDiv);

if (client.browser.ie && client.browser.ie <= 7) {
    //创建一个带 name 特性的 iframe 元素
    var iframe = document.createElement("<iframe name=\"myframe\"></iframe>");
    //创建 input 元素
    var input = document.createElement("<input type=\"checkbox\">");
    //创建 button 元素
    var button = document.createElement("<button type=\"reset\"></button>");
    //创建单选按钮
    var radio1 = document.createElement("<input type=\"radio\" name=\"choice\" value=\"1\">");
    var radio2 = document.createElement("<input type=\"radio\" name=\"choice\" value=\"2\">");
}
