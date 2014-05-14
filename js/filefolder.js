$(".profile")
	.mouseenter(function() {
		$(".mainnav").show("500");
		$(".mainnav")
			.mouseenter(function(){
				$(this).show();
			})
			.mouseleave(function(){
				$(this).hide();
			});
	})
	.mouseleave(function() {
		$(".mainnav").hide();
	});
	
