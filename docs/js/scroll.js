$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $(".header__nav").addClass("menuback");
    } else {
        $(".header__nav").removeClass("menuback");
      }
});