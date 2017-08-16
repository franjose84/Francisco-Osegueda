$(document).ready(function(){
	smoothScroll();
});

function smoothScroll() {
	$('.arrow-btn').click(function() {
		$('html body').animate({
			scrollTop:$('#portfolio').offset().top
		},600);
	});

}