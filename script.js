/*This is where any JS will go*/

// Idea - mesmirizing a similar http://weavesilk.com
    // -Awwwards .... Barca '15
// Time limit ~ 10s

$(function () {
  var $bar = $('.bar');
  var i = 10;
  var windowWidth = $(window).width();

/*
* Intial loading bar to scramble later on
* Awwwards bar until max window width
*/
  var barMotion = setInterval(function () {
    $bar.css('width', i + 'px');
    i++;

    if (i === windowWidth) {
      clearInterval(barMotion);
    }
  }, 20);

});


