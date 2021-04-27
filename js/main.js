
$(function () {

    'use strict';
    //adjust slider hieght
    var winh   = $(window).innerHeight(),
        upperh = $('.upper-bar').innerHeight(),
        navh   = $('.navbar').innerHeight(); 
        $('.slider, .carousel-item').height(winh-( upperh )+( navh ));

        //Fatured Work Shuffle
        $('.featured-work ul li').on('click' , function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class')==='all') {
            $('.shuffle-imgs .col-sm').css('opacity', 1);
        } else {
            $('.shuffle-imgs .col-sm').css('opacity', '.08');
            $($(this).data('class')).parent().css('opacity', 1);
        }

        });
 });