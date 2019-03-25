$(document).ready(function(){
	$('.carousel').slick({
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 2500,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: false,
					centerMode: false,
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					dots: false,
					centerMode: false,
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: false,
					centerMode: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	})
});