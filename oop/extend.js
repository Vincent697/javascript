/**
 * Author by vincent
 * e-mail:1312065793@qq.com
 */

//javascript 中的继承

/**
 * 1. 原型链
 */
function SuperType() {
	this.property = true;
}

SuperType.property.getSuperValue=function(){
	return this.property;
}

function SubType() {
	this.subProperty = false;
}

//实现了继承
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
	return this.subproperty;
};

var instance = new SubType();
alert(instance.getSuperValue()); //true

/**
 * 2.借用构造函数  --伪造对象或经典继承
 */
function SuperType() {
	this.colors = ["red", "blue", "green"];
}

function SubType() {
	//继承了 SuperType
	SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
var instance2 = new SubType();
alert(instance2.colors); //"red,blue,green"

/**
 * 3.组合继承 -- 伪经典继承 
 */
function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
	alert(this.name);
};

function SubType(name, age) {
	//继承属性
	SuperType.call(this, name);
	this.age = age;
}
//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
	alert(this.age);
};
var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29
var instance2 = new SubType("Greg", 27);
alert(instance2.colors); //"red,blue,green"
instance2.sayName(); //"Greg";
instance2.sayAge(); //27

/**
 * 4.原型式继承
 */
var person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends); //"Shelby,Court,Van,Rob,Barbie"

var person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

alert(person.friends); //"Shelby,Court,Van,Rob,Barbie"

/*ECMAScript 5 通过新增 Object.create()方法规范化了原型式继承。这个方法接收两个参数：一
个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象。在传入一个参数的情况下，
Object.create()与 object()方法的行为相同。*/

/**
 * 5.寄生式继承
 */

function createAnother(original) {
	var clone = object(original); //通过调用函数创建一个新对象
	clone.sayHi = function() { //以某种方式来增强这个对象
		alert("hi");
	};
	return clone; //返回这个对象
}

var person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi(); //"hi"
/**
 * 6.寄生组合式继承
 */
function inheritPrototype(subType, superType) {
	var prototype = object(superType.prototype); //创建对象
	prototype.constructor = subType; //增强对象
	subType.prototype = prototype; //指定对象
}

function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
	alert(this.name);
};

function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
	alert(this.age);
};
//开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。