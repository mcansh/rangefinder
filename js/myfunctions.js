var $nav = $("nav");

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      // $nav.css({"background-color": "rgba(0, 0, 0, 0.5)", "-webkit-backdrop-filter": "blur(10px)"});
      $nav.addClass("scrolled");
    }
    else {
      // $nav.css({"background-color": "rgba(0, 0, 0, 0.0)", "-webkit-backdrop-filter": "blur(0px)"});
      $nav.removeClass("scrolled");
    }
});
