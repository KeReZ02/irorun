$('.slider').slick({
    centerMode: true,
    arrows:false,
    dots: true,
    centerPadding: '',
    slidesToShow: 3,
    autoplay:true,
    slidesPerView:3,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});


