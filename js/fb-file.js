$(document).ready(function () {
$(".qpop").not(".min, .max").first().addClass("max").siblings().addClass("min");

$(".submit").click(function(){
	$(this).addClass("close");
});
$(".screen").on("click", function(){
	if ($(this).parent().is(".submit")){
		$(this).removeClass("submit").addClass("close");
	} else {
		$(this).parent(".qpop.max").not(".submit, .close").addClass("submit");
	}
});

$(".pin").on("click", function(e){
	if ($(this).parent().is(".min")) {
		$(this).parent().addClass("max").removeClass("min").siblings().addClass("min").removeClass("max");
	} else if ($(this).parent().is(".max")) {
		$(this).parent().addClass("min").removeClass("max");
	}
})


});