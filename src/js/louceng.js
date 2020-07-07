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
