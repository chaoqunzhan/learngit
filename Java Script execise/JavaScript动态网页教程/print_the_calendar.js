// 判断是否是闰年
function isBissextile(year)
{
	var Bissextile=false;
	if(year%4==0){
		Bissextile=true;
	}
	if(year%100!=0&&year%4==0){
		Bissextile=true;
	}
	return Bissextile;
}

//在网页中打印year和month月份的日历
function printCalendar(year,month){
	var aDate=new Date(year,month,1);   //创建year年month月1日的对象，并把实例的引用赋值给变量aDate
	var week=aDate.getDay();     //aDate调用getDay()获取星期的信息
	//计算month月份的天数
	var numOfMonth;
	if(month==0||month==2||month==4||month==6||month==7||month==9||month==11){
		numOfMonth=31;}
	else if(month==3||month==5||month==8||month==10){
		numOfMonth=30;
	}
	else if(isBissextile()){
		numOfMonth=29;
	}
	else{
		numOfMonth=28;
	}


//创建一个打印日期的数组
	var darArray=new Array(week+numOfMonth);
	for(var i=0;i<week;i++){
		dayArray[i]="";
	}

	for(var i=0,j=1;i<dayArray.length;i++,j++){
		dayArray[i]=""+j;
	}

//打印日历表
	document.write("<table>");
	document.write("<tr><th colspan=7>"+year+"年"+(month+1)+"月</th></tr>");
	document.write("<tr><th>日</th></tr><tr><th>一</th></tr><tr><th>二</th></tr><tr><th>三</th></tr><tr><th>四</th></tr><tr><th>五</th></tr><tr><th>六</th></tr>");
	for(var i=0;i<dayArray.length;i+=7)
		{
			document.write("<tr>");
			for(var j=i;j<dayArray.length&&j<i+7;j++){
				document.write("<td>"+dayArray[i]+"</td>");
			}
			document.write("</tr>");
		}
	document.write("</table>");
}