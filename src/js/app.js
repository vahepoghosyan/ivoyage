(function () {
    if (document.querySelector('.home-cover')) {
        var swiper = new Swiper('.home-cover', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
    if (document.querySelector('.feedback-card-swiper-container')) {
        var feedbackCard = new Swiper('.feedback-card-swiper-container', {
            slidesPerView: 2,
            spaceBetween: 40,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
            },
        });
    }

    if (document.querySelector('.random-trips-swiper-container')) {
        var randomTrips = new Swiper('.random-trips-swiper-container', {
            slidesPerView: 3,
            spaceBetween: 40,
            breakpoints: {
                370: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
        });
    }
    if (document.querySelector('.services-page-swiper-container')) {
        var servicesPage = new Swiper('.services-page-swiper-container', {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 30,
            autoplay: true,
            breakpoints: {
                370: {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    slidesPerColumn: 1,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    spaceBetween: 20,
                },
            },
        });
    }

    var overlay = document.querySelector('.overlay');
    var closeMenu = document.querySelector('.close-menu');
    var navBarContainer = document.querySelector('.navbar-container');
    var menuBurger = document.querySelector('.menu-burger');

    function CloseMenu() {
        navBarContainer.style.transform = 'translateX(-100%)';
        overlay.style.display = 'none';
        document.getElementsByTagName('body')[0].className = '';
    }

    function OpenMenu() {
        navBarContainer.style.transform = 'translateX(0)';
        overlay.style.display = 'block';
        document.getElementsByTagName('body')[0].className = 'overflow-hidden';
    }

    overlay.addEventListener('click', CloseMenu);
    closeMenu.addEventListener('click', CloseMenu);
    menuBurger.addEventListener('click', OpenMenu);

    // map

    var map;

    function initialize() {
        var myLatlng, marker, image;
        var gm = google.maps;
        var cIW = '';
        var mapOptions = {
            center: new gm.LatLng(40.1885556, 44.5203036),
            zoom: 15,
            scrollwheel: false,
            streetViewControl: false,
            scaleControl: false,
            panControl: false,
            mapTypeControl: false,
            mapTypeId: gm.MapTypeId.ROADMAP,
            // styles: [{featureType: 'all', stylers: [{saturation: -100}, {gamma: 0.0}]}]
        };
        map = new gm.Map(document.getElementById('map_canvas'), mapOptions);
        var oms = new OverlappingMarkerSpiderfier(map);

        var loc1 = new gm.LatLng(40.1885556, 44.5203036);
        var marker1 = new gm.Marker({
            position: loc1,
            icon: 'https://i.imgur.com/gGq2leb.png',
            title: '',
            map: map,
        });
        oms.addMarker(marker1);
    }

    $(window).load(function () {
        if (document.querySelector('#map_canvas')) {
            initialize();
        }
    });

    if (document.getElementById('services')) {
        document.getElementById(location.search.slice(1, location.search.length)).classList.add('active');
    }
    // var tab1 = document.querySelector('#tab1');
    // if (tab1) {
    //     tab1.classList.add('active');
    //     document.querySelector('.worldwide-tours').style.display = 'block';
    // }

    var navServicesItems = document.querySelectorAll('.nav-services-item');
    if (navServicesItems) {
        navServicesItems.forEach(function (item) {
            item.addEventListener('click', function (event) {
                document.querySelectorAll('.nav-services-items li').forEach(function (item) {
                    item.classList.remove('active');
                });
                item.classList.add('active');
                document.querySelectorAll('[data-tab]').forEach(function (item) {
                    item.style.display = 'none';
                });
                document.querySelector('[data-tab=' + event.target.id + ']').style.display = 'block';

            });
        });
    }

    new Swiper('.gallery-swiper-container', {
        slidesPerView: 3.5,
        spaceBetween: 30,
        breakpoints: {
            370: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
    new Swiper('.partners-swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: true,
        breakpoints: {
            370: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
        navigation: {
            // nextEl: ".swiper-button-next",
            // prevEl: ".swiper-button-prev"
        },
    });


    if (document.getElementById('aniimated-thumbnials')) {
        $('#aniimated-thumbnials').lightGallery({
            selector: '.swiper-slide',
        });
    }

    var scrollTop = $(window).scrollTop();
    if (document.querySelector('.transparent-background')) {
        if (window.innerWidth > 576 && scrollTop > document.querySelector('.transparent-background').offsetHeight - 120) {
            document.querySelector('.navbar').classList.add('invert');
        } else {
            document.querySelector('.navbar').classList.remove('invert');
        }
    }

})();

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (document.querySelector('.transparent-background')) {
        if (window.innerWidth > 576 && scrollTop > document.querySelector('.transparent-background').offsetHeight - 120) {
            document.querySelector('.navbar').classList.add('invert');
        } else {
            document.querySelector('.navbar').classList.remove('invert');
        }
    }
});

document.addEventListener("DOMContentLoaded", function(event) {
    if (document.getElementById('services')) {
        document.querySelectorAll('[data-tab*="tab"]').forEach(function(item){
            item.style.display = 'none'
        });
        document.querySelector(`[data-tab*="${location.search.slice(1, location.search.length)}"]`).style.display = ''
    }
});

