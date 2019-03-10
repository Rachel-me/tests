/**
 * Created by e on 2018/10/7.
 */
window.onload = function(){

    var nav = document.getElementById("sec_nav");
    var navTop = nav.offsetTop;

    waterFull("goods_content","box",4);

    window.onscroll = function(){
        if(checkLoad()){
            var dataArr = [
                {"src":"../img/more1.webp"},
                {"src":"../img/more2.webp"},
                {"src":"../img/more3.webp"},
                {"src":"../img/more4.webp"},
                {"src":"../img/more5.webp"},
                {"src":"../img/more6.webp"},
                {"src":"../img/more7.webp"},
                {"src":"../img/more8.jpg"},
                {"src":"../img/more9.jpg"},
                {"src":"../img/more10.jpg"},
                {"src":"../img/more11.webp"},
                {"src":"../img/more12.webp"}
            ];

            for(var i = 0 ; i < dataArr.length ; i ++){
                var newBox = document.createElement("div");
                newBox.className = "box";
                $("goods_content").appendChild(newBox);

                var newPic = document.createElement("div");
                newPic.className = "pic";
                newBox.appendChild(newPic);

                var newImg = document.createElement("img");
                newImg.src = dataArr[i].src;
                newPic.appendChild(newImg);
            }

            waterFull("goods_content","box",4);
        }



        var scroll_Top = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;

        if(scroll_Top >= navTop){
            nav.className = "nav-active sec-nav";
        }else{
            nav.className = "sec-nav";
        }
    }
}

/**
 * �ٲ���
 * @param parent
 * @param child
 * @param cols
 */
function waterFull(parent,child,cols){
    var allBox = $(parent).getElementsByClassName(child);
    var boxWidth = allBox[0].offsetWidth;

    var heightArr = [],boxHeight = 0,minBoxHeight = 0,minBoxIndex = 0;

    for(var i = 0 ; i < allBox.length ; i ++){
        boxHeight = allBox[i].offsetHeight;
        if(i < cols){ //��һ��
            heightArr.push(boxHeight);
        }else{  //ʣ����
            minBoxHeight = Math.min.apply(null,heightArr);
            minBoxIndex = getMinBoxIndex(heightArr,minBoxHeight);
            //�Ӻ��Ӷ�λ
            allBox[i].style.position = "absolute";
            allBox[i].style.left = boxWidth * minBoxIndex + "px";
            allBox[i].style.top = minBoxHeight + "px";
            //���¸߶�
            heightArr[minBoxIndex] += boxHeight;
        }
    }
}

function getMinBoxIndex(arr,val){
    for(var i = 0 ; i < arr.length ; i ++){
        if(arr[i] === val){
            return i;
        }
    }
}

function $(id){
    return typeof id === "string" ? document.getElementById(id) : null;
}

function checkLoad(){
    var allBox = document.getElementsByClassName("box");
    var lastBox = allBox[allBox.length - 1];

    var lastBoxDis = lastBox.offsetHeight * 0.5 + lastBox.offsetTop;
    var scrHeight = document.body.clientHeight || document.documentElement.clientHeight;

    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;

    return lastBoxDis <= scrHeight + scrollTop;
}
