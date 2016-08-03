/**
 * 间歇调用和超时调用
 */

//javascript  是单线程语言  

//超时调用
var timeoutID = setTimeout(function() {
	console.log("just 1 second passed");
}, 1000);

console.log(timeoutID);

//clearTimeout(timeoutID); //清除计时器

//间歇调用
var timeoutID2 = setInterval(function() {
	console.log("call by setinterval");
}, 1000);

//clearInterval(timeoutID2); //清除计时器

//a demo 
var num = 0;
var max = 10;
var intervalId = null;

function incrementNumber() {
	num++;
	//如果执行次数达到了 max 设定的值，则取消后续尚未执行的调用
	if(num == max) {
		clearInterval(intervalId);
		alert("Done");
	}
}
intervalId = setInterval(incrementNumber, 500);

//a demo  使用 间歇调用来模拟超时调用

var num = 0;
var max = 10;

function incrementNumber() {
	num++;
	//如果执行次数未达到 max 设定的值，则设置另一次超时调用
	if(num < max) {
		setTimeout(incrementNumber, 500);
	} else {
		alert("Done");
	}
}
setTimeout(incrementNumber, 500);

//可见，在使用超时调用时，没有必要跟踪超时调用 ID，因为每次执行代码之后，如果不再设置另
//一次超时调用，调用就会自行停止。一般认为，使用超时调用来模拟间歇调用的是一种最佳模式。在开
//发环境下，很少使用真正的间歇调用，原因是后一个间歇调用可能会在前一个间歇调用结束之前启动。
//而像前面示例中那样使用超时调用，则完全可以避免这一点。所以，最好不要使用间歇调用。