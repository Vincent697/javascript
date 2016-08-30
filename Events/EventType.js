/**
 * Author：Vincent
 * Date:2016-08-30 17:34:15
 * [ event type ]
 * require('EventUtil.js') 本程序中  EventHandler 调用EventUtil.js 封装的 EventHandler
 */

// 1、load 事件 {当页面完全加载后（包括图像、Javascript、css等外部资源），就会触发window上面的load事件}

//两种定义onload事件处理程序的方式
// 第一种
EventUtil.addHandler(window, "load", function(event) {
    alert("Loaded!");
});

//第二种 为body 元素添加一个onload 特性
// <body onload="alert('Loaded!')">

// 图像加载完毕
var image = document.getElementById("myImage");
EventUtil.addHandler(image, 'load', function(event) {
    event = EventUtil.getEvent(event);
    alert(EventUtil.getTarget(event).src);
    alert("Images load finish.");
});

//在创建新的<img>元素时，可以为其指定一个事件处理程序，以便图像加载完毕后给出提示。此时，
//最重要的是要在指定 src 属性之前先指定事件，如下面的例子所示。
EventUtil.addHandler(window, "load", function() {
    var image = document.createElement("img");
    EventUtil.addHandler(image, "load", function(event) {
        event = EventUtil.getEvent(event);
        alert(EventUtil.getTarget(event).src);
    });
    document.body.appendChild(image);
    image.src = "smile.gif";
});


// 同样的功能也可以通过使用 DOM0 级的 Image 对象实现。在 DOM 出现之前，开发人员经常使用
// Image 对象在客户端预先加载图像。可以像使用<img>元素一样使用 Image 对象，只不过无法将其添
// 加到 DOM 树中。下面来看一个例子。

EventUtil.addHandler(window, "load", function() {
    var image = new Image();
    EventUtil.addHandler(image, "load", function(event) {
        alert("Image loaded!");
    });
    image.src = "smile.gif";
});

// 在不属于 DOM 文档的图像（包括未添加到文档的<img>元素和 Image 对象）上
// 触发 load 事件时， IE8 及之前版本不会生成 event 对象。 IE9 修复了这个问题


// 2、unload事件
// 与 load 事件对应的是 unload 事件，这个事件在文档被完全卸载后触发。只要用户从一个页面切
// 换到另一个页面，就会发生 unload 事件。而利用这个事件最多的情况是清除引用，以避免内存泄漏。

EventUtil.addHandler(window, "unload", function(event) {
    alert("Unloaded");
});

// 根据“ DOM2 级事件”，应该在<body>元素而非 window 对象上面触发 unload
// 事件。不过，所有浏览器都在 window 上实现了 unload 事件，以确保向后兼容。


// 3、resize 事件
// 当浏览器窗口被调整到一个新的高度或宽度时，就会触发 resize 事件。这个事件在 window（窗口）上面触发

EventUtil.addHandler(window, "resize", function(event) {
    alert("Resized");
});

