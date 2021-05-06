
 $(function(){
  $('a[href^="#"]').click(function() {
  const speed = 800;
  const href= $(this).attr("href");
  const target = $(href == "#" || href == "" ? 'html' : href);
  const position = target.offset().top;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
  });
  });

$(function(){
    const pagetop = $('#page_top');
    pagetop.hide();
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });


  $(function(){
    $('.section').hide();
  
    $('.button').on('click',function(){
      $('.'+$(this).attr('id')).toggle();
    });
  });