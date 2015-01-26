$(document).ready(function() {
  $.backstretch("img/background.png");

  $('.slide').each(function(index, el) {
    var paddingVal = ($(window).height() - $(this).height())/2;
    $(this).css('padding', paddingVal+'px 0px');
  });

  $('.slider-holder').slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    arrows: false
  });
});