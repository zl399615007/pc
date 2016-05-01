;(function (){
    var arr=["music.163.com/Images/aaa.png",
        "music.163.com/Images/bbb.png",
        "music.163.com/Images/ccc.png",
        "music.163.com/Images/ddd.png","music.163.com/Images/eee.png","music.163.com/Images/fff.png","music.163.com/Images/ggg.png"];
    var backArr=["#FFF5F6","#B4B4B4","#F4F4F4","#DBEBEA","#C88072","#87ADFF","#090909"];
    var carousel=document.getElementById("carousel");
    var oImg=document.getElementsByClassName("ban")[0].getElementsByTagName("img")[0];
    var btns=document.getElementsByClassName("btn")[0].getElementsByTagName("a");
    var left=document.getElementsByClassName("left")[0],right=document.getElementsByClassName("right")[0];
    for(var i=0;i<btns.length;i++) {
        btns.item(i).n=i;
        btns[i].onclick=function (){
            oImg.src=arr[this.n];
            carousel.style.backgroundColor=backArr[this.n];
            setp=this.n;
            clearInterval(timer);
            timer=window.setTimeout(function (){
                timer=window.setInterval(auto,3000)
            },2000);
            var others=Dom.siblings(this);
            this.className="doog zlt";
            for(var j=0;j<others.length;j++){
                others[j].className="doog";
            }
        }
    }
    var setp=0;
    function auto(){
        if(setp==6){
            setp=0;
            current(0);
            carousel.style.backgroundColor=backArr[0];
        }
        else {
            setp++;
        }
        leftN=setp;
        current(setp);
        oImg.src=arr[setp];
        carousel.style.backgroundColor=backArr[setp];
    }
    var timer=window.setInterval(auto,3000);
    function current(n){
        for(var i=0;i<btns.length;i++){
            btns[i].className="doog";

        }
        btns[n].className="doog zlt";

    }

    var leftN=0;
    left.onclick=function (){
        leftN--;
        if(leftN<0){
            leftN=6;
            current(6);
            oImg.src=arr[6];
            carousel.style.backgroundColor=backArr[6];
        }
        setp=leftN;
        clearInterval(timer);
        timer=window.setTimeout(function (){
            timer=window.setInterval(auto,3000)
        },2000);

        current(leftN);
        oImg.src=arr[leftN];
        carousel.style.backgroundColor=backArr[leftN];
    };

    right.onclick=function (){
        if(leftN==6){
            leftN=0;
            current(0);
            carousel.style.backgroundColor=backArr[0];
        }
        else {
            leftN++;
        }
        setp=leftN;
        clearInterval(timer);
        timer=window.setTimeout(function (){
            timer=window.setInterval(auto,3000)
        },2000);
        carousel.style.backgroundColor=backArr[leftN];
        current(leftN);
        oImg.src=arr[leftN]
    }
}());

