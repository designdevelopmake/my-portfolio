$(document).ready(function() {
  
  $('.TCS__carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: [null, null],
    loop: true,
    dots: false,
    //stagePadding:40,
    responsive: {
      768: {
          nav:false,
          loop:false,
          mouseDrag:false,
    stagePadding:0,
        items: 3,
        margin: 15
      }
    }
  });
    
  $('.TCS__logocarousel').owlCarousel({
    items: 2,
    loop: true,
    nav: true,
    navText: [null, null],
    loop: true,
    dots: false,
    margin: 20,
    stagePadding:40,
    responsive: {
      768: {
    stagePadding:60,
        items: 5,
        margin: 39
      }
    }
  });
  
});


