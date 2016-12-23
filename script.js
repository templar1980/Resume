var logo = {
    html: "logo/html.png",
    css: "logo/css.png",
    js: "logo/js.png",
    ajax: "logo/ajax.png",
    bootstrap: "logo/bootstrap.png",
    parallax: "logo/parallax.png",
    jquery: "logo/jquery.png",
    modernizr: "logo/modernizr.png",
    svg: "logo/svg.png",
    cssanimation: "logo/cssanimation.png"
}
var sites = [{
    name: "Интернет магазин",
    customer: "частное лицо",
    theme: "Ножы ручной работы",
    frameworks: ["jQuery", "Modernizr", "SVG", "AJAX", "CSS animation", "SVG animation"],
    info: "При создании проэкта не было использовано ни одного плагина, весь функционал сайта создан самостоятельно. Single Page Application.",
    url: "sites/BF/index.html",
    imgUrl: ['img/knife-1.png', 'img/knife-2.png', 'img/knife-3.png'],
    menu: "commercial",
    id: "BurtFoster"
}, {
    name: "Landing page",
    customer: "OOO «Панорама»",
    theme: "Ювелирные изделия",
    frameworks: ["jQuery", "Modernizr", "Parallax", "CSS animation"],
    info: "Страница, продающая акционные ювелирные изделия, с возможность заказа звонка. Просмотр изделий в модальном окне, обратный таймер.",
    url: "sites/zolbaz/index.html",
    imgUrl: ['img/zol-baz-1.png', 'img/zol-baz-2.png', 'img/zol-baz-3.png'],
    menu: "commercial",
    id: "ZolBaz"
}, {
    name: "BigStore",
    theme: "Одежда",
    customer: "beClever",
    frameworks: ["Modernizr", "Bootstrap", "native JS", "jQuery"],
    info: "Страница интернет-магазина \"Big Store\", созданная при прохождении курсов \"Front-End Pro\"",
    url: "sites/bigStore/index.html",
    imgUrl: ['img/bigStore-1.png', 'img/bigStore-2.png', 'img/bigStore-3.png'],
    menu: "other",
    id: "bigStore"
}, {
    name: "Analog and Digital Clock",
    theme: "Обучение",
    customer: "beClever",
    frameworks: ["native JS"],
    info: "Часы созданы на native JS",
    url: "sites/Clock/index.html",
    imgUrl: ['img/clock-1.png', 'img/clock-2.png', 'img/clock-3.png'],
    menu: "other",
    id: "clock"
}, {
    name: "Камень, ножницы, бумага",
    theme: "Обучение, игра",
    customer: "beClever",
    frameworks: ["native JS"],
    info: "Игра в камень, ножницы, бумага - создана на native JS",
    url: "sites/myGame/index.html",
    imgUrl: ['img/game-1.png', 'img/game-2.png', 'img/game-3.png'],
    menu: "other",
    id: "game"
}]

$(window).on('unload', function(event){
    if ($('.window').width() == 0) {
         localStorage.removeItem("statePagePortfolio");
    }
0
});

$(document).ready(function() {

    $(window).keydown(function(event) {
        var chek = !!$('.window').width();
        if ((event.which == 27) && (chek)) {
            $('.btn-win-close img').click();
        }
    });

    $('.menu li.resume-page').click(function() {
        var self = this;
        clearEffects(self);
        $('.content').show();
        setTimeout(function() {
            $('.skills-icon').addClass('anim-icon');
            $('.skills-icon').each(function(index) {
                $(this).css({
                    transition: 'all 0.6s ' + (index + 1) * 0.2 + 's ease-out'
                });

            });
            setTimeout(function() {
                $('.skills-scale .scale').each(function(index) {
                    var width = $(this).attr('data-per');
                    $(this).find('div').css({ width: width + '%' });
                });
            }, 400);
        }, 50);
    });

    $('.menu li.portfolio-page').click(function() {
        var self = this;
        clearEffects(self);
        createPortfolioItem();
        $('.portfolio').show();
        setTimeout(function() {
            $('.port-image').each(function(index) {
                $(this).css({
                    transform: 'rotateY(0)',
                    opacity: 1,
                    transition: 'all 0.6s ease-out ' + (index + 1) * 0.2 + 's'
                });
            });
        }, 50);
    });

    $('.menu li.contacts-page').click(function() {
        var self = this;
        clearEffects(self);
        $('.contacts-box').css({ display: 'flex' });

        setTimeout(function() {
            $('.contacts-box').find('i').each(function(index) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0.2em) rotateY(0deg)',
                    transition: 'all 0.5s ' + (0.2 * (index + 1)) + 's ease-out'
                });
                $(this).next().css({
                    opacity: 1,
                    transform: 'none',
                    transition: 'all 0.5s ' + (0.21 * (index + 1)) + 's ease-out'
                });
            });
        }, 50);
    });

    $('.btn-win-close img').click(function() {

        setTimeout(function() {
            $('.window').children().hide();
        }, 200);

        $('.window').css({ height: '5px' });
        var elem = $('.window');
        setTimeout(function() {
            $(elem).css({
                width: '0%'
            });
        }, 300);

        setTimeout(function() {
            $('.portfolio').fadeIn(300);
        }, 900);
    });

    $('.window a').click(function(){
        localStorage["statePagePortfolio"]='true';
    });

    $('.menu li.home-page').click(function() {
        localStorage.removeItem('statePagePortfolio');
        location.reload();
    });

    if (localStorage['statePagePortfolio']) {
        $('.menu li.portfolio-page').click();
        $('div.foto').addClass('changed');
        $('.foto').css({
            transform: 'none',
            transition: 'none',
            opacity: 1
        });
        $('.header').css({transition:'none'});
        $('.name').css({
            transform: 'none',
            transition: 'none',
            opacity: 1
        });
        localStorage.removeItem('statePagePortfolio');
    } else {
        $('.foto').css({
            transform: 'none',
            opacity: 1
        });
        $('.name').css({
            transform: 'none',
            opacity: 1
        });
        $('.right-border').css({
            width: '300px',
            height: '100px'
        });
        $('.contacts a').addClass('anim');
        setTimeout(function() {
            $('div.foto').addClass('changed');
        }, 600);

        setTimeout(function(){
            $('.contacts li a').each(function(index){
                $(this).css({
                    opacity:1,
                    transform: 'none',
                    transitionDelay: 0.2*(index+1) + 's'
                });
            });
        },1000);
    };
});


