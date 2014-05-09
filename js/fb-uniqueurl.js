(function() {
  var $ufthumb = $('.js-ufthumb');



  $ufthumb.on('mouseenter', function(){
    $(this).find('.l0').css('top' , '0');
    $(this).mouseleave(function(){
      $('.l0').attr('style', 'top: 180px');
    });
  });

})();