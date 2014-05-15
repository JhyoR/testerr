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
	
	
$(".questionpanel").on("click", function(){
	if ($(this).is(".expand")) {
		$(this).removeClass("expand").css("bottom" , "-340px");
	} else {
		$(this).addClass("expand").css("bottom" , "0px");
	}
});
$(".sharemodal").click(function(){
	$(this).hide();
	$(".share-break").show();
});

});