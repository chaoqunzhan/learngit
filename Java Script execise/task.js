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


