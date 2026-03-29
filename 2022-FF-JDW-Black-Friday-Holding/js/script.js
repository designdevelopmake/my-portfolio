$(document).ready(function() {
  
  // Feature carousels
  $(".ff-feature__carousel").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1400,
    dots: false,
    items: 1,
    loop: true,
    nav: true,
    margin:30,
    navText: [null, null],
      
responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
responsive: {    
320:{ 
    items:1
},      
768:{
    items: 4,
    loop: false,
    autoplay: false,
    nav: false,
}

}
  });
    
	
});
