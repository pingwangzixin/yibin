$(function () {
	var s = false;
	$(".con .img img").click(function () {
		s = !s;
		if(s){
			$(".con .img img").css("width","100%");
		}else{
			$(".con .img img").css("width","30%");
		}
	});
});
