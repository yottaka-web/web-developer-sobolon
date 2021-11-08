// wow
new WOW().init();


jQuery('.drawer-icon').on('click', function(jQuery) {
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

// google form
$(document).ready(function () {

  let $form = $('#js-form');
  $form.submit(function (e) {  
    $.ajax({
      url: $form.attr('action'),
      data: $form.serialize(),
      type: "POST",
      dataType: "xml",
      statusCode: {
        // 送信に成功したとき
        0: function () {
          $form.slideUp()
          $('#js-success').slideDown()
        },
        // 送信に失敗したとき
        200: function () {
          $form.slideUp()
          $('#js-error').slideDown()
          
        }
      }
    });
    e.preventDefault();
    return false;
  });
  let $submit = $('#js-submit');
  $('#js-form input, #js-form textarea').on('change', function() {
    if(
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form input[name="entry.1643295861"]').prop('checked') === true
    ) {
      // 全て入力された時
      $submit.prop('disabled', false)
      $submit.addClass('is-active')
    } else {
      // 入力されていない時
      $submit.prop('disabled', true)
      $submit.removeClass('is-active')
    }
  });
});