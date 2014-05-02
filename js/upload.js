(function() {
  var $pinactive = $('.js-pinactive');
  var $fUser = $('.js-f-user');
  var $pantrigger = $('.js-pantrigger');
  var $questionpan = $('.js-questionpan');


  var $panup = $('.panup');

  $pantrigger.click(function(){
  if ( $pantrigger.hasClass('panup') ) {
   	$(this).removeClass('panup');
    $questionpan.attr('style', 'bottom: -400px !important');
  }
  else {
   	$(this).addClass('panup');
    $questionpan.attr('style', 'bottom: 0px');
  }
  });


  $fUser.click(function(e){
    var x = e.pageX;
    var y = e.pageY;
    $pinactive.css({left: x - '82', top: y - '110'});
    e.stopPropagation();
  });
})();