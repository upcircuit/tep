const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
let image = document.querySelector("#lastClone");

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
let size = carouselImages[0].clientWidth;
size = image.clientWidth;


carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

/*Button Listeners*/
nextBtn.addEventListener('click',()=>{
	if(counter>=carouselImages.length - 1) return;
	carouselSlide.style.transition = "transform 0.3s ease-in-out";
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
	console.log(size);
	
});

prevBtn.addEventListener('click',()=>{
	if(counter<=0) return;
	carouselSlide.style.transition = "transform 0.3s ease-in-out";
	counter--;
	carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
	console.log("Hello");

});

carouselSlide.addEventListener('transitionend',()=>{
	if(carouselImages[counter].id === 'lastClone'){ 
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - 2;
		carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
	}
	if(carouselImages[counter].id === 'firstClone'){ 
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - counter;
		carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
	}
});