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

    $('#course-btn').click(function() {
        $('#drawer').slideToggle(); 
        return false;
    });
    $('#about-btn').click(function() {
        $('body,html').animate({scrollTop: 500}, 500);
        return false;
    });
    $('.item-btn').click(function() {
        $('body,html').animate({scrollTop: 1000}, 500);
        return false;
    });
    $('#contact-btn').click(function() {
        $('body,html').animate({scrollTop: 1300}, 500);
        return false;
    });

    
});



