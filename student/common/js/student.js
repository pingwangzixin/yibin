$(function(){

	/************************************************   个人信息    **********************************************************/
	/*个人信息nav导航*/
	$('.person .nav li').click(function(){
		$(this).addClass('nav_active').siblings('li').removeClass('nav_active');
	});

	/*资料的切换*/
	$('.person .tv .tv_box .info li').click(function(){
		$(this).addClass('info_active').siblings('li').removeClass('info_active');
		$(".info_show_con").hide().eq($(this).index()).show();
		
		var names = $(".info_show_con").eq($(this).index()).attr('class').split(' ');
		if( names[0]==='info_show_safety' ){
			$('.head_img').hide();
		}else{
			$('.head_img').show();
		}
		
	});


	$(".nav-con a").click(function(){
		$(".nav-con a").attr("class",'');
		$(this).attr("class",'active');
	});
	$(".nav-tit a").click(function(){
		$(".nav-tit a").attr("class",'');
		$(this).attr("class",'active');
	});
	$(".page span").click(function(){
		$(".page span").removeClass("active");
		$(this).addClass('active');
	});
	$('.info_show_set p img').click(function () {
		var s = $(this).attr("status");
		if(s=='open'||s==undefined){
			$(this).attr("status","close");
			$(this).attr("src","img/imgkai_off.png");
		}else{
			$(this).attr("status","open");
			$(this).attr("src","img/kai_on.png");			
		}
	})
});


