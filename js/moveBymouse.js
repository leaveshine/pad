var mouse = document.getElementById('mouse');
var mDiv = mouse.getElementsByTagName('div');
document.onmousemove = function (e) {
    for (var i = mDiv.length-1; i>0; i--) {
        mDiv[i].style.left = mDiv[i-1].style.left;
        mDiv[i].style.top = mDiv[i-1].style.top;
    }
    mDiv[0].style.left = e.clientX +1+ "px";
    mDiv[0].style.top = e.clientY +1+ "px";
    // cancelBubble(this)
}