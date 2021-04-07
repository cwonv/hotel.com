//한개 나오는 메뉴

$("nav > ul > li").mouseover(function(){
    $(this).find("ul.sub").stop().slideDown(200);
});
$("nav > ul > li").mouseout(function(){
    $(this).find("ul.sub").stop().slideUp(200);
});


//이미지 슬라이드

var currentIndex = 0;

setInterval(function(){
    if(currentIndex < 2){
        currentIndex++;
    }   else {
            currentIndex = 0;
        }
    var slidePosition = currentIndex * (-300)+"px";
    
    $(".slide").animate({ top: slisePosition},500);
},3000);



// 메뉴부분 전체
//
//$("nav > ul > li").mouseover(function(){
//    $("ul.sub").stop().slideDown(200);
//});
//$("nav > ul > li").mouseout(function(){
//    $("ul.sub").stop().slideUp(200);
//});



// 메뉴부분 브라우저 전체

//$("nav > ul > li").mouseover(function(){
//    $(".nav_bg, ul.sub").stop().slideDown(200);
//});
//$("nav > ul > li").mouseout(function(){
//    $(".nav_bg, ul.sub").stop().slideUp(200);
//});





//탭메뉴 공지사항 갤러리


    $(".cont_1 h2").click(function () {
        $(".cont_1 h2,.cont_1 ul").removeClass("on");
       $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });









