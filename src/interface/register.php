<?php
header('content-type:text/html;charset=utf-8');
header('Content-Type: text/html;charset=utf-8');
header('Access-Control-Allow-Origin:*'); // *代表允许任何网址请求
header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE'); // 允许请求的类型

$name = $_POST['username'];

$pas = $_POST['password'];

$link = mysqli_connect('localhost','root','root','shop');

$sql = "INSERT INTO `user` (`username`,`password`)VALUES('$name','$pas')";

$arr = mysqli_query($link,$sql);

if($arr){
    
header('location: http://127.0.0.1:8090/pages/login.html');

}else{
    echo('注册失败');
}
?>