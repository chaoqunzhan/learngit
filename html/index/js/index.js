
(function($) {

    $.fn.fullImages = function(fisher) {

        var fisher = $.extend({
            ImgWidth: null,
            ImgHeight: null,
            autoplay: null,
            fadeTime: null,
        },
        fisher)

        var count = $(this).find("img").length; 
        var nValue = 0;
        var oValue = 0;
        var _this = $(this);
        
	    _this.find("img:eq(0)").fadeIn("slow");

        //自动轮播效果
        var setIntervalImg = setInterval(function() {
            nValue++
            if (nValue == count) {
                nValue = 0;
            }
            _this.find(" img:eq(" + (nValue) + ")").fadeIn(fisher.fadeTime);
            _this.find(" img:eq(" + (oValue) + ")").fadeOut(fisher.fadeTime);
            oValue = nValue % count;
        },
        fisher.autoplay);
        
        // 自适应bodyPage的高度
        resizeFun(fisher.ImgHeight,fisher.ImgWidth);
    
        function resizeFun(ImgHeight,ImgWidth){
            var ImgHeight,Imgwidth;
            var hValue=ImgHeight/ImgWidth;
            var img_height=$(window).width()*hValue;
            var img_height1=384*hValue;
            if($(window).width()>=384){
                _this.css("height",img_height);
            }
            else{
                _this.css("height",img_height1);
            }
        }
    };
} (jQuery));


// 导航栏效果JavaScript函数
function makemune(){
    var items = document.getElementById("nav").getElementsByTagName("li"); 
        for (var i=0; i<items.length; i++) { 
            items[i].onmouseover=function() { 
            this.className="mouseover"; 
            } 
            items[i].onmouseout=function() { 
            this.className=""; 
            } 
    }
}
window.onload=makemune;

//title爱玩的电科郎自适应窗口大小
$(document).ready(function(){
    if($(window).width()>=1024){
    var w_title=$(window).width()*0.25;
    var m_top=$(window).width()*16/376-20;
    $("#header-son").find(".title").css("width",w_title);
    $("#nav li").css("margin-top",m_top);
    $("#nav li ul li").css("margin-top","0")}
});

//移动端导航栏效果
$(document).ready(function(){
    if($(window).width()<1024){
        var t_click=0;               //用作菜单小图标变化的标志
        $("#re-mune").click(function(){
            
            $(".btx").slideToggle(300);
            t_click++;
            if(t_click%2==1){
                setTimeout(function(){$("#re-mune").css("background","url(https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/index/mune2.png)");},100);//用setTimeout延时来匹配菜单变换效果
                // $("#one").css("position","fixed");
            }
            else{setTimeout(function(){$("#re-mune").css("background","url(https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/index/mune1.png)")},300);};
        });


        click_li(2,6,9);
        click_li(6,2,9);
        click_li(9,2,6);
        function click_li(i,j,k){
            $("#nav li:eq("+i+")").click(function(){
                $("#nav li:eq("+i+") ul li").slideToggle(300);
                $("#nav li:eq("+j+") ul li").hide(300);
                $("#nav li:eq("+k+") ul li").hide(300);
            });   
        }; 

        //设置#nav li的背景
        $("#nav li:eq(1)").css("background","url(https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/index/mune4.png)").css("background-repeat","no-repeat").css("background-position","right"); 
        $("#nav li:eq(2)").css("background","url(https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/index/mune3.png)").css("background-repeat","no-repeat").css("background-position","right"); 
        $("#nav li:eq(6)").css("background","url(https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/index/mune3.png)").css("background-repeat","no-repeat").css("background-position","right"); 
        $("#nav li:eq(9)").css("background","url(https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/index/mune3.png)").css("background-repeat","no-repeat").css("background-position","right"); 
        $("#nav li:eq(14)").css("background","url(https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/index/mune4.png)").css("background-repeat","no-repeat").css("background-position","right"); 
    };
});



/*-------------------------four-show的js-css样式表--------------------------*/
$(document).ready(function(){
    var f_s_s_width=$("div.four-show-son").width()/1.78;
    $("#four-show").find("div.four-show-son").css("height",f_s_s_width);
    $("#four-show").find("div.four-show-div").css("height",f_s_s_width);
    $("#four-show").find("p.four-show-p1").css("margin-top",f_s_s_width-150);
    


    hover_p(0);               //鼠标经过时显示文字
    hover_p(1);
    hover_p(2);
    hover_p(3);
    function hover_p(i){
        $("#four-show").find("div.four-show-div:eq("+i+")").hover(function(){
            $("#four-show").find("p.four-show-p2:eq("+i+")").slideToggle(300);
        });
    }    
})