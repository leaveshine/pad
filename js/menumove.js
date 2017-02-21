window.onload = function(){
    var utopos = document.getElementById("utopos");
    var topmenu = document.getElementById('topmenu');
    var timer;
    topmenu.onmouseover= function () {
        clearInterval(timer);
        //alert(topmenu.offsetTop)
        timer = setInterval(function () {
            if(topmenu.offsetTop>=-20){
                topmenu.style.top = "0%";
                clearInterval(timer);
            }else{
                topmenu.style.top = topmenu.offsetTop+2+"px";
            }
        },1);
    }
    topmenu.onmouseout= function () {
        clearInterval(timer);
        timer = setInterval(function () {
            if(topmenu.offsetTop<=-565){
                topmenu.style.top ="-86%"
                clearInterval(timer)
            }else{
                topmenu.style.top = topmenu.offsetTop-5+"px";
            }
        },1);
    }
}
var time = [];
var t;
function clock() {
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    time[0] = parseInt(hours / 10);
    time[1] = parseInt(hours % 10);
    time[2] = parseInt(min / 10);
    time[3] = parseInt(min % 10);
    time[4] = parseInt(sec / 10);
    time[5] = parseInt(sec % 10);
    t=""+time[0]+time[1]+":"+time[2]+time[3]+":"+time[4]+time[5];
    topmenu_1.innerHTML = t;
    setTimeout(clock,10);
}
clock();