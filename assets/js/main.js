$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;

  var elementBottom = elementTop + $(this).outerHeight() / 2;

  var viewportTop = $(window).scrollTop();

  var viewportHalf = viewportTop + $(window).height() / 2;

  return elementBottom > viewportTop && elementTop < viewportHalf;
};

$(window).on("load resize scroll", function () {
  $(".section").each(function () {
    if ($(this).isInViewport()) {
      $(this).addClass("viewport");
    } else {
      $(this).removeClass("viewport");
    }
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      992: {
        items: 3,
        nav: true,
        loop: false,
        margin: 15,
      },
      1200: {
        items: 4,
        nav: true,
        loop: false,
        margin: 23,
      },
    },
  });
  $(".owl-carousel2").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
        nav: true,
      },
      767: {
        items: 2,
        nav: false,
      },
      992: {
        items: 3,
        nav: true,
        loop: false,
        margin: 15,
      },
      1200: {
        items: 4,
        nav: true,
        loop: false,
        margin: 23,
      },
    },
  });
});

$('.top-link').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});

$(document).ready(function () {
  $(".mobile-menu").click(function () {
    $(".navmenu").slideToggle();
  });
});


// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});