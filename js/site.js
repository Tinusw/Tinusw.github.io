$(document).ready(function(){
      // Smooth Scrolling
      $('.navbar ul a').click(function(){
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);
            return false;
        });

      // Text Overlay on Bootstrap Carousels
      $(".workContainer").mouseenter(function(){
        $(".clickInfo", this).css("display", "inherit");
      });

      $(".workContainer").mouseleave(function(){
        $(".clickInfo", this).hide();
      });      

      // Modal Popups
      $('#work').on("click", function(){
        $('#workModal').modal('show');
      });

      $('#work2').on("click", function(){
        $('#work2Modal').modal('show');
      });

      $('#work3').on("click", function(){
        $('#work3Modal').modal('show');
      });

      $('#work4').on("click", function(){
        $('#work4Modal').modal('show');
      });

});