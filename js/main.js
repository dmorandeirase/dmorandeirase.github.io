$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();

(function() {
	// Find all carousels on the page
	const carousels = document.querySelectorAll('.hero-carousel');
	
	// Initialize each carousel
	carousels.forEach((carousel, carouselIndex) => {
		const track = carousel.querySelector('.carousel-track');
		const slides = carousel.querySelectorAll('.carousel-slide');
		const indicators = carousel.querySelectorAll('.indicator');
		const prevButton = carousel.querySelector('.carousel-prev');
		const nextButton = carousel.querySelector('.carousel-next');
		
		let currentIndex = 0;

		function updateCarousel() {
			track.style.transform = `translateX(-${currentIndex * 100}%)`;
			indicators.forEach((dot, idx) => {
				dot.classList.toggle('active', idx === currentIndex);
			});
		}

		function changeSlide(direction) {
			currentIndex = (currentIndex + direction + slides.length) % slides.length;
			updateCarousel();
		}

		function goToSlide(index) {
			currentIndex = index;
			updateCarousel();
		}

		// Add event listeners for navigation buttons
		if (prevButton) {
			prevButton.addEventListener('click', () => changeSlide(-1));
		}
		if (nextButton) {
			nextButton.addEventListener('click', () => changeSlide(1));
		}

		// Add event listeners for indicators
		indicators.forEach((indicator, index) => {
			indicator.addEventListener('click', () => goToSlide(index));
		});

		// Optional: Auto-play for each carousel
		setInterval(() => {
			changeSlide(1);
		}, 7000);

		// Initialize the carousel
		updateCarousel();
	});
})();