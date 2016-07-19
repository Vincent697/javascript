/**
 * 闭包的应用 closure
 */
console.log("------------- javascript closure -------------");

// a demo
function createComparisionFunction(propertyName) {

	return function(object1, object2) {

		var val1 = object1[propertyName];
		var val2 = object2[propertyName];

		if(val1 > val2) {
			return 1;
		} else if(val1 < val2) {
			return -1;
		} else {
			return 0;
		}
	}

}
//创建函数
var compareNames = createComparisionFunction("name");
//调用函数
var result = compareNames({
	name: 1
}, {
	name: 2
});
//解除对匿名函数的引用（以便释放内存）
compareNames = null;
console.log(result);

// -------------------------------
console.log("-------------------------");

function createFunctions() {
	var result = new Array();

	for(var i = 0; i < 10; i++) {
		result[i] = function(num) {
			return function() {
				return num;
			};
		}(i);
	}

	return result;
}

console.log(createFunctions());

var name = "The Window";
var myObj = {
	name: "My Object",
	getNameFunc: function() {
		return function() {
			return this.name;
		};
	}
};
console.log(myObj.getNameFunc()()); //"The Window"（在非严格模式下）