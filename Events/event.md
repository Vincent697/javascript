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



#### 2.4 IE事件处理程序

IE 实现了与 DOM 中类似的两个方法： attachEvent()和 detachEvent()。这两个方法接受相同
的两个参数：事件处理程序名称与事件处理程序函数。由于 IE8 及更早版本只支持事件冒泡，所以通过
attachEvent()添加的事件处理程序都会被添加到冒泡阶段。
要使用 attachEvent()为按钮添加一个事件处理程序，可以使用以下代码。

```javascript
var btn = document.getElementById("myBtn");
btn.attachEvent("onclick", function(){
    alert("Clicked");
});
```

> 注意， attachEvent()的第一个参数是"onclick"，而非 DOM 的 addEventListener()方法中
的"click"。

在 IE 中使用 attachEvent()与使用 DOM0 级方法的主要区别在于事件处理程序的作用域。在使
用 DOM0 级方法的情况下，事件处理程序会在其所属元素的作用域内运行；在使用 attachEvent()方
法的情况下，事件处理程序会在全局作用域中运行，因此 this 等于 window。来看下面的例子。


在编写跨浏览器的代码时，牢记这一区别非常重要。
与 addEventListener()类似， attachEvent()方法也可以用来为一个元素添加多个事件处理程
序。来看下面的例子。

```javascript
var btn = document.getElementById("myBtn");

btn.attachEvent("onclick", function(){
    alert("Clicked");
});

btn.attachEvent("onclick", function(){
    alert("Hello world!");
});
```

这里调用了两次 attachEvent()，为同一个按钮添加了两个不同的事件处理程序。不过，与 DOM
方法不同的是，这些事件处理程序不是以添加它们的顺序执行，而是以相反的顺序被触发。单击这个例
子中的按钮，首先看到的是"Hello world!"，然后才是"Clicked"。

> 支持 IE 事件处理程序的浏览器有 IE 和 Opera。


#### 2.5 跨浏览器的事件处理程序

为了以跨浏览器的方式处理事件，不少开发人员会使用能够隔离浏览器差异的 JavaScript 库，还有
一些开发人员会自己开发最合适的事件处理的方法。自己编写代码其实也不难，只要恰当地使用能力检测即可（能力检测在第 9 章介绍过）。要保证处理事件的代码能在大多数浏览器下一致地运行，只需关
注冒泡阶段。

代码：-------- EventUtil.js


> 它的职责是视情况分别使用 DOM0 级方法、 DOM2 级方法或 IE 方法来添加事件

addHandler()和 removeHandler()没有考虑到所有的浏览器问题，例如在 IE 中的作用域问题。
不过，使用它们添加和移除事件处理程序还是足够了。此外还要注意， DOM0 级对每个事件只支持一
个事件处理程序。好在，只支持 DOM0 级的浏览器已经没有那么多了，因此这对你而言应该不是什么
问题。


### 3、事件对象

在触发 DOM 上的某个事件时，会产生一个事件对象 event，这个对象中包含着所有与事件有关的
信息。包括导致事件的元素、事件的类型以及其他与特定事件相关的信息。例如，鼠标操作导致的事件
对象中，会包含鼠标位置的信息，而键盘操作导致的事件对象中，会包含与按下的键有关的信息。所有
浏览器都支持 event 对象，但支持方式不同。

#### 3.1 DOM中的事件对象

兼容DOM 的浏览器会将一个 event 对象传入到事件处理程序中，无论指定事件处理程序时使用什么方法（DOM 0级或DOM 2级），都会传入event 对象。

```javascript
var btn = document.getElementById("myBtn");

btn.onclick = function(event){
    alert(event.type); //"click"
};

btn.addEventListener("click", function(event){
    alert(event.type); //"click"
}, false);
```

event 对象包含与创建它的特定事件有关的属性和方法

bubbles               Boolean       只读        表明事件是否冒泡
cancelable            Boolean       只读        表明是否可以取消事件的默认行为
currentTarget         Element       只读        其事件处理程序当前正在处理事件的那个元素
defaultPrevented      Boolean       只读        为 true 表 示 已 经 调 用 了 preventDefault()
（DOM3级事件中新增）
detail                Integer       只读        与事件相关的细节信息
eventPhase            Integer       只读        调用事件处理程序的阶段： 1表示捕获阶段， 2表
示“处于目标”， 3表示冒泡阶段
preventDefault()      Function      只读        取消事件的默认行为。如果cancelable是true，则可以使用这个方法
stopImmediatePropagation() Function 只读        取消事件的进一步捕获或冒泡，同时阻止任何
事件处理程序被调用（DOM3级事件中新增）
stopPropagation()     Function      只读        取消事件的进一步捕获或冒泡。如果bubbles
为true，则可以使用这个方法
target                Element       只读        事件的目标
trusted               Boolean       只读        为true表示事件是浏览器生成的。为false表示事件是由开发人员通过 JavaScript创建的（DOM3级事件中新增）
type                  String        只读        被触发的事件的类型
view                  AbstractView  只读        与事件关联的抽象视图。等同于发生事件的window对象

