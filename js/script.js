// Accordion options
var action = "click";
var speed = "500";


$(document).ready(function() {
	// Question Handler
	$('li.q').on(action, function() {
		$(this).next()			// Chaining: to call methods one after another
			// Get next element
			.slideToggle(speed)
				// Select all other answers
				.siblings('li.a')
					.slideUp();


		// Get image for active question
		var img = $(this).children('img');  
		// Remove the 'rotate' class for all images except the active
		$('img').not(img).removeClass('rotate');
		// Toggle 'rotate' class
		img.toggleClass('rotate');
	});
});