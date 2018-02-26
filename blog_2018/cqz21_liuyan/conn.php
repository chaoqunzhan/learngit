<?php
$conn=@mysql_connect("qdm193599264.my3w.com", "qdm193599264", "zcq122789") or die("数据库链接错误");
mysql_select_db("qdm193599264_db", $conn);
mysql_query("set names 'utf8'"); //使用GBK中文编码;
error_reporting(0);
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