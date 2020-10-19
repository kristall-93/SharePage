$(document).ready(function () {

    // Открытие search__explore-dropdown :

    $('.search__explore').on('click', function () {
        if ($('.search__explore-dropdown').hasClass('active')) {
            $('.search__explore-dropdown').removeClass('active').fadeOut();
            $('.search__explore-dropdown-bg').removeClass('active').fadeOut();
            $('.wrapper').css('position', 'static');
            // $(".wrapper").removeClass('hidden');   
        }
        else {
            $('.search__explore-dropdown').fadeIn().addClass('active');
            $('.search__explore-dropdown-bg').fadeIn().addClass('active');
            $('.wrapper').css('position', 'fixed');
            // $(".wrapper").addClass('hidden');

        }
    });
    // Закрытие search__explore-dropdown при клике в стороне :        
    $(document).mouseup(function (e) {
        var container__dropdown = $('.search__explore-dropdown');
        var container__search__explore = $(".search__explore");
        if (!container__dropdown.is(e.target) && container__dropdown.has(e.target).length === 0 && !container__search__explore.is(e.target) && container__search__explore.has(e.target).length === 0) {
            if ($('.search__explore-dropdown').hasClass('active')) {
                $('.search__explore-dropdown').removeClass('active').fadeOut();
                $('.search__explore-dropdown-bg').removeClass('active').fadeOut();
                $('.wrapper').css('position', 'static');
                // $(".wrapper").removeClass('hidden');   
            }
        }
    });
    // Закрытие search__explore-dropdown при нажатии на кнопку :   
    $('.search__explore-close').on('click', function () {
        $('.search__explore-dropdown').removeClass('active').fadeOut();
        $('.search__explore-dropdown-bg').removeClass('active').fadeOut();
        $('.wrapper').css('position', 'static');
        // $(".wrapper").removeClass('hidden');
    });


    // Открытие user-menu__dropdown :

    $('.menu__btn, .user-menu__box').on('click', function () {
        if ($('.user-menu__dropdown').hasClass('active')) {
            $(".user-menu__dropdown").removeClass('active').fadeOut();
            $('body, html').css('overflow-y', 'auto');
        }
        else {
            $(".user-menu__dropdown").fadeIn().addClass('active');
            $('body, html').css('overflow', 'hidden');

        }
    });
    // Закрытие user-menu__dropdown при клике в стороне :    
     $(document).mouseup(function (e) {
        var container__user__menu = $('.user-menu');
        if (!container__user__menu.is(e.target) && container__user__menu.has(e.target).length === 0) {
            if ($('.user-menu__dropdown').hasClass('active')) {
                $('.user-menu__dropdown').removeClass('active').fadeOut();
                $('body, html').css('overflow-y', 'auto');
            }
        }
    });
    // $(document).mouseup(function (e) {
    //     var container__dropdown = $('.user-menu__dropdown');
    //     var container__menu__btn = $('.menu__btn');
    //     var container__user__menu__box = $('.user-menu__box');
    //     if (!container__dropdown.is(e.target) && container__dropdown.has(e.target).length === 0 && !container__menu__btn.is(e.target) && container__menu__btn.has(e.target).length === 0 && !container__user__menu__box.is(e.target) && container__user__menu__box.has(e.target).length === 0) {
    //         if ($('.user-menu__dropdown').hasClass('active')) {
    //             $('.user-menu__dropdown').removeClass('active').fadeOut();
    //             $('body, html').css('overflow-y', 'auto');
    //         }
    //     }
    // });
   
    
    // Переключение светлой и темной темы:

    $('.btn-dark-mode').on('click', function () {
        $('body').addClass('dark');
        $('.btn-light-mode').removeClass('active'); 
        $('.btn-dark-mode').addClass('active');        
    });
    $('.btn-light-mode').on('click', function () {
        $('body').removeClass('dark');
        $('.btn-dark-mode').removeClass('active');        
        $('.btn-light-mode').addClass('active'); 
    });

    // переключение вкладок recommended :

    $('.recommended__inner .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.recommended__inner').find('.tab-item').removeClass('active-tab').hide();
        $('.recommended__inner .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    // Слайдер секции IMAGE GALLERY : 

    $('.gallery__slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button class="slider__arrow-prev"><img src="images/slider-arrow-prev.svg" alt=""></button>',
        nextArrow: '<button class="slider__arrow-next"><img src="images/slider-arrow-next.svg" alt=""></button>',
    });    

    // Слайдеры в popup-gallery :
    
    $('.popup__slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        // infinite: false,
        touchThreshold: 10,
        asNavFor: '.popup__slider-nav'
    });
    $('.popup__slider-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.popup__slider-main',
        // infinite: false,
        // centerMode: true,
        focusOnSelect: true,
        swipeToSlide: true,
        waitForAnimate: false,
        variableWidth: true,
        prevArrow: '<button class="popup__slider__arrow-prev"><img src="images/gallery-arrow.svg" alt=""></button>',
        nextArrow: '<button class="popup__slider__arrow-next"><img src="images/gallery-arrow.svg" alt=""></button>',
    });

    $('.slider-item__open-gallery').on('click', function () {
        $('.popup-gallery').addClass('active');
    });

    $('.gallery__preview').on('click', function () {
        $('.popup-gallery').addClass('active');
    });


    // закрытие попап-уведомления 'notification' :

    $('.notification__close').on('click', function () {
        $('.notification').fadeOut();
    });

    // появление мобильного меню :
    // $('.menu_btn').on('click', function () {
    //     $('.header_line').slideToggle();
    //     if ($('.menu_btn').hasClass('closed')) {
    //         $(".menu_btn").removeClass('closed');
    //         $(".menu_btn").addClass('opened');
    //         $("body, html").css('overflow', 'hidden');
    //     }
    //     else {
    //         $(".menu_btn").removeClass('opened');
    //         $(".menu_btn").addClass('closed');
    //         $("body, html").css('overflow-y', 'auto');
    //     }

    // });
    // Закрытие меню при клике не на области меню и кнопки 
    // $(document).mouseup(function (e) {
    //     var container_menu = $(".header_line");
    //     var container_menu_btn = $(".menu_btn");
    //     // if the target of the click isn't the container nor a descendant of the container
    //     if (!container_menu.is(e.target) && container_menu.has(e.target).length === 0 && !container_menu_btn.is(e.target) && container_menu_btn.has(e.target).length === 0) {
    //         if ($('.header_line').css('display', 'block')) {
    //             $('.header_line').css('display', 'none');
    //             $(".menu_btn").removeClass('opened');
    //             $(".menu_btn").addClass('closed');

    //         }
    //     }
    // });   




    // переключение 2х-шагового входа:
    // $(".two_step_verify_btn").click(function () {
    //     if ($('.two_step_verify_btn').hasClass('active')) {
    //         $(".two_step_verify_btn").removeClass('active');
    //         document.getElementById("two_step_verify_btn").textContent = 'TURN ON';
    //         $(".two_step_verify").removeClass('active');
    //         document.getElementById("two_step_verify_text").textContent = 'Two-step verification off';
    //     }
    //     else {
    //         $(".two_step_verify_btn").addClass('active');
    //         document.getElementById("two_step_verify_btn").textContent = 'TURN OFF';
    //         $(".two_step_verify").addClass('active');
    //         document.getElementById("two_step_verify_text").textContent = 'Two-step verification on';
    //     }
    // });


    // "звездный рейтинг" изменяемый:
    // $("#rateYo").rateYo({
    //     starWidth: "39px",
    //     spacing: "9px",
    //     normalFill: "#E3E6F1",
    //     ratedFill: "#F2EC2F",
    //     starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
    // });

    // "звездный рейтинг" не изменяемый:
    // $("#writer_rating").rateYo({
    //     starWidth: "23px",
    //     spacing: "5px",
    //     rating: 4.1,
    //     readOnly: true,
    //     normalFill: "#D6DAE7",
    //     ratedFill: "#F2EC2F",
    //     starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>'
    // });


});
