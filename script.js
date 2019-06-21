	var poz1 = window.pageYOffset;
	
	window.onscroll = function(){
	var poz2 = window.pageYOffset;
	if ( poz1 > poz2 ){
		document.getElementById("naw").style.top = "0";
	} else {
		document.getElementById("naw").style.top = "-52px";
	}
		poz1 = poz2;
}