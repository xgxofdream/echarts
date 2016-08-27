<?php
session_start ();
include '../db/db_config.php';
include '../functions/function.php';
// System initiation
$user_tel = '';
$user_type = '';
$pageBodyType = '';
$estimation_target_ID = '';
// Database operation
$sql="select * from `user_key_info` LEFT JOIN `user_basic_info` ON(user_key_info.user_ID=user_basic_info.user_ID)";
$result = $db->query($sql);
$num = $result->rowCount();
		if ($num) {
			$row = $result->fetchAll(PDO::FETCH_ASSOC);
			//$json_string = json_encode($row, JSON_FORCE_OBJECT);
			$json_string = jsonEncode($row);//自定义函数:将数组JSON格式化
			echo $json_string;		
		}	
?>
