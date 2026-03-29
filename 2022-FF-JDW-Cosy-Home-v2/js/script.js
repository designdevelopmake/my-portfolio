$(document).ready(function() {
  
  // Feature carousels
  $(".feature__carousel").owlCarousel({
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
    stagePadding: 70
},      
768:{
    items: 4,
    loop: false,
    stagePadding: 50,
    nav: false
}
}
  });

  
    // Feature carousels
    $(".brand__carousel").owlCarousel({
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
      stagePadding: 70
  },      
  768:{
      items: 3,
      stagePadding: 50
  },
  1024:{
    items: 3,
    stagePadding: 100
}
  
  }
    });
	
});
