!function(t){"use strict";var i=function(){};i.prototype.initStickyMenu=function(){t(window).scroll((function(){t(window).scrollTop()>=50?t(".sticky").addClass("nav-sticky"):t(".sticky").removeClass("nav-sticky")}))},i.prototype.initSmoothLink=function(){t(".navbar-nav a").on("click",(function(i){var n=t(this);t("html, body").stop().animate({scrollTop:t(n.attr("href")).offset().top-0},1500,"easeInOutExpo"),i.preventDefault()}))},i.prototype.initTestimonials=function(){t("#owl-demo").owlCarousel({autoPlay:3e3,stopOnHover:!0,navigation:!1,paginationSpeed:1e3,goToFirstSpeed:2e3,singleItem:!0,autoHeight:!0})},i.prototype.initScrollspy=function(){t(".navbar-nav").scrollspy({offset:50})},i.prototype.initPortfolioFilter=function(){t(window).on("load",(function(){var i=t(".projects-wrapper"),n=t("#filter");i.isotope({filter:"*",layoutMode:"masonry",animationOptions:{duration:750,easing:"linear"}}),n.find("a").on("click",(function(){var o=t(this).attr("data-filter");return n.find("a").removeClass("active"),t(this).addClass("active"),i.isotope({filter:o,animationOptions:{animationDuration:750,easing:"linear",queue:!1}}),!1}))}))},i.prototype.initMagnificPopup=function(){t(".mfp-image").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-fade",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}})},i.prototype.initContact=function(){t("#contact-form").submit((function(){var i=t(this).attr("action");return t("#message").slideUp(750,(function(){t("#message").hide(),t("#submit").before("").attr("disabled","disabled"),t.post(i,{name:t("#name").val(),email:t("#email").val(),comments:t("#comments").val()},(function(i){document.getElementById("message").innerHTML=i,t("#message").slideDown("slow"),t("#cform img.contact-loader").fadeOut("slow",(function(){t(this).remove()})),t("#submit").removeAttr("disabled"),null!=i.match("success")&&t("#cform").slideUp("slow")}))})),!1}))},i.prototype.init=function(){this.initStickyMenu(),this.initSmoothLink(),this.initTestimonials(),this.initScrollspy(),this.initPortfolioFilter(),this.initMagnificPopup(),this.initContact()},t.Larix=new i,t.Larix.Constructor=i}(window.jQuery),function(t){"use strict";window.jQuery.Larix.init()}();