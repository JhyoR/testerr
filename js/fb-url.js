(function() {
  var $formquestion = $('.js-formquestion');
  var $qhover = $('.js-qhover');
  var $questionbox = $('.js-questionbox');


  $formquestion.css('display' , 'none');
  $qhover.hide();

  $questionbox.mouseenter(function(){
  	$(this).find('.qhover').show();
  });
  $questionbox.mouseleave(function(){
  	$(this).find('.qhover').hide();
  });
})();