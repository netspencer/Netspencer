$(document).ready(function() {
	$("section#image_stream").mouseover(function() {
		$("section#page").animate({top:200}, 2000);
	});
	$("section#image_stream").mouseout(function() {
		$("section#page").animate({top:20}, 2000);
	});
});