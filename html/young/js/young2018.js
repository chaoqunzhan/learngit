/*--写入框架--*/
function InsertFrame_body_daohang(){
	document.write(
		"<body id=\"one\">"+
			"<div class=\"container\">"+
        		"<div class=\"container2\">"+
            		"<div class=\"title\"><img src=\"https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/W.png\" width=\"360px\">"+
            		"</div>"+
            		"<div class=\"btx\">"+ 
                		"<li><a href=\"../../index.html\">首页</a></li>"+        
                		"<li><a href=\"../../about_me.html\">个人介绍</a></li>"+       
                		"<li><a href=\"../../young.html\" class=\"selected\">青春记录</a></li>"+     
                		"<li><a href=\"../../rm.html\">我执纯白</a></li>"+     
                		"<li><a href=\"../../adobe.html\">阿逗比</a></li>"+      
                		"<li><a href=\"../../cqz21_liuyan/add.php\">留言板</a></li>"+
            		"</div>"
	);
}


function InsertFrame_youlan(){
	document.write(
				"<div class=\"youlan\">"+
                	"<div class=\"remenlianjie\">"+
                        "<p style=\"font-size:14px;color:#808080\">热门<font color=\"#6deef3\" size=\"3px\">推荐</font>："+
                        "<ol class=\"zyb\">"+
                        	"<li><a href=\"../../learning/html/php+mysql_message.html\" target=\"_blank\"> PHP+MySQL留言板</a></li>"+
                            "<li><a href=\"../../adobe/adobe2.html\" target=\"_blank\"> Adobe软件安装破解</a></li>"+
                            "<li><a href=\"../../adobe/adobe1.html\" target=\"_blank\"> VIP视频免费看教程</a></li>"+
                            "<li><a href=\"../../young/young1.html\" target=\"_blank\">自己码？套模板？</a></li>"+
                            "<li><a href=\"../../rm/rm1.html\" target=\"_blank\">渣团渐变效果头像制作</a></li>"+
                            "<li><a href=\"../../adobe/adobe3.html\" target=\"_blank\"> Win10的813错误</a></li>"+
                        "</ol>"+
                    "</div>"+
                    "<div class=\"xiangguan\">"+
                        "<p style=\"font-size:14px;color:#808080\">相关<font color=\"6df3a6\" size=\"3px\">文章</font>："+
                        "<ul class=\"zyb\">"+
                            "<li><a href=\"../young1.html\" target=\"_blank\">自己码？套模板？</a></li>"+
                            "<li><a href=\"../../young.html\" target=\"_blank\">研会</a></li>"+
                            "<li><a href=\"../../young.html\" target=\"_blank\">中秋快乐</a></li>"+
                            "<li><a href=\"../y3_yongtai.html\" target=\"_blank\">赶路游永泰</a></li>"+
                            "<li><a href=\"../y4_xslqs.html\" target=\"_blank\">新生篮球赛</a></li>"+
                            "<li><a href=\"../steponto2018.html\" target=\"_blank\">回首17，步入18</a></li>"+
                        "</ul>"+
                    "</div>"+
                    "<div class=\"weibo\">"+
                        "<p style=\"font-size:15px;color:#808080\">关注我的<font color=\"#f3b26d\" size=\"3px\">微博</font>：</p>"+
                        "<center><img align=\"cencer\" src=\"../../images/weibo.gif\"/></center>"+
                  "</div>"+
                "</div>" 
	);
}



/*--写入样式--*/
function InsertStyle(){
	document.write(
		"<style>p.indent{padding-left: 1.2em;line-height:180%;color:#808080;font-size:0.9em;}</style>"+
		"<style>p.indent1{line-height:180%;color:#808080;font-size:1.0em;}</style>"+
		"<style>p.indent2{color:#fff;font-size:0.8em;}</style>"+
		"<style>p.indent3{line-height:180%;color:#808080;font-size:1.0em;}</style>"+
		"<style type=\"text/css\">a {text-decoration: none}</style>"
	);
}




