$(function() {

    $('#web-first').click(function() {
        $('#first-modal').fadeIn();
        return false;
    });

    $('#web-second').click(function() {
        $('#second-modal').fadeIn();
        return false;
    });

    $('#web-third').click(function() {
        $('#third-modal').fadeIn();
        return false;
    });

    $('.js-modal-close').click(function() {
        $('.js-modal').fadeOut();
        return false;
    });

    var topBtn = $('#page-top');
    topBtn.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 80) {
            topBtn.fadeIn(300);
        }else{
            topBtn.fadeOut(300);
        }
    });
    topBtn.click(function() {
        $('body,html').animate({scrollTop: 0}, 500);
        return false;
    });

    $('#drawer').slideToggle(); 
    $('#course-btn').click(function() {
        $('#drawer').slideToggle('active'); 
        return false;
    });
    $('#about-btn').click(function() {
        // $('#drawer').slideToggle('active'); 
        return false;
    });
    $('#contact-btn').click(function() {
        // $('#drawer').slideToggle('active'); 
        return false;
    });

});
