var ru = document.getElementById("rocketup");
var rImg = ru.getElementsByTagName('img');
var rImg0 = ru.getElementsByTagName('img')[0];
var rSpeed;
var rtimer;
ru.onclick = function () {
    var startPo = rImg[0].offsetTop+"px";
    rImg[0].style.zIndex = 1;
    clearInterval(rtimer);
    rtimer = setInterval(function () {
        rSpeed = Math.ceil(rImg[0].offsetTop/8);
        rImg[0].style.top = rImg[0].offsetTop -rSpeed +"px";
        if(!rImg[0].offsetTop){
            rImg[0].style.top = startPo;
            rImg[0].style.zIndex = 0;
            clearInterval(rtimer);
        }
    },30);
}