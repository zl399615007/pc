var input=document.getElementById("search");
var showlist=document.getElementsByClassName("showlist")[0];
input.onfocus=function (){
    if(this.value==this.defaultValue){
        this.value="";
    }else {
        showlist.style.display="block"
    }

};
var inputstr="";
input.onblur=function() {
    var reg = / +/g;
    /*如果输入内容是空的则显示默认内容*/
   if(!this.value.replace(reg, "").length){
       this.value=this.defaultValue
   }else {
       inputstr=this.value
   }
    showlist.style.display="none"
};

/*松开键盘->显示showlist*/
input.onkeyup=function (){
    var reg = / +/g;
    /*如果输入内容是空的则显示默认内容*/
    if(!this.value.replace(reg, "").length){
        showlist.style.display="none";
    }else {
    showlist.style.display="block";
    }
};
