$(document).ready(function(){

    // slider 
    $('.slider-area').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // wow js 

    new WOW().init();

// counterUp

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });


    // magnificPopup 
    $('.test-popup-link').magnificPopup({
        type: 'image',
        // other options
        gallery:{
            enabled:true
          }
      });

        // testimonial
    $('.video-link').magnificPopup({
        type: 'iframe',
      });

// testimonial-active 
      $('.testimonial-active').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

// Brand-active 
$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
})


})