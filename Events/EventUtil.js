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
    addHandler: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    getEvent: function(event) {
        return event ? event : window.event;
    },
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
}

//Testing demo

var btn = doucument.getElementById("myBtn");

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