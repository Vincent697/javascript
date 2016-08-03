/**
 * window 对象
 */

//如果页面中包含框架，则每个框架都拥有自己的 window 对象，并且保存在 frames 集合中。在 frames
//集合中，可以通过数值索引（从 0 开始，从左至右，从上到下）或者框架名称来访问相应的 window 对
//象。每个 window 对象都有一个 name 属性，其中包含框架的名称。

top.frames[0]; //top --Reference to the top window in the window hierarchy.
top.frames['topaframe'];

window.frames[0];
window.frames['topaframe']; //通过 frame 的 name 属性

console.log(top.frames);

//与 top 相对的另一个 window 对象是 parent。顾名思义， parent（父）对象始终指向当前框架的
//直接上层框架。在某些情况下， parent 有可能等于 top；但在没有框架的情况下， parent 一定等于
//top（此时它们都等于 window）。

//----------------------------

//可以跨浏览器取得窗口左边和上边的位置。
var leftPos = (typeof window.screenLeft == "number") ?
	window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ?
	window.screenTop : window.screenY;

//最终结果，就是无法在跨浏览器的条件下取得窗口左边和上边的精确坐标值。然而，使用 moveTo()
//和 moveBy()方法倒是有可能将窗口精确地移动到一个新位置。这两个方法都接收两个参数，其中
//图灵社区会员 StinkBC(StinkBC@gmail.com) 专享 尊重版权
//198 第 8 章 BOM
//moveTo()接收的是新位置的 x 和 y 坐标值，而 moveBy()接收的是在水平和垂直方向上移动的像素数。
//下面来看几个例子：
////将窗口移动到屏幕左上角
//window.moveTo(0,0);
////将窗向下移动 100 像素
//window.moveBy(0,100);
////将窗口移动到(200,300)
//window.moveTo(200,300);
////将窗口向左移动 50 像素
//window.moveBy(-50,0);
//需要注意的是，这两个方法可能会被浏览器禁用；而且，在 Opera 和 IE 7（及更高版本）中默认就
//是禁用的。另外，这两个方法都不适用于框架，只能对最外层的 window 对象使用。

/

//虽然最终无法确定浏览器窗口本身的大小， 但却可以取得页面视口的大小， 如下所示。
var pageWidth = window.innerWidth,
	pageHeight = window.innerHeight;
if(typeof pageWidth != "number") {
	if(document.compatMode == "CSS1Compat") {
		pageWidth = document.documentElement.clientWidth;
		pageHeight = document.documentElement.clientHeight;
	} else {
		pageWidth = document.body.clientWidth;
		pageHeight = document.body.clientHeight;
	}
}