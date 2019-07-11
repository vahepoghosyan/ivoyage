(function() {
  var swiper = new Swiper("#home-cover", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  // var swiperRandomTrips = new Swiper(".random-trips-swiper-container", {
  //   // slidesPerView: 1,
  //   spaceBetween: 30,
  //   autoplay: true,
  //   // when window width is <= 480px
  //   "768": {
  //     slidesPerView: 2,
  //     spaceBetween: 40
  //   },
  //   "992": {
  //     slidesPerView: 3,
  //     spaceBetween: 40
  //   }
  // });
  var swiper1 = new Swiper(".feedback-card-swiper-container", {
    slidesPerView: 2,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      // 400: {
      //   slidesPerView: 1,
      //   spaceBetween: 20
      // },
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
  });

  var randomTrips = new Swiper(".random-trips-swiper-container", {
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 40,
    // Responsive breakpoints
    breakpoints: {
      370: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // 576: {
      //   slidesPerView: 2,
      //   spaceBetween: 20
      // },

      992: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  });

  var overlay = document.querySelector(".overlay");
  var closeMenu = document.querySelector(".close-menu");
  var navBarContainer = document.querySelector(".navbar-container");
  var menuBurger = document.querySelector(".menu-burger");

  function CloseMenu() {
    navBarContainer.style.transform = "translateX(-100%)";
    overlay.style.display = "none";
    document.getElementsByTagName('body')[0].className = '';
  }

  function OpenMenu() {
    navBarContainer.style.transform = "translateX(0)";
    overlay.style.display = "block";
    document.getElementsByTagName('body')[0].className = 'overflow-hidden';
  }

  overlay.addEventListener("click", CloseMenu);
  closeMenu.addEventListener("click", CloseMenu);
  menuBurger.addEventListener("click", OpenMenu);

  // map

  var map;

  function initialize() {
    var myLatlng, marker, image;
    var gm = google.maps;
    var cIW = "";
    var mapOptions = {
      center: new gm.LatLng(40.1885556, 44.5203036),
      zoom: 15,
      scrollwheel: false,
      streetViewControl: false,
      scaleControl: false,
      panControl: false,
      mapTypeControl: false,
      mapTypeId: gm.MapTypeId.ROADMAP
      // styles: [{featureType: 'all', stylers: [{saturation: -100}, {gamma: 0.0}]}]
    };
    map = new gm.Map(document.getElementById("map_canvas"), mapOptions);
    var oms = new OverlappingMarkerSpiderfier(map);

    var loc1 = new gm.LatLng(40.1885556, 44.5203036);
    var marker1 = new gm.Marker({
      position: loc1,
      icon: "https://i.imgur.com/gGq2leb.png",
      title: "",
      map: map
    });
    oms.addMarker(marker1);
  }

  $(window).load(function() {
    initialize();
  });

})();
