const nav_back = document.querySelector('.nav_container');
        const scrolHeaderLine = document.getElementsByClassName('nav_line')[0];
        const logoMoveDiv = document.getElementsByClassName('logo_wrap')[0];
        const logoImgMove = document.querySelector('.logo_wrap img');
        const snsHeaderMove = document.querySelector('.scroll_sns ul');
        const MenuListMargin = document.querySelector('.main_nav .menu_wrap');
        const headTriangle = document.querySelector('.header_triangle');
        document.addEventListener('scroll',headerTop);

var prewScrollPos = 0;
var currentScrollPos =0;

function headerTop() {
   
    prewScrollPos = currentScrollPos;
 
    currentScrollPos = window.pageYOffset;
    var scrollMove = currentScrollPos -prewScrollPos;
   
    var nowScrollPosY = window.scrollY;

    if(scrollMove > 0) {
      scrolHeaderLine.style="animation: headerAni 1s; width :100%";
      logoMoveDiv.style="border-radius:0; margin-left:-15px;";
      logoImgMove.style="padding-right:40px";
      nav_back.style =" tranisiton:1s; background-color:#030033; box-shadow:0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%), 0 3px 5px -1px rgb(0 0 0 / 30%);" 
      MenuListMargin.style="margin-bottom:5px;"
      snsHeaderMove.style="top:3px;"
      headTriangle.style=" opacity: 1;  left: 163px;"

    } else if (nowScrollPosY < 10) {
      scrolHeaderLine.style="animation: headerAniBack 1s;   width:0%"
      logoMoveDiv.style="border-radius:0 0 15px 15px; margin-left:0px; tranisiton:1s;";
      logoImgMove.style="padding-right:15px";
      snsHeaderMove.style="top:-100px;"
      MenuListMargin.style="margin-bottom:10px;"
      nav_back.style ="background-color:transparent;"
      headTriangle.style=" opacity: 0; "
    }
}