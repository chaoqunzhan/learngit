function subtOnClick2141()
{
	var xqpk,renshu;
	xqpk=eval(document.getElementById('xqpk')).value;
	renshu=eval(document.getElementById('renshu')).value;
	var xiqngqi,puke,
	puke=renshu/2-xqpk;
	xiangqi=xqpk-puke;
	alert("有象棋"+xiangqi+"副,"+"有扑克"+puke+"副");
}	

function subtOnClick234()
{
	var chengji;
	chengji=eval(document.getElementById('chengji')).value;
	if(chengji>=90) 
		{
			isExcellence=true;
		}
	else isExcellence=false;	

	if(isExcellence)
		{alert("优秀");}
	else alert("不优秀");
}

function subtOnClick243()
{
	var sideA,sideB,sideC;
	sideA=eval(document.getElementById('sideA')).value;
	sideB=eval(document.getElementById('sideB')).value;
	sideC=eval(document.getElementById('sideC')).value;
	if(sideA+sideB>sideC&&sideB+sideC>sideA&&sideC+sideA>sideB)
		{istringle=true;}
	else istringle=false;

	if(istringle)
		{alert("可以构成三角形");}
	else alert("不能构成三角形");
}

function subtOnClick25(top,bottom,height)
{
	this.top=top;
	this.bottom=bottom;
	this.height=height;
	this.getarea=function()
	{
		var area;
		area=(this.top+this.bottom)*this.height/2;
		return area;
	}
}


function subtOnClick34()
{
	var res=4&5;
	document.write("4&5="+res+"<br/>");
	var res=3|6;
	document.write("3|6="+res+"<br/>");
	var res=3^12^3;
	document.write("3^12^3="+res+"<br/>");
	var res=8<<5;
	document.write("8<<5="+res+"<br/>");
	var res=128>>3;
	document.write("128>>3="+res+"<br/>");
	var res=-128>>>2;
	document.write("-128>>>2="+res+"<br/>");
}


//***********************3.5其他运算符***********************//
function Circle(r)
{
	this.radius=r;
}

function Rectangle(a,b)
{
	this.sideA=a;
	this.sideB=b;
}

function computerArea(obj)
{
	var area;
	if(obj instanceof Circle)
	{
		var typeStr=typeof obj;
		document.write("<br/>typeof obj="+typeStr);
		document.write("<br/>obj是圆形对象的实例，半径为："+obj.radius);
		area=3.14*obj.radius*obj.radius;
		document.write("<br/>这圆形的面积是："+area);
	}
	else if(obj instanceof Rectangle)
	{
		var typeStr=typeof obj;
		document.write("<br/>typeof obj="+typeStr);
		document.write("<br/>obj是矩形对象的实例，长为："+obj.sideA+"宽为："+obj.sideB);
		area=sideA*sideB;
		document.write("<br/>这个矩形的面积是："+area);
	}
	return area;
}