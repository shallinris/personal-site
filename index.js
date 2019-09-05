$(function() {

	// scroll to about section from title page
	$('.bounce').on('click', function(e) {
		$('html, body').animate({
   			scrollTop: $("#about-section").offset().top
		}, 800);
	});

	// scroll to about section from nav
	$('.nav-about').on('click', function(e) {
		$('html, body').animate({
   			scrollTop: $("#about-section").offset().top
		}, 800);
	})

	// scroll to portfolio from nav
	$('.nav-portfolio').on('click', function(e) {
		$('html, body').animate({
   			scrollTop: $("#portfolio-section").offset().top
		}, 800);
	})

		// scroll to contact from nav
	$('.nav-contact').on('click', function(e) {
		$('html, body').animate({
   			scrollTop: $("#contact-section").offset().top
		}, 800);
	})

	// scroll to top from footer
	$('.scroll-top').on('click', function(e) {
		$('html, body').animate({
   			scrollTop: $("#name-page").offset().top
		}, 800);
	})

    // ACT thumbnail carousel 
	const actCarousel = new Siema({
		selector: '.act-carousel',
		duration: 300,
		easing: 'ease-out',
		perPage: 1,
		startIndex: 0,
		draggable: true,
		multipleDrag: true,
		threshold: 10,
		loop: true,
		onInit: () => {},
		onChange: () => {},
	});
	const actPrev = document.querySelector('.act-prev');
	const actNext = document.querySelector('.act-next');
	actPrev.addEventListener('click', () => actCarousel.prev());
	actNext.addEventListener('click', () => actCarousel.next());


    // PT thumbnail carousel 
	const ptCarousel = new Siema({
		selector: '.pt-carousel',
		duration: 300,
		easing: 'ease-out',
		perPage: 1,
		startIndex: 0,
		draggable: true,
		multipleDrag: true,
		threshold: 10,
		loop: true,
		onInit: () => {},
		onChange: () => {},
	});
	const ptPrev = document.querySelector('.pt-prev');
	const ptNext = document.querySelector('.pt-next');
	ptPrev.addEventListener('click', () => ptCarousel.prev());
	ptNext.addEventListener('click', () => ptCarousel.next());


    // cartograph thumbnail carousel 
	const cartoCarousel = new Siema({
		selector: '.carto-carousel',
		duration: 300,
		easing: 'ease-out',
		perPage: 1,
		startIndex: 0,
		draggable: true,
		multipleDrag: true,
		threshold: 10,
		loop: true,
		onInit: () => {},
		onChange: () => {},
	});
	const cartoPrev = document.querySelector('.carto-prev');
	const cartoNext = document.querySelector('.carto-next');
	cartoPrev.addEventListener('click', () => cartoCarousel.prev());
	cartoNext.addEventListener('click', () => cartoCarousel.next());


	// johnny thumbnail carousel
	const johnnyCarousel = new Siema({
		selector: '.johnny-carousel',
		duration: 300,
		easing: 'ease-out',
		perPage: 1,
		startIndex: 0,
		draggable: true,
		multipleDrag: true,
		threshold: 10,
		loop: true,
		onInit: () => {},
		onChange: () => {},
	});
	const johnnyPrev = document.querySelector('.johnny-prev');
	const johnnyNext = document.querySelector('.johnny-next');
	johnnyPrev.addEventListener('click', () => johnnyCarousel.prev());
	johnnyNext.addEventListener('click', () => johnnyCarousel.next());
 

	// popup navbar
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 800) { 
          $('.navbar').removeClass('intro-nav').addClass('scrolled-nav');
          $('.name').removeClass('intro-name').addClass('scrolled-name');
          $('.nav-links').removeClass('intro-nav-links').addClass('scrolled-nav-links');
      } else {
          $('.navbar').removeClass('scrolled-nav').addClass('intro-nav');
          $('.name').removeClass('scrolled-name').addClass('intro-name');
          $('.nav-links').removeClass('scrolled-nav-links').addClass('intro-nav-links');
      }
    });
});


