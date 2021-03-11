$(document).ready(function(){
    $('.doctor-slider__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 740,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});

