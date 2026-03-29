// Smooth anchor scrolling
$(document).ready(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').stop().animate({
                    scrollTop: target.offset().top - 62
                }, 1000);
                return false;
            }
        }
    });
});
// Nav menu (sticky)
$(window).scroll(function(e){$el=$('#FreeFormatPage nav');$pixTrigger=720;if($(this).scrollTop()>$pixTrigger){$('#FreeFormatPage nav').css({'position':'fixed','top':'0'});$('#navPlaceholder').show();}if($(this).scrollTop()<$pixTrigger){$('#FreeFormatPage nav').css({'position':'static'});$('#navPlaceholder').hide();}});