/**
 * 通过循环调用 indexOf() 或者 lastIndexOf() 来找到所有匹配的子字符串
 */
var stringValue = "James is a NBA star playing for Huston Rocket!";
var postions = new Array();
var pos = stringValue.indexOf("e");
while (pos > -1) {
	postions.push(pos);
	pos = stringValue.indexOf("e", pos + 1);
}

alert(postions);


/**
 *  返回 两个数（包含自己）之间的 任意一个整数值
 * @param {Object} lowerVal
 * @param {Object} upperVal
 */
function selectForm(lowerVal, upperVal) {
	var choices = upperVal - lowerVal + 1;
	return Math.floor(Math.random() * choices + lowerVal);
}

selectForm(2,10);
// 返回介于 2 和 10 之间的任意数值