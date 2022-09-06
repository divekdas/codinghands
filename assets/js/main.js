

$.fn.isInViewport = function() {

	var elementTop = $(this).offset().top;

	var elementBottom = elementTop + $(this).outerHeight() / 2;

	var viewportTop = $(window).scrollTop();

	var viewportHalf = viewportTop + $(window).height() / 2;

	return elementBottom > viewportTop && elementTop < viewportHalf;

};

$(window).on('load resize scroll', function() {
	$('.section').each(function() {
		if ($(this).isInViewport()) {

            $(this).addClass('viewport');

		} else {

            $(this).removeClass('viewport');

		}
	});

});