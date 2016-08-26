/**
 * Author by Vincent 
 * Date: 2016年8月16日
 * 元素的大小 
 */

// ## 1、偏移量 offset dimension

// offsetHeight：元素在垂直方向上占用的空间大小，以像素计。包括元素的高度、（可见的）
//               水平滚动条的高度、上边框高度和下边框高度。

// offsetWidth： 元素在水平方向上占用的空间大小，以像素计。包括元素的宽度、（可见的）垂
//               直滚动条的宽度、左边框宽度和右边框宽度。

// offsetLeft：  元素的左外边框至包含元素的左内边框之间的像素距离。

// offsetTop：   元素的上外边框至包含元素的上内边框之间的像素距离。


// 要计算元素距离页面的偏移量  就需要一层一层网上累加 offset 值

function getElementLeft(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}

function getElementTop(element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}

//这两个函数利用 offsetParent 属性在 DOM 层次中逐级向上回溯，将每个层次中的偏移量属性合计到一块

//==================================================

// ## 2. 客户区大小 client dimension
// 元素的客户区大小（client dimension），指的是元素内容及其内边距所占据的空间大小。有关客户区
// 大小的属性有两个： clientWidth 和 clientHeight。其中， clientWidth 属性是元素内容区宽度加
// 上左右内边距宽度； clientHeight 属性是元素内容区高度加上上下内边距高度。图 12-2 形象地说明
// 了这些属性表示的大小。


function getViewport() {
    if (document.compatMode == "BackCompat") {  // 兼容IE7以下浏览器
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
    }
}