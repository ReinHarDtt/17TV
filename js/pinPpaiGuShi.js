$(function () {
    $('.banner-nav li').each(function() {
        pinPai.setWidth($(this))
    })
    $('.banner-nav').hammer().bind("pan", function(){
        pinPai.panEvent(event)
    }).bind('panend' , function () {
        pinPai.list = []
    })
    $('.banner-nav li').on('click', function() {
        pinPai.getRlin($(this))
    })
    //点击变色开始
    $("#pinPaiGuShi .banner-nav li").bind('click',function(){
        $(this).addClass("Selected").siblings().removeClass("Selected");
    })
        //点击变色结束]

        //点击切换图片开始
        $(".banner-nav li").click(function(){
            var $index = $(this).index();
            var run_this = $(".photo_box li").eq($index);
            run_this.show().siblings().hide()
        })
})
var pinPai = {
    list: [],
    maxWidth: 285,
    transX: 0,
    speed: 3,
    ww: $(window).width(),
    getRlin: function ($t) {
        var num=$t.nextAll().length, max=$('.banner-nav li').length;
        if(num==0 || num==max - 1){
            return
        }
        function animateds () {
            if (pinPai.ww -  $t.offset().left - $t.width() < 55) {
                window.requestAnimationFrame(function () {
                    pinPai.transX -= pinPai.speed
                animateds()
                })
                pinPai.newTransfrom(pinPai.transX)
            }
            if ($t.offset().left - pinPai.ww * 0.172 < 55) {
                window.requestAnimationFrame(function () {
                    pinPai.transX += pinPai.speed
                animateds()
                })
                pinPai.newTransfrom(pinPai.transX)
            }
        }
        animateds()
    },
    setWidth: function ($t) {
        pinPai.maxWidth += $t.outerWidth()
        $('.banner-nav').css('width', pinPai.maxWidth)
    },
    panEvent(ev){
        pinPai.list.push(ev.changedTouches[0].clientX)
        if(pinPai.list.length > 2) {pinPai.list.shift()}
        if(pinPai.list.length === 2 ){
         pinPai.transX += (pinPai.list[1] - pinPai.list[0])
            if(pinPai.transX >= 0) {
                  pinPai.transX = 0
                  pinPai.newTransfrom(pinPai.transX)
            } else if ( pinPai.transX <= -($('.banner-nav').width() - pinPai.ww)  + (pinPai.ww * 0.172)) {
                pinPai.transX = -($('.banner-nav').width() - pinPai.ww) + (pinPai.ww * 0.172)
                 pinPai.newTransfrom(pinPai.transX)
            }
            pinPai.newTransfrom(pinPai.transX)
        }
        console.log(pinPai.transX)
    },
    newTransfrom: function (val) {
         $('.banner-nav').css( 'transform', 'translateX(' + val + 'px)')
    }
}