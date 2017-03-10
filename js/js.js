
$(window).load(function() {
    $('#loading').fadeOut(500);
});
$(document).ready(function () {
    $('.image').stop(true).fadeIn({
        duration: 2000,
        queue: false
    }).css('display', 'none').slideDown(1000);
    $('.name').stop(true).fadeIn({
        duration: 1000,
        queue: false
    }).css('display', 'none').slideDown(1000);
    if($(this).scrollTop()>=500){
        $('.profile div').stop(true).fadeIn({
            duration: 1000,
            queue: false
        }).css('display', 'none').slideDown(1000);
    }
    if($(this).scrollTop()>=1300){
        $('.education div').stop(true).fadeIn({
            duration: 1000,
            queue: false
        }).css('display', 'none').slideDown(1000);
    }
    if($(this).scrollTop()>=900){
        $('.project div').stop(true).fadeIn({
            duration: 1000,
            queue: false
        }).css('display', 'none').slideDown(1000);
    }
 });
 if($(this).scrollTop()>=1650){
     $('#experience div').stop(true).fadeIn({
         duration: 1000,
         queue: false
     }).css('display', 'none').slideDown(1000);
 }

$('.parallax-window').parallax({imageSrc: 'images/keyboard.png'});

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
        $('#header').fadeIn(1000, function () { $(this).css('background','white'); $(this).css('border-bottom','1px solid #eee'); });
    }
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('#header').fadeIn(1000, function () { $(this).css('background','null'); $(this).css('border-bottom','null'); });
    }
});

jQuery('.skillbar').each(function(){

    jQuery(this).find('.skillbar-bar').animate({

        width:jQuery(this).attr('data-percent')

    },6000);

});

$("#home-menu").click(function() {
    $('html, body').animate({
        scrollTop: $(".parallax-window").offset().top
    }, 800);
    $('.menu').css('color','#000');
    $('#home-menu').css('color','#FFC300');
});
$("#icon").click(function() {
    $('html, body').animate({
        scrollTop: $(".parallax-window").offset().top
    }, 800);
    $('.menu').css('color','#000');
    $('#home-menu').css('color','#FFC300');
});

$("#pro-menu").click(function() {
    $('html, body').animate({
        scrollTop: $("#profile").offset().top
    }, 800);
    $('.menu').css('color','#000');
    $('#pro-menu').css('color','#FFC300');
});

$("#ed-menu").click(function() {
    $('html, body').animate({
        scrollTop: $("#education").offset().top
    }, 800);
    $('.menu').css('color','#000');
    $('#ed-menu').css('color','#FFC300');
});

$("#project-menu").click(function() {
    $('html, body').animate({
        scrollTop: $("#project").offset().top
    }, 800);
    $('.menu').css('color','#000');
    $('#project-menu').css('color','#FFC300');
});

$("#ex-menu").click(function() {
    $('html, body').animate({
        scrollTop: $("#experience").offset().top
    }, 800);
    $('.menu').css('color','#000');
    $('#ex-menu').css('color','#FFC300');
});

$(window).scroll(function() {
    var ws = $(this).scrollTop();
    if (ws>=500&&ws<900) {
        $('.menu').css('color','#000');
        $('#pro-menu').css('color','#FFC300');
        // $('.profile table').stop(true).fadeIn({
        //     duration: 800,
        //     queue: false
        // }).css('display', 'none').slideDown(1000);
    }else if (ws>=900&&ws<1300) {
        $('.menu').css('color','#000');
        $('#ed-menu').css('color','#FFC300');
    }else if (ws>=1300&&ws<1650) {
        $('.menu').css('color','#000');
        $('#project-menu').css('color','#FFC300');
    }else if (ws>=1650) {
        $('.menu').css('color','#000');
        $('#ex-menu').css('color','#FFC300');
    }else{
        $('.menu').css('color','#000');
        $('#home-menu').css('color','#FFC300');
    }
});
