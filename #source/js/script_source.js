let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

	let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			thisLink.classList.toggle('borderBottom')
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

let formOpen_02=document.querySelector('.icon');
let formOpen=document.querySelector('.form');

console.log(formOpen);

formOpen_02.addEventListener('click', function(){
	console.log(formOpen.style.height)
	if(formOpen.style.height > '0px'){
		formOpen.style.height = '0px';
		formOpen_02.innerHTML = "open";
		console.log(formOpen.style.height)
	}else{
		formOpen.style.height = '450px';
		formOpen_02.innerHTML = "close";
	}
});


//Sliders
$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		dots:true,
	});
});