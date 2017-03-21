$(function(){

    
    $('.header .header_con .header_list li a').click(function(){
        $(this).addClass('header_active').parent('li').siblings('li').find('a').removeClass('header_active');
    });

    
    $('.header_btn strong').mouseover(function(){
        $('.personal').show();
    });
   	$('.header_btn strong').mouseout(function(){
        $('.personal').hide();
    });
   
  	
  
  
    $('.header .header_btn strong').hover(function(){
        $('.personal').show()
    })
    $('.header .header_btn strong').mouseout(function(){
        $('.personal').hide();
    })

    
    $('.header .personal li').click(function(){
        $(this).addClass('personal_active').siblings('li').removeClass('personal_active');
        $(this).find('i').attr('class','red').parent().siblings().find('i').attr('class','grey');

    });
    
    
    
    
    
    
    
    
    
    
});
