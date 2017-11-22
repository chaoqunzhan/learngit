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