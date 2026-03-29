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
    items: 3
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

$("#faraway").click(function() {
   scrollToAnchor('feature1');
});
$("#palace").click(function() {
   scrollToAnchor('feature2');
});
$("#artificial").click(function() {
   scrollToAnchor('feature3');
});
$("#dream").click(function() {
   scrollToAnchor('feature4');
});
	
    
    

//drop downs
				$(document).ready(function() {
					$(".dropDown1").click(function(){
					$(this).next(".hiddenContent").slideToggle("slow");
                    $(".dropDown1 .chevron-down").toggleClass("rtoate180--1");
									
					});
				});

//drop downs
				$(document).ready(function() {
					$(".dropDown2").click(function(){
					$(this).next(".hiddenContent").slideToggle("slow");
                    $(".dropDown2 .chevron-down2").toggleClass("rtoate180--2");
									
					});
				});
    
//drop downs
				$(document).ready(function() {
					$(".dropDown3").click(function(){
					$(this).next(".hiddenContent").slideToggle("slow");
                    $(".dropDown3 .chevron-down3").toggleClass("rtoate180--3");
									
					});
				});
//drop downs
				$(document).ready(function() {
					$(".dropDown4").click(function(){
					$(this).next(".hiddenContent").slideToggle("slow");
                    $(".dropDown4 .chevron-down4").toggleClass("rtoate180--4");
									
					});
				});
});
