$(document).ready(function () {

  // header-nav
  var headerNav = $("#header");
  var scrollOffset = $(window).scrollTop();
  var headerH = $("#header").innerHeight();
  var burger = $("#nav");
  var navToggle = $(".nav-opener");
  var topNav = $(".top-nav");

  //  header-fixed
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset > headerH) {
      headerNav.addClass("fixed");
    } else {
      headerNav.removeClass("fixed");
    }
  }

  // slick-carousel
  $('.intro-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    fade: true,
    cssEase: 'linear'
  });


});