/**
 * author by vincent
 * data: 2016年7月19日
 */

//一个例子说明 js 是没有块级作用域
function testBlockFunc(count) {
	for(var i = 0; i < count; i++) {
		alert(i);
	}
	return i;
}

//用作块级作用域（通常称为私有作用域）的匿名函数的语法如下所示
(function() {
	//这里是块级作用域
	console.log("测试一个块级作用域！");
})();

//一个错误的写法
//function(){
//	
//}();

//无论在什么地方， 只要临时需要一些变量， 就可以使用私有作用域， 例如：
function outputNumbers(count) {
	(function() {
		for(var i = 0; i < count; i++) {
			//alert(i);
			console.log(i);
		}
	})();
	//console.log(i); //导致一个错误！ 说明块级作用域生效
}

outputNumbers(8);

/*这种技术经常在全局作用域中被用在函数外部，从而限制向全局作用域中添加过多的变量和函数。
一般来说，我们都应该尽量少向全局作用域中添加变量和函数。在一个由很多开发人员共同参与的大型
应用程序中，过多的全局变量和函数很容易导致命名冲突。而通过创建私有作用域，每个开发人员既可
以使用自己的变量，又不必担心搞乱全局作用域。例如：*/
(function() {
	var now = new Date();
	if(now.getMonth() == 0 && now.getDate() == 1) {
		console.log("Happy new year!");
	}
})();
