function text(){
	var words=[12,3,4,33,56];
	var words_filter=words.filter(function(word){
		return word>10;
	});
	alert(words_filter);
}


function text1(){
	var words=[1,2,3,4,5,6];
	var words_re=words.reserve();
	console.log(words_re);
}