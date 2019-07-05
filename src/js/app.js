(function () {
    var swiper = new Swiper('#home-cover', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var swiper1 = new Swiper('.feedback-card-swiper-container', {
        slidesPerView: 2,
        spaceBetween: 87,
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    });

})();
