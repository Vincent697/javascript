/**
 * 移动设备触摸事件
 */


//触摸事件的例子
function handleTouchEvent(event) {
    //只跟踪一次触摸
    if (event.touches.length == 1) {
        var output = document.getElementById("output");
        switch (event.type) {
            case "touchstart":
                output.innerHTML = "Touch started (" + event.touches[0].clientX +
                    "," + event.touches[0].clientY + ")";
                break;
            case "touchend":
                output.innerHTML += "<br>Touch ended (" +
                    event.changedTouches[0].clientX + "," +
                    event.changedTouches[0].clientY + ")";
                break;
            case "touchmove":
                event.preventDefault(); //阻止滚动
                output.innerHTML += "<br>Touch moved (" +
                    event.changedTouches[0].clientX + "," +
                    event.changedTouches[0].clientY + ")";
                break;
        }
    }
}
EventUtil.addHandler(document, "touchstart", handleTouchEvent);
EventUtil.addHandler(document, "touchend", handleTouchEvent);
EventUtil.addHandler(document, "touchmove", handleTouchEvent);



//手势事件的例子

function handleGestureEvent(event) {
    var output = document.getElementById("output");
    switch (event.type) {
        case "gesturestart":
            output.innerHTML = "Gesture started (rotation=" + event.rotation +
                ",scale=" + event.scale + ")";
            break;
        case "gestureend":
            output.innerHTML += "<br>Gesture ended (rotation=" + event.rotation +
                ",scale=" + event.scale + ")";
            break;
        case "gesturechange":
            output.innerHTML += "<br>Gesture changed (rotation=" + event.rotation +
                ",scale=" + event.scale + ")";
            break;
    }
}
document.addEventListener("gesturestart", handleGestureEvent, false);
document.addEventListener("gestureend", handleGestureEvent, false);
document.addEventListener("gesturechange", handleGestureEvent, false);