(function($) {

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $('header').addClass('stuck');
        } else {
            $('.stuck').removeClass('stuck');
        }
    });
    
    // menu trigger
    $('.menu-icon .icon').on( "click", function() {
        $(this).toggleClass('open');
        $('body').toggleClass('open');
        $('.nav-primary').toggleClass('open');
    });

    let slideIndex;

    // services slider
    if ($('.services-slider').length>0){
        var owl = $('.services-slider');
        
        
        function carouselInitialized(e) {
                slideIndex = e.relatedTarget.current();
        }
       

        owl.on('changed.owl.carousel', function(e) {
            $('.services .owl-item').removeClass('active-slide');
            var slideIndex = e.relatedTarget.current();
            $('.services-slider .owl-item').eq(slideIndex).addClass('active-slide');
        });

        owl.owlCarousel({
            rtl:false,
            loop:true,
            margin:36,
            center: true,
            nav:false,
            dots:false,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            onInitialized:carouselInitialized,
            responsive:{
                0:{
                    items:1,
                    center: false
                },
                768:{
                    items:1,
                    center: false
                },
                1024:{
                    items:2,
                    center: false
                },
                1320:{
                    items:3
                }
            }
        });

        

       
    }

    // Custom Navigation Events
    $('.next-slide-services').click(function(){
        var slideNumber = $(this).siblings('span').find('.slidenumber');
        var slideTotal = $(this).siblings('span').find('.slidetotal');
        
        var curSlide = Number(slideNumber.html());
        var totalSlides = Number(slideTotal.html());

        $('.services-slider').trigger('next.owl.carousel');
        if(curSlide==totalSlides){
            curSlide = 1;
        } else {
            curSlide = curSlide+1;
        }
        slideNumber.html(curSlide);
    });

    $('.prev-slide-services').click(function(){
        var slideNumber = $(this).siblings('span').find('.slidenumber');
        var slideTotal = $(this).siblings('span').find('.slidetotal');
        
        var curSlide = Number(slideNumber.html());
        var totalSlides = Number(slideTotal.html());

        $('.services-slider').trigger('prev.owl.carousel');
        if(curSlide==1){
            curSlide = totalSlides;
        } else {
            curSlide = curSlide-1;
        }
        slideNumber.html(curSlide);
    });

    // testimonials slider
    if ($('.testimonials-slider').length>0){
        var owl = $('.testimonials-slider');

        owl.on('changed.owl.carousel', function(e) {
            $('.testimonials .owl-item').removeClass('active-slide');
            var slideIndex = e.relatedTarget.current();
            $('.services-slider .owl-item').eq(slideIndex).addClass('active-slide');
        });

        owl.owlCarousel({
            rtl:false,
            loop:true,
            margin:28,
            nav:false,
            dots:false,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1024:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });

       
    }

    // Custom Navigation Events
    $('.next-slide-testimonials').click(function(){
        var slideNumber = $(this).siblings('span').find('.slidenumber');
        var slideTotal = $(this).siblings('span').find('.slidetotal');
        
        var curSlide = Number(slideNumber.html());
        var totalSlides = Number(slideTotal.html());

        $('.testimonials-slider').trigger('next.owl.carousel');
        if(curSlide==totalSlides){
            curSlide = 1;
        } else {
            curSlide = curSlide+1;
        }
        slideNumber.html(curSlide);
    });

    $('.prev-slide-testimonials').click(function(){
        var slideNumber = $(this).siblings('span').find('.slidenumber');
        var slideTotal = $(this).siblings('span').find('.slidetotal');
        
        var curSlide = Number(slideNumber.html());
        var totalSlides = Number(slideTotal.html());

        $('.testimonials-slider').trigger('prev.owl.carousel');
        if(curSlide==1){
            curSlide = totalSlides;
        } else {
            curSlide = curSlide-1;
        }
        slideNumber.html(curSlide);
    });

    $( document ).ready(function() {
        $('.services-slider .owl-item').eq(slideIndex).addClass('active-slide');
    });

})( jQuery );