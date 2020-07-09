


//数据
$(document).ready(function() { 
    $.get('http://127.0.0.1/save/weishop/src/interface/showlist.php',function(data){
    var json = JSON.parse(data);
    if(json.code==0){
        alert('购物车里面空空的')
    }else{
        // alert('你买了的东西是'+JSON.stringify(json.data))
        // console.log(json.data[1].product_name)
        var string = template('datalist',{"arr":json.data});
        $('#tb').html(string)
        
    }
    })
});
