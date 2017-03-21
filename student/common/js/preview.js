$(function () {
//	$(".nav-tit a").click(function(){
//		$(".nav-tit a").attr("class",'');
//		$(this).attr("class",'active');
//	});
	$(".nav-con a").click(function(){
		$(this).siblings().attr("class",'');
		$(this).attr("class",'active');
	});
	$(".page span").click(function(){
		$(".page span").removeClass("yx_active");
		$(this).addClass('yx_active');
	});
	
	$('.prepared_nav .nav-con li').click(function(){
		$(this).addClass('pre_active').siblings().removeClass('pre_active');
		$(".cont").hide();
		$(".cont:eq(0)").show();
	});
	
	
	
});
