$(document).ready(function() {

  $(window).scroll(function() {
  function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('div').animate({width: progressBarWidth}, 1000).html(percent + ' %')
  }
    var top_of_element = $("#jsBar").offset().top;
    var bottom_of_element = $("#jsBar").offset().top + $("#jsBar").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).height();
    var top_of_screen = $(window).scrollTop();

    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        // The element is visible, do something
        progress(60, $('#jsBar'))
        progress(60, $('#htmlBar'))
        progress(60, $('#cssBar'))
    }
  });

})

