$(document).ready(function() {
  
  // Feature carousels
  $(".ff-carousel-one").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1400,
    dots: false,
    items: 1,
    loop: true,
    nav: true,
    margin:20,
    navText: [null, null],
      
responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
responsive: {    
320:{ 
    items:1,
    stagePadding: 50
},      
768:{
    items: 3,
}
}
  });

    // Feature carousels
    $(".ff-carousel-two").owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      autoplaySpeed: 1400,
      dots: false,
      items: 1,
      loop: true,
      nav: true,
      margin:20,
      navText: [null, null],
        
  responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
  responsive: {    
  320:{ 
      items:1,
      stagePadding: 50
  },      
  768:{
      items: 2,
      loop: false,
      nav: false,
  }
  
  }
    });


    
	
});
