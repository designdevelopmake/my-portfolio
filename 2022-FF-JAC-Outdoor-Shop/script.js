$(document).ready(function() {
  
   

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




