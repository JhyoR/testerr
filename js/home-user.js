(function() {
  var $username1 = $('.js-username1');
  var $logomain = $('.js-logomain');
  var $username2 = $('.js-username2');
  var $navsidebar = $('.js-navsidebar');


  $navsidebar.attr('style', 'height: 100%');
  $navsidebar.hide();
  $username1.click(function(){
    $navsidebar.show();
  });
  $username2.click(function(){
    $navsidebar.hide();
  });
})();