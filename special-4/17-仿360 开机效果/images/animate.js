// 缓动动画封装
function animate(ele,json,fn) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function(){
        var bool = true;
        for (var k in json) {
            var leader = parseInt(getStyle(ele,k)) || 0;
            var step = ( json[k] - leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            ele.style[k] = leader + "px";
            if (json[k] !== leader) {
                bool = false;
            }
        }
        if (bool) {
            clearInterval(ele.timer);
            if (fn) {
                fn();
            }
        }
    },30)
}
function getStyle(ele,attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele,null)[attr];
    }
    return ele.currentStyle[attr];
}