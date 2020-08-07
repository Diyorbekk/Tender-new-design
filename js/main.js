$(document).ready(function () {
    $('#Uz').on('click', function () {
        $('#Ru,#En').removeClass('active');
        $(this).addClass('active')
    });
    $('#Ru').on('click', function () {
        $('#Uz,#En').removeClass('active');
        $(this).addClass('active')
    });
    $('#En').on('click', function () {
        $('#Uz,#Ru').removeClass('active');
        $(this).addClass('active')
    });

    $('.navbar-toggler').on('click', function () {
        $('.main-logo').fadeToggle(100);
        $('.navbar').toggleClass('w-100');
        $('.nav-icon-bar').toggleClass('fa-align-right fa-align-justify');
    });

    /* map function */

    $('#NA').on('click', function () {
        $('.map-info').fadeIn(100).css('right', '-4%').css('top', '-18%');
        $('.info-box-title').html('Navoiy');
    });

    $('#AN').on('click', function () {
        $('.map-info').fadeIn(100).css('right', '-39.5%').css('top', '-19%');
        $('.info-box-title').html('Andijon');
    });

    $('#FG').on('click', function () {
        $('.map-info').fadeIn(100).css('right', '-35%').css('top', '-16.5%');
        $('.info-box-title').html(`Farg'ona`);
    });

    $('#NG').on('click', function () {
        $('.map-info').fadeIn(100).css('right', '-34%').css('top', '-21%');
        $('.info-box-title').html(`Namangan`);
    });

    $('#TOV').on('click', function () {
        $('.map-info').fadeIn(100).css('right', '-26%').css('top', '-23%');
        $('.info-box-title').html(`Toshkent viloyat`);
    });

    $('#TOSH').on('click', function () {
        $('.map-info').fadeIn(100).css('right', '-23%').css('top', '-24.5%');
        $('.info-box-title').html(`Toshkent shahar`);
    });

    $('#SI').on('click', function () {
        $('.map-info').fadeIn(100).css('right', '-20.5%').css('top', '-16.2%');
        $('.info-box-title').html(`Sirdaryo`);
    });

    $('#JZ').on('click', function () {
        $('.map-info').fadeIn(100).css('right', '-15%').css('top', '-13%');
        $('.info-box-title').html(`Jizzax`);
    });

    $('#SA').on('click', function () {
        $('.map-info').fadeIn(100).css('right', '-9%').css('top', '-9%');
        $('.info-box-title').html(`Samarqand`);
    });

    $('#QD').on('click', function () {
        $('.map-info').fadeIn(100).css('right', '-3%').css('top', '-1%');
        $('.info-box-title').html(`Qashqadaryo`);
    });

    $('#SU').on('click', function () {
        $('.map-info').fadeIn(100).css('right', '-14.5%').css('top', '4%');
        $('.info-box-title').html(`Surxandaryo`);
    });

    $('#BX').on('click', function () {
        $('.map-info').fadeIn(100).css('right', '6%').css('top', '-11%');
        $('.info-box-title').html(`Buxoro`);
    });

    $('#XO').on('click', function () {
        $('.map-info').fadeIn(100).css('right', '25%').css('top', '-26%');
        $('.info-box-title').html(`Xorazm`);
    });

    $('#QR').on('click', function () {
        $('.map-info').fadeIn(100).css('right', '30%').css('top', '-39%');
        $('.info-box-title').html(`Qoraqalpog'iston`);
    });

    if (window.matchMedia('(max-width: 1299px)').matches && window.matchMedia('(min-width: 1024px)').matches) {
        $('#XO,#QR,#BX,#SU,#QD,#SA,#JZ,#SI,#TOSH,#TOV,#NG,#FG,#AN,#NA').on('click', function () {
            $('.map-info').fadeIn(100).css('right', '0').css('top', '-25%');
        });

        $('#NA').on('click', function () {
            $('.geo-point').css('left', '-20px').css('top', '137%').css('right', 'unset')
        });

        $('#AN').on('click', function () {
            $('.geo-point').css('right', '13.5%').css('top', '136%').css('left', 'unset')
        });

        $('#FG').on('click', function () {
            $('.geo-point').css('right', '24.5%').css('top', '141%').css('left', 'unset')
        });

        $('#NG').on('click', function () {
            $('.geo-point').css('right', '27%').css('top', '133%').css('left', 'unset')
        });

        $('#TOV').on('click', function () {
            $('.geo-point').css('right', '47%').css('top', '129%').css('left', 'unset')
        });

        $('#TOSH').on('click', function () {
            $('.geo-point').css('right', '54.5%').css('top', '126%').css('left', 'unset')
        });

        $('#SI').on('click', function () {
            $('.geo-point').css('right', '60.5%').css('top', '141%').css('left', 'unset')
        });

        $('#JZ').on('click', function () {
            $('.geo-point').css('right', '76%').css('top', '146%').css('left', 'unset')
        });

        $('#SA').on('click', function () {
            $('.geo-point').css('right', '90%').css('top', '154%').css('left', 'unset')
        });

        $('#QD').on('click', function () {
            $('.geo-point').css('right', '88%').css('top', '171%').css('left', 'unset')
        });

        $('#SU').on('click', function () {
            $('.geo-point').css('right', '75%').css('top', '180%').css('left', 'unset')
        });

        $('#BX').on('click', function () {
            $('.geo-point').css('left', '-30%').css('top', '150%').css('right', 'unset')
        });

        $('#XO').on('click', function () {
            $('.geo-point').css('left', '-76%').css('top', '123%').css('right', 'unset')
        });

        $('#QR').on('click', function () {
            $('.geo-point').css('left', '-75%').css('top', '105%').css('right', 'unset')
        });
    }

    if (window.matchMedia('(max-width: 1023px)').matches && window.matchMedia('(min-width: 768px)').matches) {
        $('#XO,#QR,#BX,#SU,#QD,#SA,#JZ,#SI,#TOSH,#TOV,#NG,#FG,#AN,#NA').on('click', function () {
            $('.map-info').fadeIn(100).css('right', '0').css('top', '-42%');
        });

        $('#NA').on('click', function () {
            $('.geo-point').css('right', '75%').css('top', '124%').css('left', 'unset')
        });

        $('#AN').on('click', function () {
            $('.geo-point').css('right', '9%').css('top', '124%').css('left', 'unset')
        });

        $('#FG').on('click', function () {
            $('.geo-point').css('right', '18%').css('top', '128%').css('left', 'unset')
        });

        $('#NG').on('click', function () {
            $('.geo-point').css('right', '20%').css('top', '122%').css('left', 'unset')
        });

        $('#TOV').on('click', function () {
            $('.geo-point').css('right', '35%').css('top', '118%').css('left', 'unset')
        });

        $('#TOSH').on('click', function () {
            $('.geo-point').css('right', '39.5%').css('top', '116%').css('left', 'unset')
        });

        $('#SI').on('click', function () {
            $('.geo-point').css('right', '44%').css('top', '128.5%').css('left', 'unset')
        });

        $('#JZ').on('click', function () {
            $('.geo-point').css('right', '55%').css('top', '132.5%').css('left', 'unset')
        });

        $('#SA').on('click', function () {
            $('.geo-point').css('right', '67%').css('top', '137%').css('left', 'unset')
        });

        $('#QD').on('click', function () {
            $('.geo-point').css('right', '68%').css('top', '150%').css('left', 'unset')
        });

        $('#SU').on('click', function () {
            $('.geo-point').css('right', '56%').css('top', '158%').css('left', 'unset')
        });

        $('#BX').on('click', function () {
            $('.geo-point').css('right', '92%').css('top', '133%').css('left', 'unset')
        });

        $('#XO').on('click', function () {
            $('.geo-point').css('right', '128%').css('top', '114%').css('left', 'unset')
        });

        $('#QR').on('click', function () {
            $('.geo-point').css('right', '130%').css('top', '98%').css('left', 'unset')
        });
    }

    if (window.matchMedia('(max-width: 767px)').matches && window.matchMedia('(min-width: 320px)').matches) {
        $('#XO,#QR,#BX,#SU,#QD,#SA,#JZ,#SI,#TOSH,#TOV,#NG,#FG,#AN,#NA').on('click', function () {
            $('.map-info').fadeIn(100).css('right', 'unset').css('top', '-25%').css('left', 'unset');
        });
    }


    $(document).on('click', function (e) {
        if (!$(e.target).hasClass("map-box")
            && $(e.target).parents("#uzbekistan-2").length === 0) {
            $(".map-info").fadeOut(100);

        }
    });
});



