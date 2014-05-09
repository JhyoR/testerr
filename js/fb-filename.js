(function() {
  var $qpop = $('.js-qpop');
  var $filefull = $('.js-filefull');


  $qpop.hasClass('expand').css({'width' : '318px', 'height' : '331px'});
  $qpop.hasClass('shrink').css({'width' : '27px', 'height' : '31px'});

  if ($qpop.not('.submit')) {
      $('.submit').hide();
  }

  if ($qpop.not('.submitted')) {
      $('.submitted').hide();
  }

  $qpop.click(function () {
      if ($(this).is('.expand')) {
          $(this).removeClass('shrink');
      } else {
          $(this).removeClass('shrink').addClass('expand');
      }
  });

})();