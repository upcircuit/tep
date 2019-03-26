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
				breakpoint: 1280,
				settings: {
					dots: false,
					centerPadding: 0,
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 1024,
				settings: {
					dots: false,
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 800,
				settings: {
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	})
});