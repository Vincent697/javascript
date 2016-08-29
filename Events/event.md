# Javascript 事件

### 1、事件流

事件流描述的是从页面中接收事件的顺序。IE 和 Netscape 开发团队居然提出了差不多是完全相反的事件流的概念

   IE    的事件流是 -- 事件冒泡流 
Netscape 的事件流是 -- 事件捕获流

#### 1.1 事件冒泡

IE 的事件流叫事件冒泡（event bubbling）-----即事件开始时由最具体的元素（文档中嵌套层次最深
的那个节点）接收，然后逐级向上传播到较为不具体的节点（文档）。

```html
<!DOCTYPE html>
<html>
<head>
<title>Event Bubbling Example</title>
</head>
<body>
<div id="myDiv">Click Me</div>
</body>
</html>
```

如果你单击了页面中的 &lt;div&gt;元素，那么这个 click 事件会按照如下顺序传播：

```
(1) <div>
(2) <body>
(3) <html>
(4) document
```
也就是说， click 事件首先在&lt;div&gt;元素上发生，而这个元素就是我们单击的元素。然后， click
事件沿 DOM 树向上传播，在每一级节点上都会发生，直至传播到 document 对象。图 13-1 展示了事件
冒泡的过程。

#### 1.2 事件捕获

事件捕获（event capturing）。 事件捕获的思想是不太具体的节点应该更早接收到事件，而最具体的节点应该最后接收到事件。事件捕获的用意在于在事件到达预定目标之前捕获它。

```
(1) document
(2) <html>
(3) <body>
(4) <div>
```

在事件捕获过程中， document 对象首先接收到 click 事件，然后事件沿 DOM 树依次向下，一直
传播到事件的实际目标，即&lt;div&gt;元素。图 13-2 展示了事件捕获的过程。

#### 1.3 DOM 事件流

“ DOM2级事件”规定的事件流包括三个阶段：事件捕获阶段、处于目标阶段和事件冒泡阶段。首
先发生的是事件捕获，为截获事件提供了机会。然后是实际的目标接收到事件。最后一个阶段是冒泡阶
段，可以在这个阶段对事件做出响应。以前面简单的 HTML 页面为例，单击&lt;div&gt;元素会按照图13-3所
示顺序触发事件。

>IE9、 Opera、 Firefox、 Chrome 和 Safari 都支持 DOM 事件流； IE8 及更早版本不
支持 DOM 事件流。

### 2、事件处理程序

事件就是用户或浏览器自身执行的某种动作。诸如click、load和mouseover，都是事件的名字，而响应某个事件的函数就叫做事件处理程序（或事件侦听器）。事件处理程序的名字以 " on " 开头，因此click 事件的事件处理程序就是 onclick， load 事件的事件处理程序就是 onload。为事件指定处理程序的方式有好几种。

#### 2.1 HTML事件处理程序

某个元素支持的每种事件，都可以使用一个与相应事件处理程序同名的 HTML 特性来指定。这个
特性的值应该是能够执行的 JavaScript 代码。例如，要在按钮被单击时执行一些 JavaScript，可以像下面
这样编写代码：

```html
<input type="button" value="Click Me" onclick="alert('Clicked')" />
```

当单击这个按钮时，就会显示一个警告框。这个操作是通过指定 onclick 特性并将一些 JavaScript
代码作为它的值来定义的。由于这个值是 JavaScript，因此不能在其中使用未经转义的 HTML 语法字符，
例如和号（&）、双引号（""）、小于号（<）或大于号（>）。为了避免使用 HTML 实体，这里使用了单
引号。如果想要使用双引号，那么就要将代码改写成如下所示：

```html
<input type="button" value="Click Me" onclick="alert(&quot;Clicked&quot;)" />
```

在 HTML 中定义的事件处理程序可以包含要执行的具体动作，也可以调用在页面其他地方定义的
脚本，如下面的例子所示：

