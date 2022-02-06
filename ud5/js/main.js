/// <reference path="../jQuery/typings/globals/jquery/index.d.ts"/>

$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        captions: true,
        slideWidth: 900,
        auto: false
    });

    var loremIpsum = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                     'Donec magna lorem, facilisis nec magna in, pharetra placerat urna. ' +
                     'Donec varius rutrum interdum. Mauris odio ipsum, dictum nec faucibus et, ' +
                     'posuere id eros.</p>';

    $('#image1 .bx-caption span').html('<h1>Bienvenido a mi página web!</h1>' + loremIpsum);
    $('#image2 .bx-caption span').html('<h1>Segunda imagen</h1>' + loremIpsum);
    $('#image3 .bx-caption span').html('<h1>Tercera imagen</h1>' + loremIpsum);

    $('.bx-caption span h1').css('margin-bottom', '10px');
    $('.bx-caption span').css('text-shadow', '0 0 4px #000, 0 0 4px #000');

    $('.bx-prev').attr('title', 'Imagen anterior');
    $('.bx-next').attr('title', 'Siguiente imagen');

    $('#slider').mouseover(() => {
        $('.bx-pager-item:first-child .bx-pager-link').attr('title', 'Primera imagen');
        $('.bx-pager-item:nth-child(2) .bx-pager-link').attr('title', 'Segunda imagen');
        $('.bx-pager-item:last-child .bx-pager-link').attr('title', 'Tercera imagen');
    });
    
});