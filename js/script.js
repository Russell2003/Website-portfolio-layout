$(document).ready(function() {
   $('.icon-menu').click(function(event) {
      $('.icon-menu').toggleClass('active');
      $('.menu__body').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

// ibg
function ibg(){
   $.each($('.ibg'), function(index, val) {
   if($(this).find('img').length>0){
   $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}
ibg();