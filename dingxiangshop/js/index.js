/**
 * Created by e on 2018/10/7.
 */
window.onload = function(){
    var nav = document.getElementById("sec_nav");
    var navTop = nav.offsetTop;

    window.onscroll = function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;

        if(scrollTop >= navTop){
            nav.className = "nav-active sec-nav";
        }else{
            nav.className = "sec-nav";
        }
    }
}
