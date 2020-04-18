/*==============================================================================

 * Template Name: Xisaas- HTML5 Landing Page Template
 * Author: ixtheme - (https://themeforest.net/user/theuxlab)
 * Description: Xisaas- HTML5 Landing Page Template
 * Version: 1.0
 * Copyright 2019 theuxlab

==============================================================================*/

(function ($) {

	"use strict";

	// Menu Smooth Scroll
	function smoothSctollTop() {
		$('.menu ul li > a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 80
				}, 1000);
			}
		});
	}
	smoothSctollTop();

	// Sticky Menu 
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-area").removeClass("scroll-header");
		} else {
			$(".header-area").addClass("scroll-header");
		}
	});

	// Sticky Menu  Two
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".scroll-header-2").removeClass("scroll-header");
		} else {
			$(".scroll-header-2").addClass("scroll-header");
		}
	});

	// scrollToTop
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	//Click event to scroll to top
	$('.scrollToTop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// Client Area
	$('.client-active').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 2,
				margin: 15,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 5
			},
			1200: {
				items: 5,
			}
		}
	});
	// Testimonial Slider Area
	$('.testimonial-active').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1
			},
			1200: {
				items: 1,
			}
		}
	});

	// Homepage 4 Slider
	$('.page-4-testimonial-active').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1
			},
			1200: {
				items: 1,
				nav: true,
			}
		}
	});


	// counter
	$('.counter').counterUp({
		delay: 20,
		time: 1000
	});

	// Popup Video
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991"
	});

})(jQuery);	