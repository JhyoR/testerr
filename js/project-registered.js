$(document).ready(function () {
$(".question-section").on("click", function(){
	if ($(this).is(".expand")) {
		$(this).removeClass("expand").css("bottom" , "-340px");
	} else {
		$(this).addClass("expand").css("bottom" , "0px");
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
$(".upload-box").click(function(){
	$(this).prev().clone().insertBefore(this);
});

});