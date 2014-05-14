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