<?php
require('./model/_connect.php');
header('Content-Type: text/html;charset=utf-8');
header('Access-Control-Allow-Origin:*'); // *代表允许任何网址请求
header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE'); // 允许请求的类型
//获取前端的参数
$id = $_REQUEST['id'];//商品id
$num=$_REQUEST['num'];//数量
$name = $_REQUEST['name'];//商品name
$price = $_REQUEST['price'];//商品price
$size = $_REQUEST['size'];
$color = $_REQUEST['color'];

//根据前端参数插入数据
$sql = "SELECT * FROM `cart` WHERE `product_id`=$id";
$res = mysqli_query($conn,$sql);
$rows = mysqli_num_rows($res);
if($rows>0){
	$row = mysqli_fetch_assoc($res);
	$num = $row['product_num']+1;
	$sql = "UPDATE `cart` SET `product_num`=$num WHERE `product_id`=$id";
}else{
	$sql = "INSERT INTO `cart` (`product_id`,`product_num`,`product_name`,`product_price`,`product_size`,`product_color`) VALUES ('$id','$num','$name','$price','$size','$color')";
}

$result = mysqli_query($conn,$sql);
if($result){
	echo json_encode(array("code"=>1));
}else{
	echo json_encode(array("code"=>0));
}

?>