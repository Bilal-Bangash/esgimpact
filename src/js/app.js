
! function($) {
    "use strict";

    var Larix = function() {};

    Larix.prototype.initStickyMenu = function() {
        // Add scroll class
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
    },

    Larix.prototype.initSmoothLink = function() {
        // Smooth scroll
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    Larix.prototype.initScrollspy = function() {
        //Scrollspy
        $(".navbar-nav").scrollspy({
            offset: 50
        });
    },

    Larix.prototype.initMagnificPopup = function() {
        // Magnific Popup
        $('.mfp-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });
    },


     Larix.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
        this.initMagnificPopup();
    },
    //init
    $.Larix = new Larix, $.Larix.Constructor = Larix
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Larix.init();
}(window.jQuery);

