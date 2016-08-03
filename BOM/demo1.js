//window 在 ECMASCRIPT中 被作为Global对象 的角色

var age=19;
var name="vincent";
function getName(){
	return name;
}

//delete window.name;
console.log(window.name);

console.log(window.age);

console.log(window.getName());

//--------------------------------------

//这里会抛出错误，因为 oldValue 未定义
var newValue = oldValue;
//这里不会抛出错误，因为这是一次属性查询
//newValue 的值是 undefined
var newValue = window.oldValue;
