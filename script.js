// Hide navbar on scroll
	
	let poz1 = window.pageYOffset;
	
function navScroll(){
	let poz2 = window.pageYOffset;
	if ( poz1 > poz2 ){
		document.getElementById("myTopnav").style.top = "0";
	} else {
		document.getElementById("myTopnav").style.top = "-54px";
	}
		poz1 = poz2;
}


// Show responsive topnav onclick

function myFunction() {
	let x = document.getElementById("myTopnav");
	if (x.className === "topnav"){
		x.className += " responsive";
		}else{
		x.className = "topnav";
	}
}

// show scroll button

function btnScroll() {
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
		document.getElementById("scrollTop").style.display = "block";
	} else {
		document.getElementById("scrollTop").style.display = "none";
	}
}

// when clicked, scrolls document to top and hides an alement

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}


// active functions on scroll

window.onscroll = function() {
	navScroll()
	btnScroll()
	};