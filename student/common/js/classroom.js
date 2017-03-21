$(function () {
	//视频显示
	$(".cont table span.look").live("click",function(){
			$(".next_page").show();
	});
	$(".next_page .show .tit img").live("click",function(){
			$(".next_page").hide();
	});
	$(".cont table span.down").live("click",function(){
		alert("下载");
	});
	
	//table 无内容
	
	$(".nav-con tr").find("td:not(:first)").live("click",function(){
		$(".cont .table table").hide();
		$(".cont .table .hide").show();
	});
	$(".nav-con tr").find("td:not(:first)").css("cursor","pointer");
	
});


