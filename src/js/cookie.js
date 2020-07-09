function setCookie(key,value,day){

   
    var time = new Date();

    time.setTime(time.getTime() - 8*60*60*1000 + day*24*60*60*1000);

 
    document.cookie= key+"="+value+";expires="+time
    

    
}
function removeCookie(key){

    var time= new Date();

    time.setTime(time.getTime()-8*60*60*1000-1)

    document.cookie= key+"="+''+';expires='+time;
}

function updateCookie(key,value,day){
    var time = new Date();

    time.setTime(time.getTime() - 8*60*60*1000 + day*24*60*60*1000)

    document.cookie= key+"="+value+";expires="+time;

}
function selectCookie(key){
    var a = document.cookie;
    var arr = a.split('; ');
    for(var i = 0; i<arr.length;i++){
        var newarr = arr[i].split('=');
        if(newarr[0] == key){
            return newarr[1]
            break; 
        }  
       
    }
}
// function getCookie(key) {
//     //一个参数:要获取的cookie的键
//     //返回值:指定cookie值
//     var str = document.cookie;
//     var arr = str.split('; ');
//     for (var i = 0; i < arr.length; i++){
//         var newArr = arr[i].split('=');
//         if (newArr[0] == key)
//         {
//             return newArr[1];
//         }
//     }

// }