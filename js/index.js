$(function(){
    run_photo();
    function run_photo (){
        var window_w = $(window).width();
        $(".run_ul>li>a>img").css({"width":window_w});
        $(".run_ul").css({"marginLeft":-window_w});
            $(".run_ul>li").on("touchstart",function(e){
            startX = e.originalEvent.targetTouches[0].pageX;
        })
        $(".run_ul>li").on("touchmove",function(e){
            var moveEndX = e.originalEvent.changedTouches[0].pageX;
            var index = $(this).index();
            var a = -window_w*(index+1);
            var b = -window_w*(index-1);
            var shifting = moveEndX-startX;
            if (shifting>0 && index>0) {
                 //right
                if (index == 1) {
                     $(".run_ul").stop().animate({"marginLeft":b},300,function(){
                        $(".run_ul").css({"marginLeft":  -3*window_w})}//改的数量

                        );
                    $(".contral span").eq(index-2).addClass('color').siblings().removeClass('color')
                }
                else{
                    $(".run_ul").stop().animate({"marginLeft":b},300);
                    $(".contral span").eq(index-2).addClass('color').siblings().removeClass('color')
                }
            }
            else if (shifting<0 && index<4){//改的数量
                //left
                if (index == 3) {//改的数量
                     $(".contral span").eq(0).addClass('color').siblings().removeClass('color');
                     $(".run_ul").stop().animate({"marginLeft":a},300,function(){
                        $(".run_ul").css({"marginLeft": - window_w})
                     })
                }
                else{
                    $(".run_ul").stop().animate({"marginLeft":a},300);
                    $(".contral span").eq(index).addClass('color').siblings().removeClass('color')
                }
            }
        })
        //图片轮播部分结束
    }


     $(".top-black").click(function(){
             apple_slideDown()
     })
    function apple_slideDown (){
 var a = $(".lll").css("display")
                if (a == "none") {
                    $(".lll").slideDown();
                    $(".lll>li").each(function(){
                    var a =$(this).attr("myAttr");
                    var b =a*0.07+"s";
                     $(this).children().css({"opacity":"0","animation-name":"myfirst","animation-delay":b})
                  })
                }
         else{
                     $(".lll").slideUp(800);
                      $(".lll>li").each(function(){
                    var c =$(this).attr("myAttr");
                    var d =0.6-c*0.07+"s";
                     $(this).children().css({"opacity":"1","animation-name":"my2","animation-delay":d})
                      })
                }
         }
})