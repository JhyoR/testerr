(function() {
var $regpop = $(".regpop");
var $feedcomple = $(".feedcomple");


$( ".filethumb" )
	.mouseenter(function() {
		$(this).find(".hovercontent").css("top" , "0px");
	})
	.mouseleave(function() {
		$(this).find(".hovercontent").css("top" , "186px");
});

$( ".profile" )
	.mouseenter(function() {
		$(this).siblings(".profiledrop").css({"display" : "block", "height" : "197px"});
	})
	.mouseleave(function() {
		$(this).siblings(".profiledrop").css({"display" : "none", "height" : "0px"});
});
$( ".feedcomple, .feedcompleted" )
	.mouseenter(function() {
		$(this).find(".feedcompleted").show();
	})
	.mouseleave(function() {
		$(this).find(".feedcompleted").hide();
});
$(".feedcompleted").click(function(){
	$regpop.show();
	$("header").css("height" , "100%");
	$feedcomple.hide();
})
})();