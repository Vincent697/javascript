/**
 *  DOM node operate
 */

// 对 arguments 对象使用 Array.prototype.slice()方法可以将其转换为数组。
//而采用同样的方法，也可以将 NodeList 对象转换为数组

// 在 IE8 及之前版本中无效
var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes, 0);

/*除 IE8 及更早版本之外，这行代码能在任何浏览器中运行。由于 IE8 及更早版本将 NodeList
实现为一个 COM 对象，而我们不能像使用 JScript 对象那样使用这种对象，因此上面的代码会导致
错误。要想在 IE 中将 NodeList 转换为数组，必须手动枚举所有成员。下列代码在所有浏览器中都
可以运行：
*/
function convertToArray(nodes) {
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes, 0); //针对非 IE 浏览器
    } catch (ex) {
        array = new Array();
        for (var i = 0, len = nodes.length; i < len; i++) {
            array.push(nodes[i]);
        }
    }
    return array;
}

//操作节点
var returnedNode = someNode.appendChild(newNode);
alert(returnedNode == newNode); //true
alert(someNode.lastChild == newNode); //true

appendChild(); //插入到节点列表的末尾
insertBefore();//插入到指定的位置

replaceChild();  //方法接受的两个参数是：要插入的节点和要替换的节点