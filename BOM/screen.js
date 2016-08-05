/**
 * BOM screen --- history
 */

//调整浏览器窗口大小，使其占据屏幕的可用空间
window.resizeTo(screen.availWidth, screen.availWidth);

//-------------   history
//后退一页
history.go(-1);
//前进一页
history.go(1);
//前进两页
history.go(2);

//也可以给 go()方法传递一个字符串参数，此时浏览器会跳转到历史记录中包含该字符串的第一个
//位置——可能后退，也可能前进，具体要看哪个位置最近。如果历史记录中不包含该字符串，那么这个
//方法什么也不做，例如：
//跳转到最近的 wrox.com 页面
history.go("wrox.com");
//跳转到最近的 nczonline.net 页面
history.go("nczonline.net");

//后退一页
history.back();
//前进一页
history.forward();