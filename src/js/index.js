// 登录框的弹入弹出
//小×
$('.small-btn').click(function(){
    console.log('saf')
    $(".sidebarcom-my-con-hide").css(
        {
            display: "none"
        }
    ).stop().animate(
        {
            left:36
        },500,'linear',function(){console.log('动画完成了')}
    )

})
//账号移入移出处理
$(".sidebarcom-my-con").on('mouseover',function(){
    $(".sidebarcom-my-con-hide")
    .css(
        {
            display: "block"
        }
    )
    .stop().animate(
        {
            left: -275
        },500,'linear',function(){console.log('动画完成了')}
    )

}).on('mouseleave',function(){
    $(".sidebarcom-my-con-hide")
    .css(
        {
            display: "none"
        }
    )
    .stop().animate(
        {
            left:36
        },500,'linear',function(){console.log('动画完成了')}
    ) 
})
// 导航栏处理
// console.log($(window).scrollTop())
// console.log($(".header-nav").offset().top)
//导航栏固定
$(window).scroll(function(){
    if($(window).scrollTop() >= $(".header-nav").offset().top){
        $(".header-nav").addClass('header-nav-fixed')
    }
    if($(window).scrollTop() <= 100){
     
        $(".header-nav").removeClass('header-nav-fixed')
    }
})
// 导航栏折叠
$('.header-link-first').on('mouseover',function(){
    $('.ul-hide').stop().slideDown(500,'linear',function(){
        // console.log('slideToggle完成')
    })
  

    $('.header-link').on("mouseleave",function(){
        $('.ul-hide').stop().slideUp(500,'linear')
        $('.ul-hide-content').children().removeClass('ul-hide-content-active')      
    })
})
// 选项卡
$('.ul-hide li').on('mouseover',function(){
    $(this).parent().next().children().eq($(this).index())
    .addClass('ul-hide-content-active').siblings().removeClass('ul-hide-content-active');
})
// 侧导航栏滚动固定处理

$(window).scroll(function(){
    // console.log($(".index-nav-sort").offset().top)
    if($(window).scrollTop() >= $(".index-nav-sort").offset().top){
        $(".index-nav-sort").addClass('is-lift-nav-fixed')
    }
    if($(window).scrollTop() <= 1687){
     
        $(".index-nav-sort").removeClass('is-lift-nav-fixed')
    }
})
//搜索框联想
$('.search-text').on('input',function(){
    var url = encodeURI($(this).val())
    var text = "https://category.vip.com/ajax/getSuggest.php?callback=searchSuggestions&keyword="+url+"&_=1593346215482"
    $.ajax(
        {
            url:text,
            success:function(res){
               
                $(".search-ul").empty()
                $.each(res.data,function(index,value){
                    $(".search-ul").append('<li>'+value.word+'</li>')
                })
            },
            dataType:'jsonp'
        }
    )
})