function clearEffects(self) {
    $('.animate-web').hide();
    $('.right-border').hide();
    $('.portfolio').hide();
    $('.menu .active').removeClass('active');
    $(self).addClass('active');
    $('.header, .foto').removeClass('to-center');
    $('.content').hide();
    $('.contacts-box').hide();
    $('.portfolio').hide();
    $('.contacts-box i').css({ opacity: 0, transform: 'translateY(0.2em) rotateY(-90deg)' });
    $('.contacts-box span').css({ opacity: 0, transform: 'translateX(-10px)' });
    $('.skills-icon').removeClass('anim-icon');
    $('.skills-scale .scale div').css({ width: 0 });
}

function createPortfolioItem() {
    $('.port-image-container').html('');
    $(sites).each(function(index) {
        var $item = $('<div>').addClass('port-image').attr('data-id', sites[index].id);
        $('<img>', { src: sites[index].imgUrl[0] }).appendTo($item);
        var $des = $('<div>').addClass('port-des').appendTo($item);
        $('<div>').addClass('port-des-img').css({
            'background-image': 'url(' + sites[index].imgUrl[2] + ')'
        }).appendTo($des);

        var $desInfo = $('<div>').addClass('port-des-info').appendTo($des);
        var $ul = $('<ul>').appendTo($desInfo);

        $('<img>').attr('src', logo.html).appendTo($ul).wrap($('<li>'));
        $('<img>').attr('src', logo.css).appendTo($ul).wrap($('<li>'));
        $('<img>').attr('src', logo.js).appendTo($ul).wrap($('<li>'));

        var arr = sites[index].frameworks;
        $(arr).each(function(index) {
            var name = arr[index].toLowerCase().replace(" ", "");
            if (logo[name]) {
                $('<img>').attr('src', logo[name]).appendTo($ul).wrap($('<li>'));
            }
        });

        $('<div>').addClass('port-des-info-name').text(sites[index].name).appendTo($desInfo);
        $('<div>').addClass('port-des-info-theme').html('Тематика: <span>' + sites[index].theme + '<span>').appendTo($desInfo);
        $('<div>').addClass('port-des-info-customer').html('Заказчик: <span>' + sites[index].customer + '<span>').appendTo($desInfo);

        if (sites[index].menu === "commercial") {
            $('.commercial').append($item);
        } else {
            $('.other').append($item);
        }
    })


    $('.port-image').on('click', function(event) {
        $('.window').children().show();
        var id = $(event.currentTarget).attr('data-id');
        renderWindow(id);

        $('.window').css({
            width: '100%'
        });

        setTimeout(function() {
            $('.window').css({
                height: '100%'
            });

        }, 650);
        setTimeout(function() {
            $('.portfolio').fadeOut(300);

        }, 200);

        setTimeout(function() {
            $('.port-anim').each(function(index) {
                $(this).css({
                    transition: 'all 0.5s ' + (0.2 * index + 1) + 's',
                    opacity: 1,
                    transform: 'none'
                })
            });
        }, 450);
    });
}

function renderWindow(id) {
    var obj;
    $(sites).each(function(index) {
        if (sites[index].id == id) {
            obj = sites[index];
        };
    });

    $('.des-img').attr('href', obj.url).css({
        'background-image': 'url(' + obj.imgUrl[1] + ')'
    });
    $('.des-name').text(obj.name);
    $('.customer span').text(obj.customer);
    var html = '<strong>Использовано:</strong><br>';
    $(obj.frameworks).each(function(index) {
        html += obj.frameworks[index] + '<br>'
    });
    $('.frameworks').html(html);
    $('.theme').html('<strong>Тематика: </strong> <br>' + obj.theme);
    $('.info').text(obj.info);
    $('.btn-toGo').attr('href', obj.url);

    $('.port-anim').css({
        opacity: 0,
        transform: 'translateY(10px)',
        transition: 'none'
    });
}

function getStatePagePortfolio() {
    return Boolean();
}
