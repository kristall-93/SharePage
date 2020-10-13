// $(document).ready(function () {

    // // Слайдер : 
    // $('.clients_slider').slick({
    //     // dots: true,
    //     // infinite: false,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     prevArrow: '<button class="arrow_prev_client"></button>',
    //     nextArrow: '<button class="arrow_next_client"><img src="images/arrow-next-client.svg" alt=""></button>',
    //     responsive: [{
    //         breakpoint: 1760,
    //         settings: {
    //             slidesToShow: 4,
    //         }
    //     },
    //     {
    //         breakpoint: 1220,
    //         settings: {
    //             slidesToShow: 3,
    //         }
    //     },
    //     ]
    // });
    // если надо переключать доп. кнопкой :
    // $('.slider_next').click(function () {
    //     $("#slider").slick('slickNext');
    // });


    // закрытие попап-уведомлений (своих, не fancybox) :
    // $('.notification_close').on('click', function () {
    //     $('.notify').removeClass('notify_active');
    // });

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

    // появление sidebar :
    // $(".user").click(function () {
    //     $(".sidebar").removeClass('hidden');
    //     $(".sidebar").addClass('active');
    //     $("body, html").css('overflow', 'hidden');
    //     return false;
    // });
    // $(document).mouseup(function (e) {
    //     var container = $(".sidebar");
    //     // if the target of the click isn't the container nor a descendant of the container
    //     if (!container.is(e.target) && container.has(e.target).length === 0) {
    //         if ($('.sidebar').hasClass('active')) {
    //             $(".sidebar").removeClass('active');
    //             $(".sidebar").addClass('hidden');
    //         }
    //         $("body, html").css('overflow-y', 'auto');
    //     }
    // });
    
    
    // переключение вкладок:
    // $('.settings__tabs .tab').on('click', function (event) {
    //     var id = $(this).attr('data-id');
    //     $('.settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    //     $('.settings__tabs .tabs').find('.tab').removeClass('active');
    //     $(this).addClass('active');
    //     $('#' + id).addClass('active-tab').fadeIn();
    //     return false;
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


// });
