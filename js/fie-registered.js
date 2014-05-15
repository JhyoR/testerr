$(document).ready(function () {

$(".qpanel").not(".submit, .submitted").addClass("submit").find(".qopen").show().siblings().hide();

$(".bg").on("click", function(e){
	var x = e.pageX,
		y = e.pageY;	
	$(".qpinopen").not(".print").css({top: y - '120', left: x - '190'});
});

$(".qpanel").on("click", function() {
	if ($(this).is(".submit")) {
		$(this).find(".qopen").hide().siblings().show();
		$(this).removeClass("submit").addClass("submitted");
		$(this).parents(".qpinopen").addClass("print").clone().addClass("new").css("left" , "-100%").removeClass("print").insertAfter(".qpinopen")
		.find(".submitted").removeClass("submitted").addClass("submit").find(".qopen").show().siblings().hide();
	}
});
$(".new").siblings().find(".qpanel").hide();
$(".profile")
	.mouseenter(function() {
		$("nav").show("500");
		$("nav")
			.mouseenter(function(){
				$(this).show();
			})
			.mouseleave(function(){
				$(this).hide();
			});
	})
	.mouseleave(function() {
		$("nav").hide();
	});

$(".question-section").on("click", function(){
	if ($(this).is(".expand")) {
		$(this).removeClass("expand").css("bottom" , "-340px");
	} else {
		$(this).addClass("expand").css("bottom" , "0px");
	}
});

});