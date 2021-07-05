$('.btn-callback--active').click(function(e) {
    e.preventDefault();
    $('.form-callback').fadeIn(800).css({display:'flex'});
    $('html').addClass('no-scroll');
});

$('.close-btn').click(function() {
    $('.form-callback').fadeOut(800);
    $('html').removeClass('no-scroll');
});

$('.btn-mobile').click(function(b) {
    b.preventDefault();
    $('.callback-mobile').fadeIn(800).css({display:'flex'});
    $('html').addClass('no-scroll');
});

$('.close-btn').click(function() {
    $('.callback-mobile').fadeOut(800);
    $('html').removeClass('no-scroll');
});

$('.btn-callback-mobile').click(function(с) {
    с.preventDefault();
    $('.form-callback').fadeIn(800).css({display:'flex'});
    $('html').addClass('no-scroll');
});

$('.btn-callback-mobile').click(function() {
    $('.callback-mobile').fadeOut(1);
    $('html').removeClass('no-scroll');
});

jQuery(function($){
    $(".contact-form__input_tel").mask("+9 (999) 999-99-99",{placeholder:"_"});
 });