$(document).ready(function(){

      $('.slideshow_pic').on('click', function(e){
        e.preventDefault();

          var
            $this = $(this),
            item = $this.closest('.slideshow_item'),
            container = $this.closest('.slideshow'),
            display = container.find('.slideshow_display'),
            path = item.find('img').attr('src'),
            duration = 300;

            display.find('img').fadeOut(duration, function(){

            $(this).attr('src',path).fadeIn(duration);

});

          });



});
