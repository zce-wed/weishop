<?php
    header('content-type:text/html;charset=utf-8');
    header('Content-Type: text/html;charset=utf-8');
    header('Access-Control-Allow-Origin:*'); // *代表允许任何网址请求
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE'); // 允许请求的类型
    $name= $_POST['username'];

    $pas = $_POST['password'];

    $link = mysqli_connect('localhost','root','root','shop');

    $sql = "SELECT * FROM `user` WHERE `username`='$name' AND `password`='$pas'";

    $arr = mysqli_query($link,$sql);

    $row = mysqli_fetch_assoc($arr);

    if($row){

        setcookie('code','1',time()+30*24*60*60);

        header('location: http://127.0.0.1:8090/pages/cartShow.html');

    }else{

        echo('登录失败,请返回重试');
    }
    
?>