$(document).ready(() => {
	let menu = $('#dishes').offset().top;
	let gallery = $('#gallery').offset().top;
	let address = $('#address').offset().top;

	$('#btn-about').on('click', (e) => {
		e.preventDefault();
		$('html, body').animate({scrollTop: 380}, 500);
	});

	$('#btn-menu').on('click', (e) => {
		e.preventDefault();
		$('html, body').animate({scrollTop: menu - 40});
	});

	$('#btn-gallery').on('click', (e) => {
		e.preventDefault();
		$('html, body').animate({scrollTop: gallery - 40});
	});

	$('#btn-address').on('click', (e) => {
		e.preventDefault();
		$('html, body').animate({scrollTop: address - 40});
	});

	$('.menu a').each((index, element) => {
		$(this).css({'top': '-200px'});
		$(this).animate({top: '0'}, 2000 + (index * 500));
	});

	if ($(window).width() > 800) {
		$('header .texts').css({
			opacity: 0,
			marginTop: 0,
		});

		$('header .texts').animate({
			opacity: 1,
			marginTop: '-52px',
		}, 1500);
	}
});