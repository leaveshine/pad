utopos.onmousemove = function (e) {
    var qnav = document.getElementById('qnav');
    var oImg = qnav.getElementsByTagName('img');
    for(var i = 0;i<oImg.length;i++){
        var x = oImg[i].offsetLeft+oImg[i].offsetWidth/2;
        var y = oImg[i].offsetTop+oImg[i].offsetHeight/2+qnav.offsetTop+utopos.offsetTop;
        var distance = Math.sqrt((e.clientX - x)*(e.clientX - x)+(y- e.clientY)*(y- e.clientY));
        distance =1-(distance/400);
        distance = distance*85;
        if(distance<43){
            distance = 43;
        }
        //console.log(distance)
        oImg[i].width = distance;
    }
}
