/*
 * Author by Vincent
 */

//javascript 中私有变量的模拟 -------严格意义上 js 不存在私有变量，可以认为函数内部的函数为私有变量
//在函数内部，通过闭包创建私有变量的访问方法
//我们把有权访问私有变量和私有函数的公有方法称为特权方法（privileged method）。
//有两种在对象上创建特权方法的方式。第一种是在构造函数中定义特权方法，基本模式如下。
function MyObject() {

	//私有变量和私有函数
	var privateVariable = 10;

	function PrivateFunction() {
		return false;
	}

	//特权方法
	this.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	};
}

// another example
function Person(name) {
	this.getName = function() {
		return name;
	};
	this.setName = function(val) {
		name = val;
	}
}

var Person1 = new Person("Vincent");
console.log("获取person name 值" + Person1.getName());

Person1.setName("Jordan");

console.log("获取person name 值" + Person1.getName());

//------------------------------------------------

//  ---静态私有变量---
//通过在私有作用域中定义私有变量或函数， 同样也可以创建特权方法， 其基本模式如下所示。
(function() {
	//私有变量和私有函数
	var privateVariable = 10;

	function privateFunction() {
		return false;
	}
	//构造函数
	MyObject = function() {};
	//公有/特权方法
	MyObject.prototype.publicMethod = function() {
		privateVariable++;
		return privateFunction();
	};
})();


// example
(function() {
	var name = "";
	Person = function(value) {
		name = value;
	};
	Person.prototype.getName = function() {
		return name;
	};
	Person.prototype.setName = function(value) {

		name = value;
	};
})();
var person1 = new Person("Nicholas");
console.log(person1.getName()); //"Nicholas"

person1.setName("Greg");
console.log(person1.getName()); //"Greg"

var person2 = new Person("Michael");
console.log(person1.getName()); //"Michael"
console.log(person2.getName()); //"Michael"

//------------------------------------

//********** 模块模式  ********** 
//单例模式 singleton
//以对象字面量的形式来创建单例对象
var singleton = {
	name: value,
	method: function() {
		//这里是方法的代码
	}
};



//模块模式通过为单例添加私有变量和特权方法能够使其得到增强， 其语法形式如下：
var singleton = function() {
	//私有变量和私有函数
	var privateVariable = 10;

	function privateFunction() {
		return false;
	}
	//特权/公有方法和属性
	return {
		publicProperty: true,
		publicMethod: function() {
			privateVariable++;
			return privateFunction();
		}
	};
}();

//example
var application = function() {
	//私有变量和函数
	var components = new Array();
	//初始化
	components.push(new BaseComponent());
	//公共
	return {
		getComponentCount: function() {
			return components.length;
		},
		registerComponent: function(component) {
			if(typeof component == "object") {
				components.push(component);
			}
		}
	};
}();