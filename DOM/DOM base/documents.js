/**
 * Document Type
 */

// javascript 通过document来表示文档
// document 对象是window 对象的一个属性
// nodeType 的值为 9；
// nodeName 的值为"#document"；
// nodeValue 的值为 null；
// parentNode 的值为 null；
// ownerDocument 的值为 null；
// 其子节点可能是一个 DocumentType （最多一个） 、 Element （最多一个） 、 ProcessingInstruction
// 或 Comment。

var html = document.documentElement;

// 返回true
console.log(html===document.childNodes[0]);
// 返回true
console.log(html===document.firstChild);

var body = document.body; //取得对<body>的引用

//可以通过 doctype 属性（在浏览器中是 document.doctype）来访问它的信息。
var doctype = document.doctype; //取得对<!DOCTYPE>的引用

var url=document.URL;
var domain=document.domain;
//取得来源页面的 URL
var referrer = document.referrer;

//查找元素
/*
document.getElementById(id);
document.getElementsByTagName(name);
*/

document.write();

document.writeln();
