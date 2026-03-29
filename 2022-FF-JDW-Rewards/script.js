$(document).ready(function() {
  
});

if($(window).width() <= 768) {
// Nav menu (sticky)
$(window).scroll(function(e) {
  $el = $('#stickyNav');
  $pixTrigger = 295;
  if ($(this).scrollTop() > $pixTrigger) {
      $('#stickyNav').css({
          'position': 'fixed',
          'bottom': '0'
      });
  }
  if ($(this).scrollTop() < $pixTrigger) {
      $('#stickyNav').css({
          'position': 'static'
      });
  }
});
}
// Smooth anchor scrolling
$(function() {
  $('a[href=#outerPageContainer]').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html,body').stop().animate({
                  scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
  });
});





