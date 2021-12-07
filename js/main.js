$(document).ready(function() {
    var owl = $('[data-id="productCarousel"],[data-id="pelazioExpressProductListBox"]');
    $('[data-id="mainBannersSlider"]').owlCarousel({
        rtl:true,
        loop:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        navText: ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-left'></i>"],
        responsive:{
            0:{
                items:1
            }
        }
    });
    if ( $(window).width() < 1199 ) {
        owl.removeClass('owl-carousel')
    } else {
        startProductCarousel();
    }
  });
  
  function startProductCarousel() {
    
    $('[data-id="productCarousel"],[data-id="pelazioExpressProductListBox"]').owlCarousel({
        rtl:true,
        loop:false,
        nav:true,
        dots:false,
        margin:15,
        navText: ["<i class='fa fa-chevron-right'></i>","<i class='fa fa-chevron-left'></i>"],
        responsive:{
            1000:{
                items:5
            }
        }
    })
      
  }
 