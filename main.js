$( "#nav-main" ).hover(
  function() {
    $( "#nav" ).show().width(180);
  }, function() {
    $( "#nav" ).width(0).hide();
  }
);

$("#upload0").click(
	function(){
		$("#upload0").fadeOut(100);
		$("#full-file").fadeIn(500);
	}
);