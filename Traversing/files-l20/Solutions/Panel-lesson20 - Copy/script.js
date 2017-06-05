$(document).ready(function(){
 /*  $(".container").click(function(){
	$(this).siblings().fadeTo(1000,0.1);
   });*/
  $(".superButton").click(function(){
	$("#panel .container").siblings().fadeTo(1000,1);
   });
   $(".theButton").click(function(){
    var col = $(this).css('background-color');
	$('.superButton').css('background-color',col);

   });
 /*  $(".theButton").mouseenter(function(){
	$(this).addClass("makeBlack");
   });
     $(".theButton").mouseout(function(){
	$(this).removeClass("makeBlack");
   });*/
});