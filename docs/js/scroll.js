$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 160) {
        $(".header__nav").addClass("menuback");
    } else {
        $(".header__nav").removeClass("menuback");
      }
});