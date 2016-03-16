$(document).ready(function(){
      // Smooth Scrolling
      $('.navbar ul a').click(function(){
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);
            return false;
        });
});