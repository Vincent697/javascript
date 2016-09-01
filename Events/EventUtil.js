/**
 * Author by Vincent
 * Date: 2016.8.30
 */

var EventUtil = {
    /**
     * [addHandler 添加事件处理程序]
     * @param {[type]} element [要操作的元素]
     * @param {[type]} type    [事件名称]
     * @param {[type]} handler [事件处理程序]
     */
    addHandler: function(element, type, handler) { //添加事件处理程序
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function(element, type, handler) { //移除事件处理程序
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    getEvent: function(event) { //获取事件对象
        return event ? event : window.event;
    },
    getTarget: function(event) { //获取目标元素
        return event.target || event.srcElement;
    },
    preventDefault: function(event) { //阻止默认行为
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function(event) { //停止事件冒泡
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getRelatedTarget: function(event) { //获得相关元素
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    },
    getButton: function(event) { //获取鼠标按钮值
        if (document.implementation.hasFeature("MouseEvent", "2.0")) {
            return event.button;
        } else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    getWheelDelta: function(event) {  //获取 鼠标滚轮的 wheelDelta 值  - 向下滚动    + 向上滚动
        if (event.wheelDelta) {
            //return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta); //opera检测
            return event.wheelDelta;
        } else {
            return -event.detail * 40;
        }
    },
    getCharCode: function(event) {  //取得字符编码
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }
}

/*
//Testing demo

var btn = document.getElementById("myBtn");

var handler = function() {
    alert("click");
}

// 添加事件处理程序
EventUtil.addHandler(btn, "click", handler);
// 移除事件处理程序
EventUtil.removeHandler(btn, "click", handler);

//Testing demo
btn.onclick = function(event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
};

*/