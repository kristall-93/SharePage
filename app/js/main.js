$(document).ready(function () {

    // Открытие search__explore-dropdown :

    $('.search__explore').on('click', function () {
        if ($('.search__explore-dropdown').hasClass('active')) {
            $('.search__explore-dropdown').removeClass('active').fadeOut();
            $('.search__explore-dropdown-bg').removeClass('active').fadeOut();
            $('.wrapper').css('heigth', '100%');
            $('.wrapper').css('overflow-y', 'auto');
        }
        else {
            $('.search__explore-dropdown').fadeIn().addClass('active');
            $('.search__explore-dropdown-bg').fadeIn().addClass('active');
            $('.wrapper').css('height', '100vh');
            $('.wrapper').css('overflow', 'hidden');
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
                $('.wrapper').css('heigth', '100%');
                $('.wrapper').css('overflow-y', 'auto');
            }
        }
    });
    // Закрытие search__explore-dropdown при нажатии на кнопку :   
    $('.search__explore-close').on('click', function () {
        $('.search__explore-dropdown').removeClass('active').fadeOut();
        $('.search__explore-dropdown-bg').removeClass('active').fadeOut();
        $('.wrapper').css('heigth', '100%');
        $('.wrapper').css('overflow-y', 'auto');
    });

    // Открытие user-menu__dropdown :

    $('.menu__btn, .user-menu__box').on('click', function () {
        if ($('.user-menu__dropdown').hasClass('active')) {
            $(".user-menu__dropdown").removeClass('active').fadeOut();
            $('body, html').css('overflow-y', 'auto');
            $('.wrapper').css('overflow-y', 'auto');
        }
        else {
            $(".user-menu__dropdown").fadeIn().addClass('active');
            $('body, html').css('overflow', 'hidden');
            $('.wrapper').css('overflow', 'hidden');


        }
    });
    // Закрытие user-menu__dropdown при клике в стороне :    
    $(document).mouseup(function (e) {
        var container__user__menu = $('.user-menu');
        if (!container__user__menu.is(e.target) && container__user__menu.has(e.target).length === 0) {
            if ($('.user-menu__dropdown').hasClass('active')) {
                $('.user-menu__dropdown').removeClass('active').fadeOut();
                $('body, html').css('overflow-y', 'auto');
                $('.wrapper').css('overflow-y', 'auto');
            }
        }
    });

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

    // Стилизация элементов форм :
    
    $('.agree-line__check-btn, .results__select, .discussions__select, .requests-list__select, .premium__radiobtn').styler();

    // Изменение текста заголовка на signup-page :

    $(window).resize(function() {
        if ( $(window).width() < 660 ) {
            document.getElementById("signup__title").textContent = 'Create your free account';
        }
        else {
            document.getElementById("signup__title").textContent = 'Create new account for free';
        }
    });

    // Слайдер на news page в breaking-news__item--main: 

    $('.breaking-news__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // infinite: false,
        // vertical: true,
        prevArrow: '<button class="breaking-news__arrow-prev"><img src="images/slider-arrow-right.svg" alt="№"></button>',
        nextArrow: '<button class="breaking-news__arrow-next"><img src="images/slider-arrow-right.svg" alt="№"></button>',
    });

    // Слайдер на news-gallery page в top: 

    $('.top-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
        prevArrow: '<button class="top-slider__arrow-prev"><img src="images/slider-arrow-right.svg" alt="№"></button>',
        nextArrow: '<button class="top-slider__arrow-next"><img src="images/slider-arrow-right.svg" alt="№"></button>',
    });
    // Открытие popup-gallery на news-gallery page:
    $('.gallery-mix__btn-fullscreen').on('click', function () {
        $('.popup-gallery').addClass('active');
    });
    $('.news-single .btn-fullscreen').on('click', function () {
        $('.popup-gallery').addClass('active');
    });

    // переключение вкладок на upload-rewiew page :

    $('.rewiew__tab-content .rewiew__tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.rewiew__tab-content').find('.rewiew__content-item').removeClass('active-tab').hide();
        $('.rewiew__tab-content .rewiew__tabs').find('.rewiew__tab').removeClass('active');
        $('.rewiew__tab-content .rewiew__tabs').find('[data-id='+id+']').addClass('active');       
        // $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    // Отметка добавить в закладки на subpage-india page :

    $('.subpage__item-bookmark').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
        else {
            $(this).addClass('active');
        }
    });

    // Появление copied-notification на subpage-india page :

    $('.share__copy').on('click', function () {
        $('.copied-notification').fadeIn();
        setTimeout(() => { $('.copied-notification').fadeOut(); }, 2000);
    });

    // Отметка "liked" в discussions на news-gallery page:
    // $('.discussions__box-like').on('click', function () {
    //     $('.discussions__item').addClass('discussions__item--liked');
    // });
    // Снятие отметки "liked" в discussions на news-gallery page:
    // $('.discussions__box-you-liked').on('click', function () {
    //     $('.discussions__item').removeClass('discussions__item--liked');
    // });    



});
