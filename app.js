$(document).ready(function(){



  $(window).scroll(function(e){
    var $el = $('.fixedElement');
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 600 && !isPositionFixed){
      $el.css({'position': 'fixed', 'top': '0px', 'background-color': 'black'});
    }
    if ($(this).scrollTop() < 600 && isPositionFixed){
      $el.css({'position': 'absolute', 'top': '0px','background-color': 'transparent'});
    }
  });








if($('.brands_slider').length)
{
var brandsSlider = $('.brands_slider');

brandsSlider.owlCarousel(
{
loop:true,
autoplay:true,
autoplayTimeout:5000,
nav:false,
dots:false,
autoWidth:true,
items:8,
margin:42
});

if($('.brands_prev').length)
{
var prev = $('.brands_prev');
prev.on('click', function()
{
brandsSlider.trigger('prev.owl.carousel');
});
}

if($('.brands_next').length)
{
var next = $('.brands_next');
next.on('click', function()
{
brandsSlider.trigger('next.owl.carousel');
});
}
}


});
