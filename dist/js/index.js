"use strict";$(".small-btn").click(function(){console.log("saf"),$(".sidebarcom-my-con-hide").css({display:"none"}).stop().animate({left:36},500,"linear",function(){console.log("动画完成了")})}),$(".sidebarcom-my-con").on("mouseover",function(){$(".sidebarcom-my-con-hide").css({display:"block"}).stop().animate({left:-275},500,"linear",function(){console.log("动画完成了")})}).on("mouseleave",function(){$(".sidebarcom-my-con-hide").css({display:"none"}).stop().animate({left:36},500,"linear",function(){console.log("动画完成了")})}),$(window).scroll(function(){$(window).scrollTop()>=$(".header-nav").offset().top&&$(".header-nav").addClass("header-nav-fixed"),$(window).scrollTop()<=100&&$(".header-nav").removeClass("header-nav-fixed")}),$(".header-link-first").on("mouseover",function(){$(".ul-hide").stop().slideDown(500,"linear",function(){}),$(".header-link").on("mouseleave",function(){$(".ul-hide").stop().slideUp(500,"linear"),$(".ul-hide-content").children().removeClass("ul-hide-content-active")})}),$(".ul-hide li").on("mouseover",function(){$(this).parent().next().children().eq($(this).index()).addClass("ul-hide-content-active").siblings().removeClass("ul-hide-content-active")}),$(window).scroll(function(){$(window).scrollTop()>=$(".index-nav-sort").offset().top&&$(".index-nav-sort").addClass("is-lift-nav-fixed"),$(window).scrollTop()<=1687&&$(".index-nav-sort").removeClass("is-lift-nav-fixed")});var contentLiArr=document.getElementsByClassName("new-taday"),menuLiArr=document.getElementsByClassName("index-nav-item"),index=0;light();for(var arr=[],scrollTop=740,i=0;i<contentLiArr.length;i++)scrollTop+=contentLiArr[i].offsetHeight,arr.push(scrollTop);window.onscroll=function(){for(var e=0;e<arr.length;e++)if(getScroll()>=arr[e]&&getScroll()<arr[e+1]){index=e;break}light()};for(i=0;i<menuLiArr.length;i++)menuLiArr[i].index=i,menuLiArr[i].onclick=function(){animate(arr[this.index]),console.log(this.index)};function light(){for(var e=0;e<menuLiArr.length;e++)menuLiArr[e].index=e,menuLiArr[e].className="index-nav-item";menuLiArr[index].className=" index-nav-item index-nav-item-active"}function animate(o){clearInterval(document.timer),document.timer=setInterval(function(){var e=getScroll(),n=(o-e)/10;(e+=n=0<n?Math.ceil(n):Math.floor(n))==o&&clearInterval(document.timer),setScroll(e)},10)}function setScroll(e){document.body.scrollTop?document.body.scrollTop=e:document.documentElement.scrollTop=e}function getScroll(){return document.body.scrollTop+document.documentElement.scrollTop}