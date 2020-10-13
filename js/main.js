//открытие модального окна входа
$('.login-link').on('click', function () {
    $('.login-block').addClass('active');
    $('.reg-block').removeClass('active');
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});
//открытие модального окна регистрации
$('.reg-link').on('click', function () {
    $('.login-block').removeClass('active');
    $('.reg-block').addClass('active')
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});
//открытие модального окна входа при регистрации
$('.login-link2').on('click', function () {
    $('.form-block').removeClass('active');
    $('.login-block').addClass('active');
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});
//открытие модального окна восстановления пароля
$('.recovery-link').on('click', function () {
    $('.login-block').removeClass('active');
    $('.recovery-block').addClass('active');
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});





//открытие модального окна депозита
$('.deposit-btn').on('click', function () {
    $('.deposit-block').addClass('active');
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});
//открытие модального окна скачивания файла
$('.download-btn ').on('click', function () {
    $('.download-block').addClass('active');
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});
//открытие модального окна изменения почты
$('.change-email').on('click', function () {
    $('.change-email-block').addClass('active');
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});
//открытие модального окна изменения пароля
$('.change-pass').on('click', function () {
    $('.change-pass-block').addClass('active');
    $('.bg-overlay').addClass('active');
    $('body').addClass('overflow-hidden');
});





//Закрытие модальных окон входа, регистрации, покупки
$('.bg-overlay').on('click', function () {
    $('.form-block').removeClass('active');
    $('.bg-overlay').removeClass('active');
    $('body').removeClass('overflow-hidden');
});
//Закрытие модальных окон входа, регистрации, покупки
$('.close-form').on('click', function () {
    $('.form-block').removeClass('active');
    $('.bg-overlay').removeClass('active');
    $('body').removeClass('overflow-hidden');
});




//Закрытие всплывающего окна об успешном изменении пароля или почты
$('.close-success-change').on('click', function () {
    $('.success-change').fadeOut();
});




$('.account').on('click', function () {
    $('.drop-list').toggleClass('active');
    $('.arrow-down').toggleClass('turnover');
});







//валидация регистрации
$(document).ready(function () {
    $("#regform").validate({
        rules: {
            "login": {
                required: true,
            },
            "email": {
                required: true,
                email: true
            },
            "password": {
                required: true
            },
            "password2": {
                equalTo: "#password"
            },
            "agree-chk": {
                required: true,
            },
        },
        messages: {
            "login": {
                required: "Введите логин"
            },
            "email": {
                required: "Введите почту",
                email: "Неверный формат почты"
            },
            "password": {
                required: "Введите пароль"
            },
            "password2": {
                required: "Введите пароль",
                equalTo:"Пароли не совпадают"
            },
            "agree-chk": {
                required: "Нет согласия"
            }
        }
    });
});


//валидация входа
$(document).ready(function () {
    $("#loginform").validate({
        rules: {
            "login": {
                required: true,
            },
            "password": {
                required: true
            },

        },
        messages: {
            "login": {
                required: "Введите логин"
            },
            "password": {
                required: "Введите пароль"
            },
        }
    });
});


//валидация восстановления почты
$(document).ready(function () {
    $("#recoveryform").validate({
        rules: {
            "email5": {
                required: true,
                email: true
            },
        },
        messages: {
            "email5": {
                required: "Введите почту",
                email: "Неверный формат почты"
            },
        }
    });
});




//валидация депозита
$(document).ready(function () {
    $("#depositform").validate({
        rules: {
            "sum": {
                required: true,
            },
        },
        messages: {
            "sum": {
                required: "Введите сумму",
                min: "Некорректная сумма",
                remote: "Некорректная сумма"
            },
        }
    });
});


//валидация смены почты
$(document).ready(function () {
    $("#changemailform").validate({
        rules: {
            "email1": {
                required: true,
                email: true
            },
            "email2": {
                required: true,
                email: true
            },
            "email3": {
                email: true,
                required: true,
                equalTo: "#email2"
            },
        },
        messages: {
            "email1": {
                required: "Введите почту",
                email: "Неверный формат почты"
            },
            "email2": {
                required: "Введите новую почту",
                email: "Неверный формат почты"
            },
            "email3": {
                required: "Подтвердите новую почту",
                equalTo: "Введённая почта не совпадает",
                email: "Неверный формат почты"
            },
        }
    });
});


//валидация кода под-ния смены почты
$(document).ready(function () {
    $("#changemailform2").validate({
        rules: {
            "pass-code": {
                required: true,
            },
        },
        messages: {
            "pass-code": {
                required: "Введите код подтвержения",
            },
        }
    });
});


//валидация смены пароля
$(document).ready(function () {
    $("#changepassform").validate({
        rules: {
            "password1": {
                required: true,
            },
            "password2": {
                required: true,
            },
            "password3": {
                required: true,
                equalTo: "#password2"
            },
        },
        messages: {
            "password1": {
                required: "Введите пароль",
            },
            "password2": {
                required: "Введите новый пароль",
            },
            "password3": {
                required: "Подтвердите новый пароль",
                equalTo: "Пароли не совпадают"
            },
        }
    });
});


//валидация смены пароля2
$(document).ready(function () {
    $("#changepassform2").validate({
        rules: {
            "pass-code": {
                required: true,
            },
        },
        messages: {
            "pass-code": {
                required: "Введите код подтвержения",
            },
        }
    });
});


//валидация восстановления пароля
$(document).ready(function () {
    $("#recoverypassform").validate({
        rules: {
            "password4": {
                required: true,
            },
            "password5": {
                required: true,
                equalTo: "#password4"
            },
        },
        messages: {
            "password4": {
                required: "Введите новый пароль",
            },
            "password5": {
                required: "Подтвердите новый пароль",
                equalTo: "Пароли не совпадают"
            },
        }
    });
});






//carousel
$(document).ready(function () {
    $('#owl-first').owlCarousel({
        margin: 25,
        item: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 3500,
        autoplayHoverPause: true,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 2,
                nav: false,
                margin: 25
            }
        }
    })
    $('#owl-second').owlCarousel({
        margin: 25,
        item: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 3500,
        autoplayHoverPause: true,
        slideTransition: 'linear',
        nav: false,
        rtl:true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 2,
                nav: false,
                margin: 25
            }
        }
    })
});





$(".owl-carousel img").click(function(){
    $("#full-image").attr("src", $(this).attr("src"));
    $('#image-viewer').show();
  });
  
  $("#image-viewer .close").click(function(){
    $('#image-viewer').hide();
  });