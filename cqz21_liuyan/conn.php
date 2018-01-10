<?php
$conn=@mysql_connect("localhost", "root", "zcq122789") or die("数据库链接错误");
mysql_select_db("cqz21", $conn);
mysql_query("set names 'GBK'"); //使用GBK中文编码;
// if(!$conn) 
// 	echo "Error!";
// else echo "Ok!";

// $link_Isok=mysql_select_db(cqz21,$this->linkmysql);
// 		if(!$link_Isok)
// 		{
// 			echo("选择数据库错误");
// 			exit;
// 		}
?>