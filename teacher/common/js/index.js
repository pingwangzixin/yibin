$(function () {
	
	//左侧栏目选择
	$('.ziyuan-item dd span').click(function(){
		var nav_jibie = $(this).parents("li").find(".jiyuan-list span").text();
		var nav_leimu = $(this).parent().prev().find("span").text();
		var nav_banben = $(this).text();
		var nav_all = "<span>"+nav_jibie+nav_leimu+"</span>";
		    nav_all += "<span class='red red-red'><img src='img/Personal-resources_path-navigation.gif' /></span>";
		    nav_all += "<span>"+nav_banben+"</span>";
		$(".cont-nav-text").html(nav_all);
		$(".cont-nav-text").attr("lock","close");
		$(".tree").show();
		$(".catalog img").hide();
		
		
		$(".ziyuan-item dd span").siblings().removeClass("active");
		$(this).addClass("active");
	});
	
	
	//搜索框  
	$(".search input").change(function () {
		var s = $(".cont-nav-text").attr("lock");
		if(s='open'){
			var t = "<span>搜索资源...</span>";
			$(".cont-nav-text").html(t);
		}
	});
	
});
