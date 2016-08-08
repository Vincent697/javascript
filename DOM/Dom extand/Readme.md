# 选择符API

Selectors API Level 1 的核心是两个方法： querySelector()和 querySelectorAll()。
在兼容的浏览器中，可以通过 Document 及的浏览器有 ：
IE 8+、 Firefox 3.5+、 Safari 3.1+、 Chrome 和 Opera 10+。

1、querySelector() 方法

//取得 body 元素
var body = document.querySelector("body");
//取得 ID 为"myDiv"的元素
var myDiv = document.querySelector("#myDiv");
//取得类为"selected"的第一个元素
var selected = document.querySelector(".selected");
//取得类为"button"的第一个图像元素
var img = document.body.querySelector("img.button");
