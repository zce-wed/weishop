<?php
require('./model/_connect.php');
header('Content-Type: text/html;charset=utf-8');
header('Access-Control-Allow-Origin:*'); // *代表允许任何网址请求
header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE'); // 允许请求的类型
$id = $_REQUEST['id'];
//根据id删除数据
$sql = "DELETE FROM `cart` WHERE `product_id`=$id";
$result = mysqli_query($conn,$sql);
if($result){
	// echo json_encode(array("code"=>1));
	Header("Location: http://localhost:8090/pages/cartShow.html"); 
}else{
	echo json_encode(array("code"=>0));
}

?>