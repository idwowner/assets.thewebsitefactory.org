(function($) {

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 300) {
            $('header').addClass('stuck');
        } else {
            $('.stuck').removeClass('stuck');
        }
    });
    
    if($(window).width()<=1024){
        $('body').addClass('mobile-menu');
    }
 // Mobile Menu
 $( ".menu-icon .icon" ).click(function() {
    $(this).toggleClass('open');
    $('.nav-primary').toggleClass('open');
    $('main').toggleClass('open');
    // $('html').toggleClass('no-scroll');
    $('body').toggleClass('nav-open');
});

// Sub-menus
    
    

    // Mouse over and mouse out
    $( document ).ready(function() {

        if(!$('body').hasClass('mobile-menu')){

            // Mouse over
            $( ".menu-item-has-children" ).mouseover( function() {

                // Parent li
                $('.expanded').addClass('expanded');
                $(this).addClass('expanded');
                $(this).addClass('sub-menu-open');
                
                // Aria on a tag
                $('.menu-item-has-children a').attr('aria-expanded','false');
                $(this).children('a').attr('aria-expanded','true');

            });

            // Mouse out
            $( ".menu-item-has-children" ).mouseout( function() {

                $(this).removeClass('sub-menu-open');
                $(this).removeClass('expanded');
                
                // Aria on a tag
                $('.menu-item-has-children a').attr('aria-expanded','false');
                
                // Sub-menu
                $('.sub-menu-open').removeClass('sub-menu-open');

            });

            $('.menu-item-has-children').focusin(function () {

                // $('.sub-menu-open').removeClass('sub-menu-open');
                $(this).addClass('sub-menu-open');
    
                // Parent li
                $('.expanded').removeClass('expanded');
                $(this).addClass('expanded');
                
                // Aria on a tag
                $('.menu-item-has-children a').attr('aria-expanded','false');
                $(this).children('a').attr('aria-expanded','true');
            
            });

            // Focus out
            $('.menu-item-has-children').focusout(function () {
            
                $('.sub-menu-open').removeClass('sub-menu-open');
                $('.expanded').removeClass('expanded');
                $('.focused').removeClass('focused');
                $('.menu-item-has-children a').attr('aria-expanded','false');
            
            });

        } else {
            
            // Click
            $( ".menu-item-has-children > a" ).click( function() {

                if( $(this).parent().parent().hasClass('menu') && $(this).parent().hasClass('expanded') ){
                    $('.expanded').removeClass('expanded');
                    $('.sub-menu-open').removeClass('sub-menu-open');
                } else if ( $(this).parent().parent().hasClass('menu') && !$(this).parent().hasClass('expanded') ){
                    $('.expanded').removeClass('expanded');
                    $('.sub-menu-open').removeClass('sub-menu-open');
                    $(this).parent().addClass('expanded');
                    $(this).parent().addClass('sub-menu-open');
                } else {
                    $(this).parent().toggleClass('expanded');
                    $(this).parent().toggleClass('sub-menu-open');
                }
                 
                // Aria on a tag
                $('.menu-item-has-children a').attr('aria-expanded','false');
                var expandState = ('true' ? 'false' : 'true');
                $(this).children('a').attr( 'aria-expanded', expandState );

            });
        }
    });

    // Focus in
    $('.menu-item').focusin(function () {
        $(this).addClass('focused');
    });

    // services slider
    if ($('.services-slider').length>0){
        var owl = $('.services-slider');

        owl.on('changed.owl.carousel', function(e) {
            $('.owl-item').removeClass('active-slide');
            var slideIndex = e.relatedTarget.current();
            $('.services-slider .owl-item').eq(slideIndex).addClass('active-slide');
        });

        owl.owlCarousel({
            rtl:false,
            loop:true,
            margin:28,
            nav:true,
            navText: ["<img src='https://assets.thewebsitefactory.org/img/4/prev-arrow.png'>",
                "<img src='https://assets.thewebsitefactory.org/img/4/next-arrow.png'>",],
            dots:false,
            autoplay:false,
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
                    items:2
                },
                1320:{
                    items:2
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
            $('.owl-item').removeClass('active-slide');
            var slideIndex = e.relatedTarget.current();
            $('.services-slider .owl-item').eq(slideIndex).addClass('active-slide');
        });

        owl.owlCarousel({
            rtl:false,
            loop:true,
            margin:28,
            nav:true,
            navText: ["<img src='https://assets.thewebsitefactory.org/img/4/prev-arrow.png'>",
                "<img src='https://assets.thewebsitefactory.org/img/4/next-arrow.png'>",],
            dots:false,
            autoplay:false,
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

})( jQuery );