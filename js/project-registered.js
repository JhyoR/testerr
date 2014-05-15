$(document).ready(function () {
$(".question-trigger").on("click", function(){
	if ($(".question-section").is(".expand")) {
		$(".question-section").removeClass("expand").css("bottom" , "-340px");
	} else {
		$(".question-section").addClass("expand").css("bottom" , "0px");
	}
});

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
	
$(".file-box")
	.mouseenter(function() {
		$(this).find("._image").css("margin-top" , "0px");
	})
	.mouseleave(function() {
		$(this).find("._image").css("margin-top" , "177px");
	});
$(".upload-box").click(function(){
	$(this).prev().clone().insertBefore(this);
});

$(".modalbg").click(function(){
	$(".promodals").hide();
});

$(".hidden-btn1").click(function(){
	$(".promodals").show();
});
$(".hidden-btn2").click(function(){
	$(".title-projectname").hide();
	$(".title-projectname-pro").show();
	$(".promodals").hide();
	$(".question-section").removeClass("expand").css("bottom" , "-340px");
});

});