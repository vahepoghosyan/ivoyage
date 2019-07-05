(function () {
    var swiper = new Swiper('#home-cover', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var swiperRandomTrips = new Swiper('.random-trips-swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true
        // when window width is <= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40
        },
    });
    var swiper1 = new Swiper('.feedback-card-swiper-container', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // when window width is <= 480px
        992: {
            slidesPerView: 2,
            spaceBetween: 40
        },
    });

})();
