//点击颜色处理
var colorMessage='石鸳绿'
$('.ulul').children().each(function(){
    $(this).click(function(){
        $(this).addClass('sli-selected').siblings().removeClass('sli-selected')
       colorMessage = $(this).children().children('.color-item-name').text()
        console.log(colorMessage)
    })
    
})
//尺码
// console.log($('#size-ul').children())
var sizeMessage='M'
$('#size-ul').children().each(function(){
    $(this).click(function(){
        $(this).addClass('sli-selected').siblings().removeClass('sli-selected')
        sizeMessage = $(this).children().first().text()
        console.log(sizeMessage)
    })
})

// 数量和总数
var nummessage = 1;

var priceMessage =159;

$('.amount').text(nummessage)
// -处理
$('.num-reduce').click(function(){
    nummessage--;
    if(nummessage<=1){
        nummessage = 1
        $('.amount').text(nummessage)
        priceMessage =nummessage*159;
       
    }
  
    console.log(priceMessage*nummessage)
    $('.amount').text(nummessage)
    $('#goods-price').children().children().text(priceMessage*nummessage)
})
// +处理
$('.num-add').click(function(){
 
    nummessage++;
    $('.amount').text(nummessage)
    console.log(priceMessage*nummessage)
    $('#goods-price').children().children().text(priceMessage*nummessage)
})


function sj() {
    //x上限，y下限     
    var x = 100000;
    var y = 0;
    var rand = parseInt(Math.random() * (x - y + 1) + y);
    return rand 

}

$('.i-button').click(function(){
    var idMessagg =sj()
    $.get("http://127.0.0.1/save/weishop/src/interface/addwq.php",{
        id:idMessagg,  
        price:priceMessage*nummessage,
        name:"安踏外套",
        num:nummessage,
        size:sizeMessage,
        color:colorMessage
    },function(data){
        var json = JSON.parse(data);
        if(json.code==1){
            alert('添加商品成功');
            console.log(colorMessage)
        }
    })
})



