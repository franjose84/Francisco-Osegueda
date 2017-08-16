var $overlay = $('<div id=overlay></div>');
var $image = $('<img>');
var $caption = $('<p>Visit my <a href="https://github.com/franjose84" target="_blank">GitHub page</a> to learn more.</p>');
//Add image and captions to overlay
$overlay.append($image);
$overlay.append($caption);
//Add overlay
$('body').append($overlay);
//Capture the click event on a link to an image
$('#portfolio a').click(function(event){
	event.preventDefault();
	var imageLocation = $(this).attr('href');
	$image.attr('src', imageLocation);
	//Show the overlay
	$overlay.fadeIn(500);
});
//When overlay is clicked hide overlay
$overlay.click(function(){
	$(this).fadeOut(300);
});