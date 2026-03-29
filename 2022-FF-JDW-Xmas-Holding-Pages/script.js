$(document).ready(function() {
  
  // Feature carousels
  $(".ff-carousel-one").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1400,
    dots: true,
    items: 1,
    loop: true,
    nav: false,
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
    autoplay: false,
    loop: false,
    dots: false,
}

}
  });

    // Feature carousels
    $(".ff-carousel-two").owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      autoplaySpeed: 1400,
      dots: true,
      items: 1,
      loop: true,
      nav: false,
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
      nav: true
  }
  
  }
    });

      // Feature carousels
  $(".ff-carousel-three").owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 1400,
    dots: true,
    items: 1,
    loop: true,
    nav: false,
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
    nav: true
}

}
  });
    

  $('.content').hide();
	$('.heading').click(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.heading').removeClass('active-header');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.content').slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next(".content").is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('active-header');
			  
			//OPEN THE SLIDE
			$(this).next(".content").slideDown('normal');
		 } 
	 });
	
});




