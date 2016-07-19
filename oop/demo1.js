/*
 * author by vincent
 * 
 */

//create a object person

//------创建一个 Object的实例 
var person = new Object();
person.name = "vincent";
person.age = "";
person.sayName=function(){
	return this.name;
}

// 使用对象字面的的方式
var people={
	name: 'vincent',
	age : '20',
	sayName: function(){
		return this.name;
	}
};

//__________________________________

var book={
	_year: 2016,
	edition: 3
}

Object.defineProperty(book,"year",{
	__defineGetter__()
})