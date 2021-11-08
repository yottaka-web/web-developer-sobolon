// wow
new WOW().init();


jQuery('.drawer-icon').on('click', function($) {
  // e.preventDefault();
  // jQuery(this).alert('click');

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});


jQuery('.contact-form__select').on('click', function () {
  jQuery('span').toggleClass('is-active');
});


jQuery('a[href^="#"]').on('click', function () {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if ( id != '#' ) {
    var position = jQuery(id).offset().top - header;
  };
  console.log(id);
  console.log(position);
  jQuery('body,html').animate({
    scrollTop: position
  }, 500);
  return false;
});
jQuery(window).on('scroll', function() {
  console.log();
  if ( 100 < jQuery(this).scrollTop() ) {
    jQuery('.to-top').addClass('is-show')
  } else {
    jQuery('.to-top').removeClass('is-show')
  }
});
