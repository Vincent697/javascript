//定义一个阶乘的函数

/*
 * 消除耦合  改造
 */

function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		//return num*factorial(num-1);  //递归算法
		return num * arguments.callee(num - 1);
		// arguments.callee  指向函数本身这个对象
	}
}
//-----------------------------
var num=10;

num.toFixed(2);
num.toExponential(1);  //返回指数表示法

num.toPrecision(1);





