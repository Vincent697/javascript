/**
 * Author by Vincent
 */

//创建对象

/**
 * 工厂模式来创建对象
 * @param {Object} name
 * @param {Object} age
 * @param {Object} job
 */
function createPerson(name, age, job) {
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function() {
		alert(this.name);
	}
	return o;
}

var person1 = createPerson('vincent', 23, 'coder');
var person2 = createPerson('Tom', 34, 'doctor');

/**
 * 构造函数模式
 * @param {Object} name
 * @param {Object} age
 * @param {Object} job
 */
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function() {
		alert(this.name);
	}
}

var person1 = new Person('vincent', 23, 'coder');
var person2 = new Person('Tom', 34, 'doctor');

/**
 * 原型模式
 * 构造函数是一个空的函数
 * 把属性和方法添加到原型对象中
 */
function People() {

}

People.prototype.name = "vincent";
People.prototype.age = "23";
People.prototype.job = "coder";
People.prototype.sayName = function() {
	alert(this.name);
}

var people1 = new People();
people1.sayName();

var people2 = new People();
people2.sayName();

alert(people1.sayName == people2.sayName) // true
	//说明 people1和people2是来自同一个函数 sayName()


/**
 * 确定该属性到底是存在于对象中，还是存在于原型中
 * @param {Object} object  对象
 * @param {Object} name    属性名
 * return   true表示是在原型中，false 表示在对象中 
 */
function hasPrototypeProperty(object, name) {
	return !object.hasOwnProperty(name) && (name in object);
}
// -- 使用原型模式来创建对象的优化 
//注意  此形式  constructor不再指向 Student 但是可以手动的添加到
function Student(){
	
}
Student.prototype={   //对象字面量的形式
	constructor : Student,  //like this 使得 constructor 仍然指向Student  此操作也会有问题 就是会把
	name:"adsa",
	age:"22",
	sayName:function(){
		alert(this.name);
	}
}
/*注意，以这种方式重设 constructor 属性会导致它的[[Enumerable]]特性被设置为 true。默认
情况下，原生的 constructor 属性是不可枚举的，因此如果你使用兼容 ECMAScript 5 的 JavaScript 引
擎，可以试一试 Object.defineProperty()。
function Person(){
}
Person.prototype = {
name : "Nicholas",
age : 29,
job : "Software Engineer",
sayName : function () {
alert(this.name);
}
};
图灵社区会员 StinkBC(StinkBC@gmail.com) 专享 尊重版权
156 第 6 章 面向对象的程序设计
//重设构造函数，只适用于 ECMAScript 5 兼容的浏览器
Object.defineProperty(Person.prototype, "constructor", {
enumerable: false,
value: Person
});*/

//------------------------------------------------------------------------

/**
 * 组合使用构造函数模式和原型模式
 * @param {Object} name
 * @param {Object} age
 * @param {Object} job
 */

function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;
	this.friends = ["Shelby", "Court"];
}

Person.prototype = {
	constructor: Person,
	sayName: function() {
		alert(this.name);
	}
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

person1.friends.push("Van");

alert(person1.friends); //"Shelby,Count,Van"
alert(person2.friends); //"Shelby,Count"
alert(person1.friends === person2.friends); //false
alert(person1.sayName === person2.sayName); //true

//------------------------------------------
/**
 * 动态原型模式
 * @param {Object} name
 * @param {Object} age
 * @param {Object} job
 */
function Person(name, age, job) {
	this.name = name;
	this.age = age;
	this.job = job;

	if (typeof this.sayName != function) {
		Person.prototype.sayName = function() {
			alert(this.name);
		};
	}
}
var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();



/**
 * 寄生构造函数模式
 */
function SpecialArray() {
	//创建数组
	var values = new Array();
	//添加值
	values.push.apply(values, arguments);
	//添加方法
	values.toPipedString = function() {
		return this.join("|");
	};
	//返回数组
	return values;
}
var colors = new SpecialArray("red", "blue", "green");
alert(colors.toPipedString()); //"red|blue|green

/**
 * 稳妥构造函数模式
 * @param {Object} name
 * @param {Object} age
 * @param {Object} job
 */
function Person(name, age, job) {
	//创建要返回的对象
	var o = new Object();
	//可以在这里定义私有变量和函数
	//添加方法
	o.sayName = function() {
		alert(name);
	};
	//返回对象
	return o;
}
var friend = Person("Nicholas", 29, "Software Engineer");
friend.sayName(); //"Nicholas"