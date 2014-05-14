(function() {
  var $hoverlayer = $('.js-hoverlayer');
  var $thumbin = $('.js-thumbin');
  var $reupload = $('.js-reupload');
  var $sharemodal = $('.js-sharemodal');
  var $regtrigger = $('.js-regtrigger');
  var $registermodal = $('.js-registermodal');
  var $sectionshare = $('.js-sectionshare');
  var $userfile = $('.js-userfile');
  var $commentfile = $('.js-commentfile');
  var $sectionupload = $('.js-sectionupload');
  var $uploadbox = $('.js-uploadbox');
  var $sectionhome = $('.js-sectionhome');
  var $loginmodal = $('.js-loginmodal');
  var $username = $('.js-username');
  var $progressindicator = $('.js-progressindicator');
  var $logomain = $('.js-logomain');
  var $mainheader = $('.js-mainheader');
  var $uniqform = $('.js-uniqform');
  var $panqtrigger = $('.js-panqtrigger');
  var $reuploadtrigger = $('.js-reuploadtrigger');
  var $sharetrigger = $('.js-sharetrigger');
  var $questionpan = $('.js-questionpan');


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
    $questionpan.show().find('.uniqform p').text('Question for this file');;
  	$sectionhome.hide();
    $reupload.hide();
    $sectionshare.hide();
    $mainheader.attr('style', 'height: 50px');
  }
  function reuploadSection(e) {
  	$reupload.show();
    $progressindicator.show().find('div').css('background-color' , 'rgb(118, 238, 111)').not('div:nth-child(1)').css('background-color' , 'rgba(0, 0, 0, 0)');
    $questionpan.show().find('.uniqform p').text('General question');
    $sectionhome.hide(); 
    $sectionupload.hide();
    $hoverlayer.hide();
    $sectionshare.hide();
    $mainheader.attr('style', 'height: 50px');
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
    $registermodal.hide();
    $mainheader.attr('style', 'height: 50px');
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
      $mainheader.attr('style', 'height: 50px');
    } else {
    	$questionpan.css('bottom' , '0');
      $(this).addClass('uped');
      $mainheader.attr('style', 'height: 100%');
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
  $regtrigger.click(function(){
  	$registermodal.show();
    $sharemodal.hide();
    $(this).addClass('feedtrigger').attr('style' , '500');
  });
  $('.feedtrigger').click(function(){
  	
  });
})();