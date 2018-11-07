$(document).ready(function(){
	// Mobile nav
	$('.menu-opener').bigSlide({
		side: 'right',
		easyClose: true,
		menuWidth: '100%'
	});

	// Accordions
	$('.accordion .accordion-header').click(function(){
		$(this).siblings('.accordion-content').stop().slideToggle(300);
		$(this).toggleClass('opened');
	});

	$('.accordion:first-child .accordion-header').click();

	// Sliders
	$('body:not(.rtl) .main-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: true
				}
			}
		]
	});

	$('body.rtl .main-slider').slick({
		rtl: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: true
				}
			}
		]
	});

	// ----------

	$('body:not(.rtl) .how-it-works-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		centerMode: true,
		focusOnSelect: true,
		asNavFor: '.how-it-works-descriptions-slider'
	});

	$('body.rtl .how-it-works-slider').slick({
		rtl: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		centerMode: true,
		focusOnSelect: true,
		asNavFor: '.how-it-works-descriptions-slider'
	});

	// ----------

	$('body:not(.rtl) .how-it-works-descriptions-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.how-it-works-slider',
		adaptiveHeight: true
	});

	$('body.rtl .how-it-works-descriptions-slider').slick({
		rtl: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		focusOnSelect: true,
		asNavFor: '.how-it-works-slider',
		adaptiveHeight: true
	});

	// ----------

	$('body:not(.rtl) .restaurants-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					arrows: true,
				}
			},
			{
				breakpoint: 576,
				settings: {
					variableWidth: true,
					slidesToShow: 1,
					arrows: true,
				}
			}
		]
	});

	$('body.rtl .restaurants-slider').slick({
		rtl: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					arrows: true,
				}
			},
			{
				breakpoint: 576,
				settings: {
					variableWidth: true,
					slidesToShow: 1,
					arrows: true,
				}
			}
		]
	});

	// ----------

	// Advantages Slider
	var advantagesSliderFlag = false;

	function advantagesSliderInit(){
		if ( $(window).width() <= 575 && !advantagesSliderFlag) {
			$('body:not(.rtl) .advantages-slider').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: true,
				adaptiveHeight: true
			});

			$('body.rtl .advantages-slider').slick({
				rtl: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: true,
				adaptiveHeight: true
			});

			advantagesSliderFlag = true;
		} else if($(window).width() > 575 && advantagesSliderFlag) {
			$('.advantages-slider').slick('unslick');
			advantagesSliderFlag = false;
		}
	}

	if ( $(window).width() <= 575 ){
		advantagesSliderInit();
	}

	$(window).resize(function(){
		advantagesSliderInit();
	});

	// Prices Slider
	var pricesSliderFlag = false;

	function pricesSliderInit(){
		if ( $(window).width() <= 767 && !pricesSliderFlag) {
			$('body:not(.rtl) .prices-slider').slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: true,
				adaptiveHeight: true
			});

			$('body.rtl .prices-slider').slick({
				rtl: true,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: true,
				adaptiveHeight: true
			});

			pricesSliderFlag = true;
		} else if($(window).width() > 767 && pricesSliderFlag) {
			$('body:not(.rtl) .prices-slider').slick('unslick');
			pricesSliderFlag = false;
		}
	}

	if ( $(window).width() <= 767 ){
		pricesSliderInit();
	}

	$(window).resize(function(){
		pricesSliderInit();
	});

	// Scroll to anchor
	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = $('.header').innerHeight();
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
		e.preventDefault();
	});

	// Sticky Header
	var isSticky = false;

	$(window).scroll(function(){
		if( !isSticky && $(window).scrollTop() > 80 ){
			$('.header').addClass('sticky');
			isSticky = true;
		} else if(isSticky && $(window).scrollTop() <= 80){
			$('.header').removeClass('sticky');
			isSticky = false;
		}
	});

	// Radio Items
	$('[data-radio]').click(function(){
		var target = $(this).data('target');
		var value = $(this).data('radio');

		$('[data-target='+target+']').removeClass('selected');
		$(this).addClass('selected');

		$(target).val(value);
	});

	$('[data-radio].selected').click();

	// Forms Validation
	$('.get-in-touch-form').validate({
		errorPlacement: function(error, element) {
			error.appendTo( element.closest('.form-field').find(".field-error") );
		},
		rules: {
			userName: {
				required: true
			},
			userEmail: {
				required: true,
				email: true
			},
			userMessage: {
				required: true,
			}
		}
	});

	$('.create-account-form').validate({
		errorPlacement: function(error, element) {
			error.appendTo( element.closest('.form-field').find(".field-error") );
		},
		rules: {
			userName: {
				required: true
			},
			userEmail: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minwidth: 6
			},
			confirmPassword: {
				required: true,
				equalTo: "#password"
			}
		}
	});

	// TODO: ↓↓↓ remove this script ↓↓↓
	// Current menu item highlithing
	$(function () {
		var location = window.location.href;
		var cur_url = location.split('/').pop();

		$('.top-nav li, .panel-nav li, .footer-nav li').each(function () {
			var link = $(this).find('a').attr('href');

			if (cur_url == '') {
				cur_url = 'index.php';
			}

			if (cur_url == link)
			{
				$(this).addClass('current-menu-item');
				$(this).parents('li').addClass('current-menu-parent');
			}
		});
	});
});