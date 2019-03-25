$("#logo-arrow").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $("#slogan").offset().top},
        'slow');
});

$("#slogan-arrow").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $("#intro").offset().top},
        'slow');
});