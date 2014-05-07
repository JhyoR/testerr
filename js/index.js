(function() {
  var $hoverlayer = $('.js-hoverlayer');
  var $thumbin = $('.js-thumbin');
  var $reupload = $('.js-reupload');
  var $sectionshare = $('.js-sectionshare');
  var $userfile = $('.js-userfile');
  var $commentfile = $('.js-commentfile');
  var $sectionupload = $('.js-sectionupload');
  var $uploadbox = $('.js-uploadbox');
  var $sectionhome = $('.js-sectionhome');
  var $panqtrigger = $('.js-panqtrigger');
  var $reuploadtrigger = $('.js-reuploadtrigger');
  var $sharetrigger = $('.js-sharetrigger');
  var $questionpan = $('.js-questionpan');
  var $loginmodal = $('.js-loginmodal');
  var $username = $('.js-username');
  var $progressindicator = $('.js-progressindicator');
  var $logomain = $('.js-logomain');


  function homeSection(e) {
   	$sectionhome.show();
    $progressindicator.hide();
    $questionpan.hide();
    $sectionupload.hide()
    $reupload.hide();
    $loginmodal.hide();
    $questionpan.hide();
    $sectionshare.hide();
  }
  function uploadSection(e) {
    $sectionupload.show();
    $progressindicator.show().find('div').css('background-color' , 'rgb(118, 238, 111)').not('div:nth-child(1)').css('background-color' , 'rgba(0, 0, 0, 0)');
    $questionpan.show();
  	$sectionhome.hide();
    $reupload.hide();
    $sectionshare.hide();
  }
  function reuploadSection(e) {
  	$reupload.show();
    $progressindicator.show().find('div').css('background-color' , 'rgb(118, 238, 111)').not('div:nth-child(1)').css('background-color' , 'rgba(0, 0, 0, 0)');
    $questionpan.show();
    $sectionhome.hide(); 
    $sectionupload.hide();
    $hoverlayer.hide();
    $sectionshare.hide();
  }
  function shareSection(e) {
    $sectionshare.show();
  	$progressindicator.show().find('div').css('background-color' , 'rgb(118, 238, 111)').not('div:nth-child(2)').css('background-color' , 'rgba(0, 0, 0, 0)');
   	$sectionhome.hide();
    $questionpan.hide();
    $sectionupload.hide()
    $reupload.hide();
    $loginmodal.hide();
    $questionpan.hide();
  }

  //----homepage-----//
  homeSection();
  $logomain.click(function(){
  	homeSection();
  });
  $username
  .mouseenter(function(){
    $(this).css('background-color' , 'rgb(118, 238, 111)');
  })
  .mouseleave(function(){
    $(this).css('background-color' , 'rgba(0, 0, 0, 0)');
  });

  $username.click(function(){
    $loginmodal.toggle()
  });

  $uploadbox.click(function(){
  	uploadSection();
  });
  //----upload-----//

  $userfile.click(function(e){
  	var x = e.pageX;
    var y = e.pageY;
    $commentfile.css({top: y - '0', left: x - '0'});
  });
  $panqtrigger.click(function(){
    var $uped = $('.uped');
    
    if ($panqtrigger.hasClass('uped')){
  		$questionpan.attr('style', 'bottom: -400px');
    	$(this).removeClass('uped');
    } else {
    	$questionpan.css('bottom' , '0');
      $(this).addClass('uped');
    }
  });
  $reuploadtrigger.click(function(){
  	reuploadSection();
  });

  //----reupload----//
  $thumbin
  .mouseenter(function(){
    $(this).css('background-color' , 'white');
    $hoverlayer.show();
  })
  .mouseleave(function(){
    $(this).css('background-color' , 'rgb(61, 61, 61)');
    $hoverlayer.hide();
  });

  $thumbin.click(function(){
    uploadSection();
  });
  //-----share-----//
  $sharetrigger.click(function(){
  	shareSection();
  });
})();