$(document).ready(function () {

$(".qpanel").not(".submit, .submitted").addClass("submit").find(".qopen").show().siblings().hide();

$(".bg").click(function(e){
	var x = e.pageX,
		y = e.pageY;
	$(".qpinopen").css({top: y - '120', left: x - '190'});
});

$(".qpanel").on("click", function() {
	if ($(this).is(".submit")) {
		$(this).find(".qopen").hide().siblings().show();
		$(this).removeClass("submit").addClass("submitted");
	} else if ($(this).is(".submitted")) {
		$(this).find(".qclose").hide().siblings().show();
		$(this).removeClass("submitted").addClass("submit");
	}
});






});