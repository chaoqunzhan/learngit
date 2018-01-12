// 判断是否是闰年
function isBissextile(year)
{
	var year;
	var Bissextile=false;
	if(year%4==0){
		Bissextile=true;
	}
	if(year%100!=0&&year%4==0){
		Bissextile=true;
	}
	return Bissextile;
	// document.write(year+"<br/>");
}


//计算month月份的天数
function numofmonth(month,currYear){
	var numOfMonth;
	if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
		numOfMonth=31;}
	else if(month==4||month==6||month==9||month==11){
		numOfMonth=30;
	}
	else if(isBissextile(currYear)){               //判断当前年份是否是闰年
		numOfMonth=29;
	}
	else{
		numOfMonth=28;
	}
	return numOfMonth;alert(month);
	// allDay=allDay+numOfMonth;
	// document.write(numOfMonth+"<br/>");
}


//计算天数并输出结果
function calAllDay(year,month,day,currYear,currMonth,currDay){
	// var numOfT=(currYear-year)/4;
	// var numOfT=Math.floor(numOfT);        //numOfT为年份经过的4年周期数
	// var Yearflag=(currYear-year)%4;		  //用Yearflag表示年份除以4的余数
	// var allDay=numOfT*(365*3+366);
	// var leftyear=currYear-Yearflag;        //leftyear表示除去整数周期后的年份
	var allDay=0;

	for(year;year<currYear;year++){         //算出整数年的天数
		if(isBissextile(year)){
			allDay=allDay+366;
		}
		else{
			allDay=allDay+365;
		}
	}
	// alert(currMonth);
	if(month<currMonth){               
		for(month;month<currMonth;month++){	
			allDay=allDay+numofmonth(month,currYear);
		}
 // alert(currMonth); 
		if(day<currDay){
			allDay=allDay+(currDay-day);
		}
		else{
			allDay=allDay-(day-currDay);
		}
	}
	else{
		allDay=allDay-day+currDay;
		// alert(currMonth);
		month=month-1;
		for(month;month>currMonth-1;month--){	
			allDay=allDay-numofmonth(month,currYear);
		}
	}

	allDay=allDay+1;
	document.getElementById('result').innerHTML=allDay;

}

function calculateDay(){
	var currDate=new Date();           //创建一个表示当前系统时间的Date对象实例
	var currYear=currDate.getFullYear();  //currDate调用getFullYear()方法获取年的信息，返回的4位整数
	var currMonth=currDate.getMonth()+1;  //currDate调用getMonth()方法获取月的信息，返回0表示1月，11表示12月
	var currDay=currDate.getDay();
	var year=eval(document.getElementById('year')).value;
	var month=eval(document.getElementById('month')).value;
	var day=eval(document.getElementById('day')).value;
	var typeFlag=true;
	if(year==='number'&&month==='number'&&day==='number'){  //判断输入的是否是数字
		typeFlag=true;
	}
	else{typeFlag=false;}

	if((year%1===0)&&(month%1===0)&&(day%1===0)){    //判断输入的是否是整数
		typeFlag=true;
	}
	else{typeFlag=false;}

	if(year<=2017&&year>=0&&month>=1&&month<=12&&day>=1&&day<=31){   //判断输入的是否符合年月日的规格
		typeFlag=true;
	}
	else{typeFlag=false;}

	if(typeFlag){
		calAllDay(year,month,day,currYear,currMonth,currDay);
	}
	else{alert("error");}		
}


//生成随机的背景图片
function randomImage(){
	var bg = new Array(13);		//设定图片数量，如果图片数为3，这个参数就设为2，依次类推
	bg[0] = 'https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/calculate_day2.jpg' 
	bg[1] = 'https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/calculate_day4.jpg'
	bg[2] = 'https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/calculate_day3.jpg'
	bg[3] = 'https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/calculate_day1.jpg'
	bg[4] = 'https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/calculate_day5.jpg'
	bg[5] = 'https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/calculate_day6.jpg'
	bg[6] = 'https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/calculate_day7.jpg'
	bg[7] = 'https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/calculate_day8.jpg'
	bg[8] = 'https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/calculate_day9.jpg'
	bg[9] = 'https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/calculate_day10.jpg'
	bg[10] = 'https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/calculate_day11.jpg'
	bg[11] = 'https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/calculate_day12.jpg'
	bg[12] = 'https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/calculate_day13.jpg'
	bg[13] = 'https://raw.githubusercontent.com/chaoqunzhan/learngit/master/images/calculate_day14.jpg'
	var index=Math.floor(Math.random()*bg.length);
	document.write("<div class=\"contain\" style=\"background-image:url("+bg[index]+")\">");
}



//随机生成文字
function randomFont(){
	var bg = new Array(8);		//设定图片数量，如果图片数为3，这个参数就设为2，依次类推
	bg[0] = '不要用满腔的愤怒和眼泪结束<br/>要凝视真实<br/>这才是拯救希望<br/>的稳固的根基' 
	bg[1] = '毋庸置疑<br/>好的事总会到来<br/>当它来晚时<br/>也不失是一种惊喜'
	bg[2] = '<br/>可以不需要原谅<br/>但不应该被遗忘'
	bg[3] = '我们一路奋战<br/>不是为了改变世界<br/>而是不让世界改变我们'
	bg[4] = '惊喜就是<br/>你人生的一部分<br/>它来了<br/>你想躲也躲不开'
	bg[5] = '要保持剑的锋利<br/>就得时时磨拭<br/>要保持头脑灵光<br/>就得看书'
	bg[6] = '在变换的时代里<br/>岁月<br/>原来是最大的小偷'
	bg[7] = '鸡汤要一口一口喝<br/>路要一步一步走<br/>步子迈得太大<br/>容易扯到蛋'
	bg[8] = '梦想是什么<br/>梦想是让你坚持<br/>就会感到快乐<br/>的东西'
	var index=Math.floor(Math.random()*bg.length);
	document.write(bg[index]);
}