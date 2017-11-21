<?php>
include("conn.php");
if($_POST['submit']){
	sql="insert into massage (Id,user,title,content,lastdate) 
	value ('','$POST[user]','$_post[title]','$_POST[content]',now())";
}

<?>


<form action="add.php" method="post">
用户：
<input type="text" size="10" name="user"><br/>
标题：
<input type="text" size="10" name="title"><br/>
内容：
<textarea name="content" id=""></textarea>

<input type="submit" name="submit" value="发布留言">
</form>