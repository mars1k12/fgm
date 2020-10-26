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
    $('.form-all').trigger("reset");
    $("label.error").hide();
    $(".error").removeClass("error");
});
//Закрытие модальных окон входа, регистрации, покупки
$('.close-form').on('click', function () {
    $('.form-block').removeClass('active');
    $('.bg-overlay').removeClass('active');
    $('body').removeClass('overflow-hidden');
    $('.form-all').trigger("reset");
    $("label.error").hide();
    $(".error").removeClass("error");
});




//Закрытие всплывающего окна об успешном изменении пароля или почты
$('.close-success-change').on('click', function () {
    $('.success-change').fadeOut();
});




jQuery(function ($) {
        $(document).mouseup(function (e) {
            if (!$(".drop-list").is(e.target) && !$(".arrow-down").is(e.target)  && !$(".account-link").is(e.target) && $('.drop-list').hasClass("active")) {
                $('.drop-list').removeClass('active');
                $('.arrow-down').removeClass('turnover');
            }
        });
});

$('.account').on('click', function () {
        $('.drop-list').toggleClass('active');
        $('.arrow-down').toggleClass('turnover');
});
$('.arrow-down').on('click', function () {
    $('.drop-list').toggleClass('active');
    $('.arrow-down').toggleClass('turnover');
});



$(document).ready(function() {
    $('#slct').niceSelect();
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
                equalTo: "Пароли не совпадают"
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








//открытие изображений
$(".carousel-cell img").click(function () {
    $("#full-image").attr("src", $(this).attr("src"));
    $('#image-viewer').show();
});

$("#image-viewer .close").click(function () {
    $('#image-viewer').hide();
});
$("#image-viewer").click(function () {
    $('#image-viewer').hide();
});



$('.icon').click(function() {
    $(this).toggleClass('active');
    $('.header-right').toggleClass('active-burger');
    $('body').toggleClass('overflow-hidden');
})






let tickerSpeed = 1;

let flickity = null;
let isPaused = false;
let flickity2 = null;
let isPaused2 = false;
const slideshowEl2 = document.querySelector('.js-slideshow2');
const slideshowEl = document.querySelector('.js-slideshow');


const update = () => {
  if (isPaused) return;
  if (flickity.slides) {
    flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
    flickity.selectedIndex = flickity.dragEndRestingSelect();
    flickity.updateSelectedSlide();
    flickity.settle(flickity.x);
  }
  window.requestAnimationFrame(update);
};
const update2 = () => {
    if (isPaused2) return;
    if (flickity2.slides) {
      flickity2.x = (flickity2.x - tickerSpeed) % flickity2.slideableWidth;
      flickity2.selectedIndex = flickity2.dragEndRestingSelect();
      flickity2.updateSelectedSlide();
      flickity2.settle(flickity2.x);
    }
    window.requestAnimationFrame(update2);
  };

const pause = () => {
  isPaused = true;
};
const pause2 = () => {
    isPaused2 = true;
  };

const play = () => {
  if (isPaused) {
    isPaused = false;
    window.requestAnimationFrame(update);
  }
};
const play2 = () => {
    if (isPaused2) {
      isPaused2 = false;
      window.requestAnimationFrame(update2);
    }
  };

flickity = new Flickity(slideshowEl, {
  autoPlay: false,
  prevNextButtons: false,
  pageDots: false,
  draggable: true,
  wrapAround: true,
  selectedAttraction: 0.015,
  friction: 0.25
});
flickity.x = 0;

flickity2 = new Flickity(slideshowEl2, {
    autoPlay: false,
    prevNextButtons: false,
    pageDots: false,
    draggable: true,
    wrapAround: true,
    selectedAttraction: 0.015,
    rightToLeft: true,
    friction: 0.25
  });
  flickity2.x = 0;

slideshowEl.addEventListener('mouseenter', pause, false);
slideshowEl.addEventListener('focusin', pause, false);
slideshowEl.addEventListener('mouseleave', play, false);
slideshowEl.addEventListener('focusout', play, false);
slideshowEl2.addEventListener('mouseenter', pause2, false);
slideshowEl2.addEventListener('focusin', pause2, false);
slideshowEl2.addEventListener('mouseleave', play2, false);
slideshowEl2.addEventListener('focusout', play2, false);

flickity.on('dragStart', () => {
  isPaused = true;
});


flickity2.on('dragStart', () => {
    isPaused2 = true;
  });

update();
update2();


