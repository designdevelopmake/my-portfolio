$(document).ready(function() {
  
  // Shop by Colours carousel
  $(".ff-colours__carousel").owlCarousel({
      
dots: false,
loop: true,
nav:true, 
margin: 13,
navText: [null, null],
      
responsiveClass:true, // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
responsive: {    
320:{ 
    items:2
},   
568:{ 
    items:3
},      
768:{
    items: 7
}

}

  });
  
  // Feature carousels
  $(".ff-feature__carousel").owlCarousel({
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
    items:1
},      
768:{
    items: 2,
    slideBy: 4
}

}
  });
    
     // Feature scrollToAnchor
    function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#tab1").click(function() {
   scrollToAnchor('feature1');
});
$("#tab2").click(function() {
   scrollToAnchor('feature2');
});
$("#tab3").click(function() {
   scrollToAnchor('feature3');
});
$("#tab4").click(function() {
   scrollToAnchor('feature4');
});
	
});