> 在事件处理程序内部，对象this始终等于currentTarget的值，而target则只包含事件的实际目标。如果直接将事件处理程序指定给了目标元素，则 this、 currentTarget 和 target 包含相同的值。

```javascript
var btn = document.getElementById("myBtn");
btn.onclick = function(event){
    alert(event.currentTarget === this); //true
    alert(event.target === this); //true
};
```
event.preventDefault();   //阻止特定事件的默认行为

event.stopPropagation();  用于立即停止事件在DOM层次中的传播，即取消进一步的事件捕获或冒泡

#### 3.2 IE中的事件对象

在使用 DOM 0 级方法添加事件处理程序时，event对象 作为window 对象的一个属性存在。

使用 attachEvent() 添加的，那么就会有一个 event 对象作为参数被传入事件处理程序函数中


cancelBubble Boolean 读/写 默认值为false，但将其设置为true就可以取消事件冒泡（与DOM中
的stopPropagation()方法的作用相同）

returnValue Boolean 读/写 默认值为true，但将其设置为false就可以取消事件的默认行为（与
DOM中的preventDefault()方法的作用相同）

srcElement Element 只读 事件的目标（与DOM中的target属性相同）

type String 只读 被触发的事件的类型

因为事件处理程序的作用域是根据指定它的方式来确定的，所以不能认为 this 会始终等于事件目
标。故而，最好还是使用 event.srcElement 比较保险。例如：

```javascript
var btn = document.getElementById("myBtn");

btn.onclick = function(){
    alert(window.event.srcElement === this); //true
};

btn.attachEvent("onclick", function(event){
    alert(event.srcElement === this); //false
});
```

#### 3.3 跨浏览器的事件对象

虽然 DOM 和 IE 中的 event 对象不同，但基于它们之间的相似性依旧可以拿出跨浏览器的方案来。
IE 中 event 对象的全部信息和方法 DOM 对象中都有，只不过实现方式不一样。不过，这种对应关系
让实现两种事件模型之间的映射非常容易。可以对前面介绍的 EventUtil 对象加以增强，添加如下方
法以求同存异。

代码 ----- EventUtil.js


### 4、事件类型

DOM 3 级事件 规定了以下几类事件

- UI (user interface)事件 当用户与页面上的元素交互时触发；
- 焦点事件，当元素获得或失去焦点时触发；
- 鼠标事件，当用户通过鼠标在页面上执行操作时触发；
- 滚轮事件，当使用鼠标滚轮（或类似设备）时触发
- 文本事件，当在文档中输入文本是触发；
- 键盘事件，当用户通过键盘在页面上执行操作时触发
- 合成事件，当为IME(Input Method Editor,输入法编辑器)输入字符时触发;
- 变动事件（mutation）事件，当底层DOM结构发生变化是触发
- 变动名称事件，当元素或属性名变动时触发。此类事件已经被废弃，没有任何浏览器实现它们。

#### 4.1 UI事件

（1）load：当页面完全加载后在 window 上面触发，当所有框架都加载完毕时在框架集上面触发，当图像加载完毕时在&lt;img&gt;元素上面触发，或者当嵌入的内容加载完毕时在&lt;object&gt;元素上面触发。

（2）unload：当页面完全卸载后在 window 上面触发，当所有框架都卸载后在框架集上面触发，或者当嵌入的内容卸载完毕后在&lt;object&gt;元素上面触发。

（3）abort：在用户停止下载过程时，如果嵌入的内容没有加载完，则在&lt;object&gt;元素上面触发。

（4）error：当发生 JavaScript 错误时在 window 上面触发，当无法加载图像时在&lt;img&gt;元素上面触发，当无法加载嵌入内容时在&lt;object&gt;元素上面触发，或者当有一或多个框架无法加载时在框架集上面触发。第 17章将继续讨论这个事件。

（5）select：当用户选择文本框（&lt;input&gt;或&lt;texterea&gt;）中的一或多个字符时触发。第 14 章将
继续讨论这个事件。

（6）resize：当窗口或框架的大小变化时在 window 或框架上面触发。

（7）scroll：当用户滚动带滚动条的元素中的内容时，在该元素上面触发。 &lt;body&gt;元素中包含所加
载页面的滚动条。

> 要确认浏览器是否支持DOM2级事件规定的HTML事件，可以使用下面的代码
var isSupported = document.implementation.hasFeature("HTMLEvents", "2.0");
//要确定浏览器是否支持“ DOM3 级事件”定义的事件
var isSupported = document.implementation.hasFeature("UIEvent", "3.0");

> 根据“ DOM2 级事件”规范，应该在 document 而非 window 上面触发 load 事件。但是，所有浏览器都在 window 上面实现了该事件，以确保向后兼容。