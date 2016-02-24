jQuery(document).ready(function() {
    $('.aside__conteinerFilters-color-container-items').on('click', function(e){
      e.preventDefault();

      var $this = $(this),
          item = $this.closest('.aside__conteinerFilters-color-container-items'),
          list = $this.closest('.aside__conteinerFilters'),
          items = list.find('.aside__conteinerFilters-color-container-items');
          /*content = item.find('.accordeonContainer'),
          otherContent = list.find('.accordeonContainer'),
          imgSlide =  item.find('.aside__conteinerFilters-having-name-link:after');*/


        if (!item.hasClass('activeColorSidebar')){
          items.removeClass('activeColorSidebar');
          item.addClass('activeColorSidebar');

        }else{
          
          items.removeClass('activeColorSidebar');
        }
       
    });
});