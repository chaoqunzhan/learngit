

// 首页导航栏的HTML代码写入   2018-02-24
function header(){
     document.write(
        '<div id=\"header\">'+
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
                '<li><a href=\"Sighting.html\">Sighting</a></li>'+
                '<li><a href=\"Activity.html\">Activity</a></li>'+
                '<li><a href=\"Funny.html\">Funny</a></li>'+
                '</ul>'+
            '</li>'+
            '<li><a href=\"#\">INSTEREST</a>'+
                '<ul>'+
                '<li><a href=\"HALA.html\">HALA MADRID</a></li>'+
                '<li><a href=\"L.html\">L.A.Lakers</a></li>'+     
               '</ul>'+
            '</li>'+
            '<li><a href=\"#\">LEARNING</a>'+
                '<ul>'+
                '<li><a href=\"HTML.html\">HTML+CSS</a></li>'+
                '<li><a href=\"Javascript.html\">Javascript</a></li>'+
                '<li><a href=\"Photoshop.html\">Photoshop</a></li>'+
                '<li><a href=\"NMR.html\">NMR</a></li>'+
                '<li><a href=\"Others.html\">Others</a></li>'+
                '</ul>'+
            '</li>'+

            '<li><a href=\"#\">SAYING</a></li>'+

            '</ul>'+
          '</div>'+
        '</div>'+  
        '</div>')
}


// 次页导航栏的HTML代码写入   2018-02-24
function second_header(){
     document.write(
        '<div id=\"header\">'+
        '<div id=\"header-son\">'+
          '<div class=\"title\">'+
            '<img src=\"https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/index/W.png\"  width=\"100%\">'+
          '</div>'+
          '<div id=\"re-mune\"></div>'+
          '<div class=\"btx\">'+ 
            '<ul id=\"nav\">'+
            '<li><a href=\"../../index.html\">HOME</a></li>'+

            '<li><a href=\"../../about.html\">ABOUT ME</a></li>'+

            '<li><a href=\"#\">YOUNG</a>'+
                '<ul>'+
                '<li><a href=\"../../Sighting.html\">Sighting</a></li>'+
                '<li><a href=\"../../Activity.html\">Activity</a></li>'+
                '<li><a href=\"../../Funny.html\">Funny</a></li>'+
                '</ul>'+
            '</li>'+
            '<li><a href=\"#\">INSTEREST</a>'+
                '<ul>'+
                '<li><a href=\"../../HALA.html\">HALA MADRID</a></li>'+
                '<li><a href=\"../../L.html\">L.A.Lakers</a></li>'+     
               '</ul>'+
            '</li>'+
            '<li><a href=\"#\">LEARNING</a>'+
                '<ul>'+
                '<li><a href=\"../../HTML.html\">HTML+CSS</a></li>'+
                '<li><a href=\"../../Javascript.html\">Javascript</a></li>'+
                '<li><a href=\"../../Photoshop.html\">Photoshop</a></li>'+
                '<li><a href=\"../../NMR.html\">NMR</a></li>'+
                '<li><a href=\"../../Others.html\">Others</a></li>'+
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


// 首页中sidebar中的tag-new-video更新  2018-03-02
function sidebar_frist(){
    document.write(
        '<div id=\"tag\">'+
            '<h3>标签列表</h3>'+
            '<ul>'+
                '<li><a href=\"Sighting.html\">Sighting(2)</a></li>'+
                '<li><a href=\"Activity.html\">Activity(3)</a></li>'+
                '<li><a href=\"Funny.html\">Funny(2)</a></li>'+
                '<li><a href=\"HALA.html\">Hala Madrid(3)</a></li>'+
                '<li><a href=\"HALA.html\">C.Ronaldo(1)</a></li>'+
                '<li><a href=\"L.html\">L.A.Lakers(0)</a></li>'+
                '<li><a href=\"HTML.html\">HTML(2)</a></li>'+
                '<li><a href=\"HTML.html\">CSS(2)</a></li>'+
                '<li><a href=\"Javascript.html\">Javascript(1)</a></li>'+
                '<li><a href=\"Photoshop.html\">Photoshop(2)</a></li>'+
                '<li><a href=\"Photoshop.html\">After Effect(0)</a></li>'+
                '<li><a href=\"NMR.html\">NMR(0)</a></li>'+
                '<li><a href=\"Others.html\">Others(2)</a></li>'+
            '</ul>'+
        '</div>'+

        '<div id=\"new\">'+
            '<h3>最近更新</h3>'+
            '<li><a href=\"\">开啊</a></li>'+
            '<li><a href=\"\">开啊哈师大</a></li>'+
            '<li><a href=\"\">开啊哈师大</a></li>'+
        '</div>'+

        '<div id=\"video\">'+
            '<h3>精彩视频</h3>'+
            '<li><a href=\"\">开啊哈师大</a></li>'+
            '<li><a href=\"\">开啊哈师大</a></li>'+
            '<li><a href=\"\">开啊哈师大</a></li>'+
        '</div>'       
)}



// 次页中sidebar中的hot-relative更新  2018-03-02
function sidebar_frist(){
    document.write(
        
        '<div id=\"relative\">'+
            '<h3>相关推荐</h3>'+
            '<li><a href=\"\">开啊</a></li>'+
            '<li><a href=\"\">开啊哈师大</a></li>'+
            '<li><a href=\"\">开啊哈师大</a></li>'+
        '</div>'+

        '<div id=\"hot\">'+
            '<h3>热门文章</h3>'+
            '<ol>'+
            '<li><a href=\"\">开啊哈师大</a></li>'+
            '<li><a href=\"\">开啊哈师大</a></li>'+
            '<li><a href=\"\">开啊哈师大</a></li>'+
            '</ol>'+
        '</div>'       
)}