$(".family_list").hide();
$(".family_btn").click(function(){
 $(".family_list").slideToggle(100);
})

$(".sub_bg").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".sub_bg").stop().slideDown(300);
})
$(".menu>li").mouseout(function(){
 $(this).children(".sub_bg").stop().slideUp(300);
})

$(".m_nav").hide();
$(".m_btn").click(function(){
  $(".m_nav").fadeIn(100);
  $(".m_menu_box").addClass("active")
})
$(".m_close,.m_nav_bg").click(function(){
  $(".m_nav").fadeOut(300);
  $(".m_menu_box").removeClass("active")
  $(".m_sub_bg").hide(); // 추가
})

$(".m_sub_bg").hide();
$(".m_menu>li").click(function(){
  $(this).children(".m_sub_bg").show();
});
$(".m_sub_close").click(function(){
  $(".m_sub_bg").fadeOut(100);
})

/*main slide */
$(".main_wrap>img:nth-child(1)~").hide();
let i=0;
function slide(){
  i=i==6?0:i+1;
  $(".main_wrap>img").eq(i).show();
  $(".main_wrap>img").eq(i).siblings().hide();
}
setInterval(slide,1000);  //0.5초 마다 slide함수 호출

//스크롤 애니메이션
AOS.init();  

let lastTop=0 ;
$(window).scroll(function(){
  let top=$(this).scrollTop();

  if (top>lastTop){
    $(".header").css({'margin-top':'-100px'}) //header transition 속성 작성
  }else{
    $(".header").css({'margin-top':'0px'})
  }
  lastTop=top;

  if(top>10){
    $(".maintitle_top").css({"padding-right":top,"transform":"scale(1.3)", "color":'gray' })
    $(".maintitle_bottom").css({"padding-left":top,"transform":"scale(1.3)", "color":'gray'  })
  }else{
    $(".maintitle_top").css({"padding-right":top,"transform":"scale(1)", "color":'#000' })
    $(".maintitle_bottom").css({"padding-left":top,"transform":"scale(1)", "color":'#000'  })
  }



})


$(".on").click(function(){
  $(".main").addClass("main_active")
  $(".main>h2").addClass("maintitle_top_active")
  $(".off").addClass("on_active")
})

$(".off").click(function(){
  $(".main").removeClass("main_active")
  $(".main>h2").removeClass("maintitle_top_active")
  $(".off").removeClass("on_active")
})



