$('.menu__button').on('click', function() {
    //$(this).toggleClass('menu__button_active');
    $(this).closest('.menu').toggleClass('menu_active');
});
//$('.menu__close').on('click', function() {
//    $(this).toggleClass('menu__button_active');
//    $(this).closest('.menu__nav').removeClass('menu__nav_active');
//});