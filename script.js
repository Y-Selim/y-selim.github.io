
$(function () {
  var $bar = $('.bar');
  var i = 10;
  var windowWidth = $(window).width();

  var barMotion = setInterval(function () {
    $bar.css('width', i + 'px');
    i++;

    if (i === windowWidth) {
      clearInterval(barMotion);
      $('.add-wip').addClass('wip').fadeIn("slow");
       $('.bar').remove().fadeOut('fast');
    }
  }, 5);

});



