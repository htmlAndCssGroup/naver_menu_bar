/*
$(document).ready(function(){
  $('.more').click(function(){
    if($('.more').hasClass('more')){
       $('.more').addClass('close').removeClass('more');
       $('.board').css('visibility', 'visible');
    }else if($('.close').hasClass('close')){
       $('.close').addClass('more').removeClass('close');  
       $('.board').css('visibility', 'hidden');
    }
  });
});
*/

$(document).ready(function(){
	$('.more').mouseover(function(){
		if($('.more').hasClass('more')){
			$('.more').addClass('close').removeClass('more');
			$('.board').css('visibility', 'visible');
		}
	});
	$('.more').mouseleave(function(){
		if($('.close').hasClass('close')){
			$('.close').addClass('more').removeClass('close');
			$('.board').css('visibility', 'hidden');
		}
	});
	$('.board').mouseover(function(){
		if($('.more').hasClass('more')){
			$('.more').addClass('close').removeClass('more');
			$('.board').css('visibility', 'visible');
		}
	});
	$('.board').mouseleave(function(){
		if($('.close').hasClass('close')){
			$('.close').addClass('more').removeClass('close');
			$('.board').css('visibility', 'hidden');
		}
	});
});