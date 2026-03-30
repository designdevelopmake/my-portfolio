// jQuery Image Spotlight Version 1.0

// #### Created by Krishan Veerappa & NX - Studio 11/01/2010 ####
// www.nx-studio.net/

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

$(document).ready(function(){
	
	var timeout;
	
	spotLightElement = '.'+spotLightElement;
	
	$(spotLightElement).addClass('spotlight_inactive');					   
	
	$(spotLightElement).hover(function(){
									   
		clearTimeout(timeout);
		
		var opacityVal = $(this).css("opacity");							   
		if 	(opacityVal == '1') {}
			else {
				$(".spotlight_img").stop().fadeTo("fast", 1.0);
			}
		$(this).removeClass("spotlight_inactive");
		timeout = setTimeout('spotLight()',mouseTimeOut);

	},
	function(){
		clearTimeout(timeout);
		currentElement = $(this).attr('class');
		if (currentElement == spotLightElement){
			$(this).stop().animate({opacity : fadeOpacity},fadeSpeed);
			$(spotLightElement).addClass('spotlight_inactive');				
		}
		else {$('.spotlight_inactive').stop().animate({opacity : '1.0'},fadeSpeed);}
		$(this).addClass("spotlight_inactive");
	});	
});

function spotLight(){									   			
	$('.spotlight_inactive').stop().animate({opacity : fadeOpacity},fadeSpeed);	
}

//###### The Script Below Needs to be Placed in the HTML or a Separate .js file to Enable this Function to Work ######
/*

<script type="text/javascript">
	var spotLightElement = 'spotlight_img'; //Class assoiciated with the images you want to add the effect (exclude the '.')
	var mouseTimeOut = 500; //Timeout for hover trigger (e.g. 1000 = 1 Sec)
	var fadeOpacity = 0.1; //Fade opacity
	var fadeSpeed = 300; // Fade Speed
</script>

*/