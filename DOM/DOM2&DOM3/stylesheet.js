/**
 * Author by Vincent
 */

// DOM2 & DOM3 能力检测
var supportsDOM2Core = document.implementation.hasFeature("Core", "2.0");
var supportsDOM3Core = document.implementation.hasFeature("Core", "3.0");
var supportsDOM2HTML = document.implementation.hasFeature("HTML", "2.0");
var supportsDOM2Views = document.implementation.hasFeature("Views", "2.0");
var supportsDOM2XML = document.implementation.hasFeature("XML", "2.0");
console.log(supportsDOM2Core + ' ' + supportsDOM3Core + ' ' + supportsDOM2HTML + ' ' + supportsDOM2Views + ' ' + supportsDOM2XML);

console.log(document.doctype.publicId);

console.log(document.doctype.systemId);

console.log(document.doctype.internalSubset);

// 样式
var supportsDOM2CSS = document.implementation.hasFeature("CSS", "2.0");
var supportsDOM2CSS2 = document.implementation.hasFeature("CSS2", "2.0");
var supportsDOM2StyleSheets = document.implementation.hasFeature("StyleSheets", "2.0");

// 样式操作

// 支持 style 特性的 HTML 元素在 JavaScript 中都有一个对应的 style 属性。 
// 这个 style 对象是 CSSStyleDeclaration 的实例，包含着通过 HTML 的 style 特性指定的所有样式信息，但不包含
// 与外部样式表或嵌入样式表经层叠而来的样式。
// 在 style 特性中指定的任何 CSS 属性都将表现为这个style 对象的相应属性。
// ------------------------------------------------------------------------
// 对于使用短划线（分隔不同的词汇，例如 background-image）的 CSS 属性名，
// 必须将其转换成驼峰大小写形式，才能通过 JavaScript 来访问。下表列出了几个常见的 CSS 属性及
// 其在 style 对象中对应的属性名。
// 
// == css 属性名 ======== JavaScript属性名 ======
// 
//    background-image    style.backgroundImage
//    color               style.color
//    display             style.display
//    font-family         style.fontFamily
//    
//==== ==== ==== ==== ==== ==== ==== ==== ==== ====
// 由于 float 是 JavaScript 中的保留字，因此不能用作属性名。
// “ DOM2 级样式”规范规定样式对象上相应的属性名应该是 cssFloat；
// Firefox、 Safari、 Opera 和 Chrome 都支持这个属性，
// 而 IE支持的则是 styleFloat。
// 
// 在设置 css 属性值的情况下最好加上单位。



// 操作element元素上的css text
// <div id="my-div" style="width:100px;height:20px;color:#ffffff;float:left">
var myDiv=document.getElementById("my-div");

var textCss=myDiv.style.cssText; // "width:100px;height:20px;color:#ffffff;float:left"



// 要以跨浏览器的方式向样式表中插入规则，可以使用下面的函数。这个函数接受 4 个参数：要向其
// 中添加规则的样式表以及与 addRule()相同的 3 个参数，如下所示。

function insertRule(sheet, selectorText, cssText, position) {
    if (sheet.insertRule) {
        sheet.insertRule(selectorText + "{" + cssText + "}", position);
    } else if (sheet.addRule) {
        sheet.addRule(selectorText, cssText, position);
    }
}

// 调用这个函数的方式如下。
insertRule(document.styleSheets[0], "body", "background-color: silver", 0);

// 下面是一个能够跨浏览器删除规则的函数。第一个参数是要操作的样式表，第二个参数是要删除的
// 规则的索引。
function deleteRule(sheet, index) {
    if (sheet.deleteRule) {
        sheet.deleteRule(index);
    } else if (sheet.removeRule) {
        sheet.removeRule(index);
    }
}

// 调用这个函数的方式如下。
deleteRule(document.styleSheets[0], 0);