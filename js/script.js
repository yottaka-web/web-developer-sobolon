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
