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
// 侧导航栏路层跳跃
//获取相关元素

var contentLiArr = document.getElementsByClassName('new-taday')//内容集合
// console.log(contentLiArr)
var menuLiArr =  document.getElementsByClassName('index-nav-item')//菜单内容集合
var index = 0;//定义楼层,初始为0
// console.log(menuLiArr.length)
light()
// 定义一个数组,记录每个li的滚动高度区间
var arr = [];
var scrollTop = 740;
for(var i=0;i<contentLiArr.length;i++){
    scrollTop += contentLiArr[i].offsetHeight;
    arr.push(scrollTop)
}
// console.log(arr)
window.onscroll = function(){
    //当页面滚动时,当前被滚到的楼层菜单高亮
        //根据滚动高度,判断在哪个楼层
        // console.log(getScroll())
        for(var i=0;i<arr.length;i++){
            // console.log(i)
            // console.log(arr.length)
			if(getScroll()>=arr[i]&&getScroll()<arr[i+1]){
                index = i;
				break;
			}
		}
		light()
}
//点击menu里面的li,页面缓动到响应楼层
for(var i=0;i<menuLiArr.length;i++){
   
    menuLiArr[i].index = i;
    menuLiArr[i].onclick = function(){
    
        animate(arr[this.index])
        
        console.log(this.index)
    }
}

function light(){
    for(var i=0;i<menuLiArr.length;i++){
        // console.log(menuLiArr.length)
        menuLiArr[i].index = i;

        menuLiArr[i].className = "index-nav-item"
    }
    menuLiArr[index].className = " index-nav-item index-nav-item-active"
    // index-nav-item-active
}

function animate(target){
    //scrollTop属性缓动
    clearInterval(document.timer);
    document.timer = setInterval(function(){
        //获取元素当前位置
        var current = getScroll();
        //计算速度
        var speed = (target - current)/10;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        //计算元素当前位置
        current = current + speed;
        //判断是否到达目标
        if(current==target){
            clearInterval(document.timer);
        }
        //定位元素
        setScroll(current)
    },10)
}

function setScroll(value){		
    if(document.body.scrollTop){
        document.body.scrollTop = value;
    }else{
        document.documentElement.scrollTop = value;
    }
}

function getScroll(){
    return document.body.scrollTop+document.documentElement.scrollTop;
}


//var flag = true;  //使用节流阀

//页面刚开始隐藏，当页面滚动到content的时候，电梯导航显示
// $(function () {
    //页面刷新时调用一次
    //封装函数，切换显示与隐藏
    // var contentTop = $(".content").offset().top;
    // toggleTool();
    // function toggleTool() {
    //     if ($(document).scrollTop() >= contentTop) {
    //         $(".floor").fadeIn();

    //     } else {
    //         $(".floor").fadeOut();
    //     }

    // }


//     $(window).scroll(function () {
//         // toggleTool()
//         //页面滚动到相应位置，电梯导航按钮添加current类
//         if (flag) {
//             // console.log($('.index-nav-item'))
//             $('.index-nav-item').each(function (i, ele) {
//                 var cuHeight = ele.offsetHeight / 2;
//                 if ($(".new-taday:first-child").scrollTop() >= $(ele).offset().top - cuHeight) {
//                     $('.index-nav-item').eq(i).addClass('index-nav-item-active').siblings().removeClass();

//                 }

//             })
//         }

//     })

//     //点击电梯导航按钮，页面跳转到相应位置，使用jquery里面的animate
//     $('.index-nav-item ').click(function () {
//         flag = false;
//         $(this).addClass('index-nav-item-active').siblings().removeClass();
//         var index = $(this).index();
//         var current = $('index-nav-item').eq(index).offset().top;
//         $('html,body').stop().animate({
//             scrollTop: current
//         }, function () {
//             flag = true;
//         })
//     })

   
// })