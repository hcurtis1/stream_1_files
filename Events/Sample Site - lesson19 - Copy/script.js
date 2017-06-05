$(document).ready(function() {
 //
 // add your jQuery code here
 	$('button').mouseenter(function() {
 		$('button').removeClass('makeRed').addClass('makeBorder');
 	});

 	$('button').mouseleave(function() {
 		$('button').addClass('makeRed').removeClass('makeBorder');
 	});

 	$('button').click(function() {
 		$('p').slideToggle('slow');
 	});
}); 
