//how to generate a function in javascript

//method 1
function sum(val1, val2) {
	return val1 + val2;
}
//等价于

//method 2
var sum = function(val1, val2)) { //使用函数表达式来创建函数
	return val1 + val2;
}; //注意此处是有分号的  -----虽然分号可省略，但最好不要这么做

//method 3 使用Function构造函数
var sum = new Function('val1', 'val2', 'return val1 + val2;'); //最后一个参数为函数体