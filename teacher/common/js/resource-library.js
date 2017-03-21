/**
 * Created by Administrator on 2016/4/20.
 */
$(document).ready(function(){
	var s = false;
    $(".conrow_center_center img").click(function(){
		s = !s;
        if(s){
           $(".conrow_center_center img").css("width","100%");
        }else{
           $(".conrow_center_center img").css("width","30%");
        }
    });

});
