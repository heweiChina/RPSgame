$(window).resize(function  () {
	 // welcomePage full screen
	 $('#welcomePage').css("height", $(window).height());
	 //welcomePage text effects
	 $('.pageTitle').stop().fadeIn("nomal").animate(
	 	{"top": ($(window).height() - $('.pageTitle').outerHeight()) /2
	 }, 500);
})

$(function (){
	$(window).resize();
	$('a').fadeIn(3000);
})