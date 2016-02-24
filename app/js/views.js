var myModule = (function(){
  //Инициализация модуля
  var init = function(){
    _setUpListners();
    //то что должно произойти сразу
  };

  //прослушивает события
  var _setUpListners = function(){
    //прослушка событий

    $('#view_link0').on('click', _showView0); 
    $('#view_link1').on('click', _showView1);
    $('#view_link2').on('click', _showView2);
  };


  //работает с модальным окном
  var _showView0 = function(e){
    console.log("Привет ");

    if (e.preventDefault) { // если метод существует
        e.preventDefault(); // то вызвать его
    } else { // иначе вариант IE8-:
        e.returnValue = false;
    }

    var view0 = $("#view0"),
        view1 = $("#view1"),
        view2 = $("#view2"),
        classView0 = $('.products'),
        classView1 = $('.products_view1'),
        classView2 = $('.products_view2'),
        viewLink0  = $('#view_link0'),
        viewLink1  = $('#view_link1'),
        viewLink2  = $('#view_link2');


      if (view0) {
        classView0.hide(1000);
        classView2.hide(1000);
        classView1.show(2000);
        viewLink0.addClass('section__sort-byCatalogs-linkView-active1');
        viewLink1.removeClass('section__sort-byCatalogs-linkView-active2');
        viewLink2.removeClass('section__sort-byCatalogs-linkView-active3');
      }else{
        classView1.show(2000);
      }
     console.log("well done");
     
    };
  

  //добавляет проект
  var _showView1 = function(e){
   console.log("Привет ");

    if (e.preventDefault) { // если метод существует
        e.preventDefault(); // то вызвать его
    } else { // иначе вариант IE8-:
        e.returnValue = false;
    }

    var view0 = $("#view0"),
        view1 = $("#view1"),
        view2 = $("#view2"),
        classView0 = $('.products'),
        classView1 = $('.products_view1'),
        classView2 = $('.products_view2'),
        viewLink0  = $('#view_link0'),
        viewLink1  = $('#view_link1'),
        viewLink2  = $('#view_link2');


      if (view1) {
          classView0.hide(1000);
          classView2.hide(1000);
          classView0.show(1000);
          viewLink1.addClass('section__sort-byCatalogs-linkView-active2');
          viewLink0.removeClass('section__sort-byCatalogs-linkView-active1');
          viewLink2.removeClass('section__sort-byCatalogs-linkView-active3');
        }else{
          classView0.show(1000);
      }
      
     console.log("well done");
     
    
  };


  var _showView2 = function(e){
   console.log("Привет ");

    if (e.preventDefault) { // если метод существует
        e.preventDefault(); // то вызвать его
    } else { // иначе вариант IE8-:
        e.returnValue = false;
    }

    var view0 = $("#view0"),
        view1 = $("#view1"),
        view2 = $("#view2"),
        classView0 = $('.products'),
        classView1 = $('.products_view1'),
        classView2 = $('.products_view2')
        viewLink0  = $('#view_link0'),
        viewLink1  = $('#view_link1'),
        viewLink2  = $('#view_link2');


      if (view2) {
        classView0.hide(1000);
        classView1.hide(1000);
        classView2.show(2000);
        viewLink2.addClass('section__sort-byCatalogs-linkView-active3');
        viewLink0.removeClass('section__sort-byCatalogs-linkView-active1');
        viewLink1.removeClass('section__sort-byCatalogs-linkView-active2');
      }else{
        classView2.show(2000);
      }
     console.log("well done");
     
  };

  //Возвращаем объект (публичные методы)
  return {
    init: init
  };

})();


  myModule.init();
  console.log('my views run');


