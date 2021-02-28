$(document).ready(function(){
    $(".main__slider").slick({
        infinite: true,
        arrows: false,
        dots: true,
        dotsClass: 'slick__dots',
      });

      $(".works__elements").slick({
        infinite: true,
        arrows: false,
        dots: true,
        dotsClass: 'slick__dots_works',
        slidesPerRow: 2,
        variableWidth: true,
        slidesToScroll: 1,
      });

})

//функция для чекбокса в форме. Я ее написал просто что б была,можно удалить либо улучшить

function checkBoxFun() {
  var chbox;
  chbox=document.getElementById('checkBox');
    if (chbox.checked) {
      console.log('Выбран');
    }
    else {
      console.log('Не выбран');
    }
  }