```html
<script type="text/javascript">
function showMessage(){
alert("Hello world!");
}
</script>
<input type="button" value="Click Me" onclick="showMessage()" />
```

在这个例子中，单击按钮就会调用 showMessage()函数。这个函数是在一个独立的&lt;script&gt;元素
中定义的，当然也可以被包含在一个外部文件中。事件处理程序中的代码在执行时，有权访问全局作用
域中的任何代码。
这样指定事件处理程序具有一些独到之处。首先，这样会创建一个封装着元素属性值的函数。这个
函数中有一个局部变量 event，也就是事件对象（本章稍后讨论）：

```html
<!-- 输出 "click" -->
<input type="button" value="Click Me" onclick="alert(event.type)">
```

通过 event 变量，可以直接访问事件对象，你不用自己定义它，也不用从函数的参数列表中读取。
在这个函数内部， this 值等于事件的目标元素，例如：

```html
<!-- 输出 "Click Me" -->
<input type="button" value="Click Me" onclick="alert(this.value)">
```

关于这个动态创建的函数，另一个有意思的地方是它扩展作用域的方式。在这个函数内部，可以像
访问局部变量一样访问 document 及该元素本身的成员。这个函数使用 with 像下面这样扩展作用域：

```javascript
function(){
    with(document){
        with(this){
            //元素属性值
        }
    }
}
```

如此一来，事件处理程序要访问自己的属性就简单多了.


#### 2.2 DOM0级事件处理程序

通过 JavaScript 指定事件处理程序的传统方式，就是将一个函数赋值给一个事件处理程序属性。这
种为事件处理程序赋值的方法是在第四代 Web 浏览器中出现的，而且至今仍然为所有现代浏览器所支
持。原因一是简单，二是具有跨浏览器的优势。要使用 JavaScript 指定事件处理程序，首先必须取得一
个要操作的对象的引用。
每个元素（包括 window 和 document）都有自己的事件处理程序属性，这些属性通常全部小写，
例如 onclick。将这种属性的值设置为一个函数，就可以指定事件处理程序，如下所示：

```javascript
var btn = document.getElementById("myBtn");
btn.onclick = function(){
    alert("Clicked");
};
```


#### 2.3 DOM 2 级事件处理程序

“DOM 2 级事件”定义了两个方法，用于处理指定和删除事件处理程序的操作：

addEventListener() 和 removeEventListener()

它们都接收 3个参数 ['要处理的事件名','作为事件处理程序的函数','一个布尔值']

最后这个布尔值参数：
如果是 true，表示在捕获阶段调用事件处理程序；
如果是 false，表示在冒泡阶段调用事件处理程序。

> 使用addEventListener添加的事件处理程序 必须使用removeEventListener来移除
有个问题： 当addEventListener 传入的是一个匿名函数的时候，将无法移除这个事件相关的处理程序

我们使用 addEventListener()添加了一个事件处理程序。虽然调用 removeEventListener()时看似使用了相同的参数，但实际上，第二个参数与传入 addEventListener()中
的那一个是完全不同的函数。而传入 removeEventListener()中的事件处理程序函数必须与传入

```javascript
addEventListener()中的相同，如下面的例子所示。
var btn = document.getElementById("myBtn");
var handler = function(){
alert(this.id);
};
btn.addEventListener("click", handler, false);
//这里省略了其他代码
btn.removeEventListener("click", handler, false); //有效！
```

重写后的这个例子没有问题，是因为在 addEventListener()和 removeEventListener()中使
用了相同的函数。

大多数情况下，都是将事件处理程序添加到事件流的冒泡阶段，这样可以最大限度地兼容各种浏览器。最好只在需要在事件到达目标之前截获它的时候将事件处理程序添加到捕获阶段。如果不是特别需要，我们不建议在事件捕获阶段注册事件处理程序。

> IE9、 Firefox、 Safari、 Chrome 和 Opera 支持 DOM2 级事件处理程序。