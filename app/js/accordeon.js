jQuery(document).ready(function() {
    $('.accordion_trigger').on('click', function(e){
      e.preventDefault();

      var $this = $(this),
          item = $this.closest('.accordeonItem'),
          list = $this.closest('.aside__conteinerFilters'),
          items = list.find('.accordeonItem'),
          content = item.find('.accordeonContainer'),
          otherContent = list.find('.accordeonContainer'),
          imgSlide =  item.find('.aside__conteinerFilters-having-name-link:after');


        if(!item.hasClass('activeAccordion')){
          items.removeClass('activeAccordion');
          item.addClass('activeAccordion');

          $this.removeClass('aside__conteinerFilters-having-name-link').addClass('aside__conteinerFilters-having-name-link-down');
          content.stop(true, true).slideDown(1000);
        }else{
          $this.removeClass('aside__conteinerFilters-having-name-link-down').addClass('aside__conteinerFilters-having-name-link');
          content.stop(true, true).slideUp(1000);
          items.removeClass('activeAccordion');
        }
       
    });
});