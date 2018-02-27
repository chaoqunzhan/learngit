

// 首页导航栏的HTML代码写入   2018-02-24
function header(){
     document.write(
        '<div class=\"header\">'+
        '<div id=\"header-son\">'+
          '<div class=\"title\">'+
            '<img src=\"https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/index/W.png\"  width=\"100%\">'+
          '</div>'+
          '<div id=\"re-mune\"></div>'+
          '<div class=\"btx\">'+ 
            '<ul id=\"nav\">'+
            '<li><a href=\"index.html\">HOME</a></li>'+

            '<li><a href=\"about.html\">ABOUT ME</a></li>'+

            '<li><a href=\"#\">YOUNG</a>'+
                '<ul>'+
                '<li><a href=\"young.html\">Sighting</a></li>'+
                '<li><a href=\"菜单页面的地址\">Activity</a></li>'+
                '<li><a href=\"菜单页面的地址\">Funny</a></li>'+
                '</ul>'+
            '</li>'+
            '<li><a href=\"#\">INSTEREST</a>'+
                '<ul>'+
                '<li><a href=\"菜单页面的地址\">HALA MADRID</a></li>'+
                '<li><a href=\"菜单页面的地址\">L.A.Lakers</a></li>'+     
               '</ul>'+
            '</li>'+
            '<li><a href=\"#\">LEARNING</a>'+
                '<ul>'+
                '<li><a href=\"菜单页面的地址\">HTML+CSS</a></li>'+
                '<li><a href=\"菜单页面的地址\">Javascript</a></li>'+
                '<li><a href=\"菜单页面的地址\">Photoshop</a></li>'+
                '<li><a href=\"菜单页面的地址\">NMR</a></li>'+
                '</ul>'+
            '</li>'+

            '<li><a href=\"#\">SAYING</a></li>'+

            '</ul>'+
          '</div>'+
        '</div>'+  
        '</div>')
}






 
// 底部的HTML代码写入   2018-02-26
function bottom(){
     document.write(
        '<div id=\"contact\">'+
            '<div class=\"c-kid\">'+
                '<h3>友情链接 >></h3>'+
                '<p><a href=\"http://www.realmadrid.com\" target=\"_blank\">皇家马德里</a></p>'+
                
            '</div>'+
            
            '<div class=\"c-kid\">'+
                '<h3>联系我们 >></h3>'+
                '<p><img src=\"https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/index/1.png\" alt=\"\" width=\"20%\"></p>'+
                '<p><img src=\"https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/index/2.png\" alt=\"\" width=\"20%\"></p>'+
                '<p><img src=\"https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/index/3.png\" alt=\"\" width=\"20%\"></p>'+
            '</div>'+

            '<div class=\"c-kid\">'+
                '<h3>技术支持 >></h3>'+
                '<p>阿里云学生机</p>'+
                '<p>github/chaoqunzhan</p>'+
                '<p>上上届师兄留下的电脑</p>'+
            '</div>'+

            '<div class=\"c-kid\">'+
                '<h3>通讯地址 >></h3>'+
                '<p>地址：厦门大学海韵园</p>'+
                '<p>邮编：361005</p>'+
                '<p>电话：18900220573</p>'+
            '</div>'+
        '</div>'+



        '<div id=\"bottom\">'+
            '<p>Design by Zhanchaoqun 闽ICP备17027027号</p>'+
        '</div>'+

        '</body>'+
        '</html>'
        )
 }