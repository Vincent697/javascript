/**
 * Selectors API Level 1 的核心是两个方法：
 * querySelector()和 querySelectorAll()。
 */

//# 1 querySelector()
// querySelector()方法接收一个 CSS 选择符，返回与该模式匹配的第一个元素，如果没有找到匹
// 配的元素，返回 null。

// 取得 body 元素
var body = document.querySelector("body");
// 取得 ID 为"myDiv"的元素
var myDiv = document.querySelector("#myDiv");
// 取得类为"selected"的第一个元素
var selected = document.querySelector(".selected");
// 取得类为"button"的第一个图像元素
var img = document.body.querySelector("img.button");


//----------------------------------------------


//# 2 querySelectorAll()
// querySelectorAll()方法接收的参数与 querySelector()方法一样，都是一个 CSS 选择符，但
// 返回的是所有匹配的元素而不仅仅是一个元素。这个方法返回的是一个 NodeList 的实例

// 取得某<div>中的所有<em>元素（类似于 getElementsByTagName("em")）
var ems = document.getElementById("myDiv").querySelectorAll("em");
// 取得类为"selected"的所有元素
var selecteds = document.querySelectorAll(".selected");
// 取得所有<p>元素中的所有<strong>元素
var strongs = document.querySelectorAll("p strong");


// 要取得返回的 NodeList 中的每一个元素， 可以使用 item() 方法， 也可以使用方括号语法， 比如：
var i, len, strong;
for (i = 0, len = strongs.length; i < len; i++) {
    strong = strongs[i]; //或者 strongs.item(i)
    strong.className = "important";
}
// 同样与 querySelector() 类似， 如果传入了浏览器不支持的选择符或者选择符中有语法错误，
// querySelectorAll() 会抛出错误。

//-----------------------------------------

//# 3 matchesSelector()
// Selectors API Level 2 规范为 Element 类型新增了一个方法 matchesSelector()。这个方法接收
// 一个参数，即 CSS 选择符，如果调用元素与该选择符匹配，返回 true；否则，返回 false。看例子。
if (document.body.webkitMatchesSelector('body.panel')) {
    console.log('matche success!');
} else {
    console.log('matche failure!');
}

// 截至 2011 年年中，还没有浏览器支持 matchesSelector()方法；不过，也有一些实验性的实现。
// IE 9+通过 msMatchesSelector()支持该方法，Firefox 3.6+通过 mozMatchesSelector()支持该方法，
// Safari 5+和 Chrome 通过 webkitMatchesSelector()支持该方法。因此，如果你想使用这个方法，最
// 好是编写一个包装函数。
function matchesSelector(element, selector) {
    if (element.matchesSelector) {
        return element.matchesSelector(selector);
    } else if (element.msMatchesSelector) {
        return element.msMatchesSelector(selector);
    } else if (element.mozMatchesSelector) {
        return element.mozMatchesSelector(selector);
    } else if (element.webkitMatchesSelector) {
        return element.webkitMatchesSelector(selector);
    } else {
        throw new Error("Not supported.");
    }
}
if (matchesSelector(document.body, "body.page1")) {
    //执行操作
    
}