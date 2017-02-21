mz = 0;
function setDrag(obj) {
    obj.style.position = "absolute";
    obj.onmousedown = function (e) {
        var disX = e.clientX - obj.offsetLeft;
        var disY = e.clientY - obj.offsetTop;
        document.onmousemove = function (e) {
            obj.style.zIndex = mz++;
            obj.style.left = e.clientX - disX + "px";
            obj.style.top = e.clientY - disY + "px";
        }
        document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;

        }
        return false;
    }
}
var icou = document.getElementById('icou');
var icoli = icou.getElementsByTagName('li');
var aPos = [];
for (var i = 0; i < icoli.length; i++) {
    aPos[i] = {
        left: icoli[i].offsetLeft,
        top: icoli[i].offsetTop
    }
}
for (var i = 0; i < icoli.length; i++) {
    icoli[i].style.zIndex = mz++;
    icoli[i].style.left = aPos[i].left + "px";
    icoli[i].style.top = aPos[i].top + "px";
    icoli[i].style.position = "absolute";
    icoli[i].style.margin = '0';
}


for(var i = 0;i<icoli.length;i++){
    setDrag(icoli[i]);
}