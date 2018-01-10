<?php
include("conn.php");
if(isset($_POST['submit'])){
  // $sql="INSERT INTO massage (id,user,title,content,lastdate) 
  // VALUES ('','$_POST[user]','$_post[title]','$_POST[content]',now())";

  $sql="INSERT INTO message(id,user,title,content,lastdate) VALUES ('','{$_POST[user]}','{$_POST[title]}','{$_POST[content]}',NOW())";
  mysql_query($sql);
  echo("发表成功！");
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<style>p.indent{padding-left: 1.2em;line-height:180%;color:#808080;font-size:0.8em;}</style>
<style>p.indent1{line-height:180%;color:#808080;font-size:1.0em;}</style>
<style>p.indent2{color:#808080;font-size:0.8em;}</style>
<style>p.indent3{line-height:180%;color:#808080;font-size:0.8em;}</style>
<meta content="width=device-width,user-scalable=no" name="viewport"> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>留言板</title>
<link href="cqz21_style.css"  rel="stylesheet" type="text/css"/>
</head>

<body id="one">
<div class="back">
<div class="container">
        <div class="container2">
            <div class="title"><img src="https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/W.png" width="360px">
            </div>
            <div class="btx"> 
                <li><a href="index.html">首页</a></li>        
                <li><a href="about_me.html">个人介绍</a></li>       
                <li><a href="young.html" class="selected">青春记录</a></li>     
                <li><a href="rm.html">我执纯白</a></li>     
                <li><a href="adobe.html">阿逗比</a></li>       
                <li><a href="liuyanban.html">留言板</a></li>
            </div>
	        <div class="zym"><p class="indent2"> 既然来过，何不留下你的足迹！</p></div>
          <div class="tishi">sid s djsi ajd </div>

          <div id="liuyan">
            <form action="index.php" method="post">
              <textarea name="content" id="shuruneirong"></textarea>
              <input type="text" size="10" name="user" id="users"><br/>
              <input type="submit" name="submit" value="发布留言" id="anniu">
            </form> 

            <div id="guodu"></div>


                        <!-- 展示留言区 -->
            <div id="zhanshi">   
              <?php
               $sql_list="SELECT * FROM message order by id desc";
                $query=mysql_query($sql_list);
                while($row=mysql_fetch_array($query)){
              ?>
              <div class="list">
                <div id="name_time">
                  <div id="name"><?=$row['user']?></div>
                  <div id="time"><?=$row['lastdate']?></div>
                </div>
                <div id="text">
                  <div><?=$row['content']?></div>
                </div>
              </div>
              <?php
                 }
              ?>
            </div>
          </div>



</div>
    </div>
</div>
	
</body>