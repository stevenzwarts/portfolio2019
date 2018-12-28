$(document).ready(function(){
    /*$('.gallery--wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });*/

    $('.gallery--large').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        appendArrows: false,
        speed: 300
    });
    $('.gallery--thumbs').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.gallery--large',
        // dots: true,
        centerMode: false,
        focusOnSelect: true,
        appendArrows: true
    });

    $('.gallery--large').on('swipe', function(event, slick, direction){
        if(direction == 'left'){
            galleryGo('prev');
        }
        if(direction == 'right'){
            galleryGo('next');
        }
    });
    $( ".gallery--nav--prev" ).on( "click", function() {
        galleryGo('prev');
    });
    $( ".gallery--nav--next" ).on( "click", function() {
        galleryGo('next');
    });

    function galleryGo(dir){
        if(dir == 'prev'){
            $('.gallery--large').slick('slickPrev');
            $var = $('.gallery--large').slick('slickCurrentSlide');
            $('.gallery--thumbs').slick('slickGoTo', $var, true);
        }
        if(dir == 'next'){
            $('.gallery--large').slick('slickNext');
            $var = $('.gallery--large').slick('slickCurrentSlide');
            $('.gallery--thumbs').slick('slickGoTo', $var, true);
        }
    }

/* END document ready*/
});