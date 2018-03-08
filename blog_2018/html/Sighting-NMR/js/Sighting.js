

$(document).ready(function(){
	var w_listShow=$(".list-show").width();
	$(".list-show").css("height",w_listShow/1.5);
	if($(window).width()>=676){
		$(".list-font").css("height",w_listShow/1.5*0.85);
		$(".list-enter").css("height",w_listShow/1.5*0.15);
	}
	else{
		$(".list-font").css("height",w_listShow/1.5*0.65);
		$(".list-enter").css("height",w_listShow/1.5*0.35);
	}
})


$(document).ready(function(){
	var h_bonner_liuyan=$(window).width()/4;
	var h_bonner_liuyan1=$(window).width()/2;
	if($(window).width()>676){
	$("#bonner-liuyan").css("height",h_bonner_liuyan);}	
	else{$("#bonner-liuyan").css("height",h_bonner_liuyan1);}
})