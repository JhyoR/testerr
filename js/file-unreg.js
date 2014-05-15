$(document).ready(function(){
	
$(".logincta")
	.mouseenter(function() {
		$(".loginpop").show();
		$(".loginpop")
			.mouseenter(function(){
				$(this).show();
			})
			.mouseleave(function(){
				$(this).hide();
			});
	})
	.mouseleave(function() {
		$(".loginpop").hide();
	});
	

$(".qpanel").not(".submit, .submitted").addClass("submit").find(".qopen").show().siblings().hide();

$(".bg").on("click", function(e){
	var x = e.pageX,
		y = e.pageY;	
	$(".qpinopen").not(".print").css({top: y - '155', left: x - '78'});
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

$(".questionpanel").on("click", function(){
	if ($(this).is(".expand")) {
		$(this).removeClass("expand").css("bottom" , "-340px");
	} else {
		$(this).addClass("expand").css("bottom" , "0px");
	}
});

	
});