/**
 * date: 2016.8.29
 * DES: 事件流
 */

var btn=doucument.getElementById("btn");

var handler=function(){

}

// 给btn添加一个事件处理程序
btn.addEventListener("click",handler,false);

// 给btn添加一个事件处理程序
btn.removeEventListener("click",handler,false);

// IE 中的事件处理程序

//attachEvent() 和detachEvent() 都接收相同的两个参数： 事件处理程序名称与事件处理函数

// 给btn添加一个事件处理程序
btn.attachEvent("onclick",handler);

// 给btn添加一个事件处理程序
btn.detachEvent("onclick",handler);


//demo  通过一个函数处理多个事件时  可以使用  事件对象（event) type 属性

var btn2=document.getElementById("mybtn2");

var handler2=function(event){
    
    switch (event.type) {
        case "click":
            // statements_1
            alert("clciked");
            break;
        case "mouseover":
            // statements_1
            event.target.style.backgroundColor="red";
            break;
        case "mouseout":
            // statements_1
            event.target.style.backgroundColor="";
            break;
        default:
            // statements_def
            break;
    }
}
btn2.onclick=handler2;

btn2.onmouseover=handler2;

btn2.onmouseout=handler2;