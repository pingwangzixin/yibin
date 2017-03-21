
/*------------------------------- 全部函数 ---------------------------------------------*/


/*动态赋值高度函数*/
function _height(){
    var _height  =  $('.main_right').height() + 'px';
    var _heightMask  =  $('body').height() + 'px';
    $('.main_left').css('height',_height);
    $('.mask').css('height',_heightMask);
    console.log(_height);
}
/*点击图片显示答案函数*/
function test_pic(){
    $('[s=false]').next().hide();
    $('[s=true]').next().show();
}



/*------------------------------- 课堂测评的相关js事件 ---------------------------------------------*/
$(function(){
	
	_height();
	/*左侧滚动*/
	/*$(document).scroll(function() {
		var top = $(document).scrollTop();
		top = (149-top);
		if(top<0){
			$('.main_left').css({
	  			top:'0'
	  		});
		}else{
			top +='px';
			$('.main_left').css({
	  			top:top
	  		});
		}
	});*/
		

    /*导航菜单tab切换*/
    var heada = $('.nav_list li a');
    for (var i = 0; i < heada.length; i++) {
        heada[i].index = i;
        heada[i].onclick = function(){
            for (var i = 0; i < heada.length; i++) {
                heada[i].className = "";
            }
            heada[this.index].className="nav_list_active";
        }
    }


    /*试卷预览点击事件*/
    $('.wrapper .head .box_car .box_car_btn a').click(function(){
        $(this).parent().css('background-color','#caf2f1');
    });

    /*试卷蓝购物车*/
    $('.blue_box').click(function(){
        $('.box_car').slideToggle();
    });
    
    /*试卷购物车删除图片切换*/
   $('.wrapper .head .box_car li .car').live('click',function(){
   		$(this).find('img').attr('src','img/delete_grey.png');
   });
    
    

    /*组卷记录-试卷预览 --答案解析*/ /*答案解析--mask层*/
    $('.theme .choose .ques_num .edit span').click(function(){
        	$(this).addClass('edit_active').parent('div.edit').parent('div.ques_num').siblings('div.ques_num').find('span').removeClass('edit_active');
        _height();
        $('.mask').css('display','block');
    });

	/*课堂评测--组件记录--时间切换*/
	$('.assembly_head span').click(function(){
		$(this).addClass('assembly_head_active').siblings().removeClass('assembly_head_active');
	});



    /*答案解析--mask层 --关闭*/
    $('.mask .mask_head .close').click(function(){
        $('.mask').css('display','none');
    });



    /*table-查看试卷*/
    $('.assembly .form_table table tbody tr td a.look').click(function(){
       $(this).addClass('orange').parent('td').parent('tr').siblings('tr').find('a.look').removeClass('orange');
    });

    /*试卷预览--主标题的 移上事件*/
    $('.theme .theme_title input').mouseover(function(){
        $(this).removeAttr("readonly");
    });


    /* 点击图片 显示隐藏答案*/
    var s= false;
    $('.main_right .sub_ques .sub_ques_line_l .test_pic').click(function(){
        s = !s;
        //$(this).next('div.test_an').show(500);
        $(this).attr('s',s);
        test_pic();
        _height();
    });


	/*左边部分事假*/
	$('.ziyuan-item dd span').click(function(){
		var nav_jibie = $(this).parents("li").find(".jiyuan-list span").text();
		var nav_leimu = $(this).parent().prev().find("span").text();
		var nav_banben = $(this).text();
		var nav_all = "<span>"+nav_jibie+nav_leimu+"</span>";
		    nav_all += "<span class='red red-red'><img src='img/Personal-resources_path-navigation.gif' /></span>";
		    nav_all += "<span>"+nav_banben+"</span>";
		$(".cont-nav-text").html(nav_all);
		$(".tree").show();
		$(".catalog img").hide();
		
		
		$(".ziyuan-item dd span").siblings().removeClass("active");
		$(this).addClass("active");
	});



	/*试题，时间，难度切换*/
	$('.questions_r li span').click(function(){
		$(this).addClass('que_active').parent().siblings().find('span').removeClass('que_active');
	});
	//试题预览 上下删除事件
	$(".List-questions img.del").click(function () {
		YiBin.Msg.confirm('您确定删除这条记录吗？',function (s) {});
		$(this).attr('src','img/del2.png');
	});

	$(".List-questions img.next").live('click',function(){
		var max_num = $(".List-questions img.next").size();
		var _this = $(this).parents(".ques_num");
		var _this_mask = _this.next();	
		var _next = _this_mask.next();
		var _next_remove = _next.next();
		
		var num = _this.find("h5 span").text();
		num = num*1 + 1; (num > max_num) ? num=max_num : num;
		_this.find("h5 span").text(num);
		
		num = _next.find("h5 span").text();
		num = num*1 - 1; num ? num : num=1;
		var c = _next.clone();
		c.find("h5 span").text(num);
		_this.before(c).prev().after(_next_remove);

		_next.remove();
		_next_remove.remove();
	});
	$(".List-questions img.up").live('click',function(){
		var max_num = $(".List-questions img.next").size();
		var _this = $(this).parents(".ques_num");
		var _this_mask = _this.next();	
		var _next_remove = _this.prev();
		var _next = _next_remove.prev();
		
		var num = _this.find("h5 span").text();
		num = num*1 - 1; num ? num : num=1;
		_this.find("h5 span").text(num);
		
		var c = _next.clone();
		num = c.find("h5 span").text();
		num = num*1 + 1; (num > max_num) ? num=max_num : num; 
		c.find("h5 span").text(num);
		_this_mask.after(c).next().after(_next_remove);

		_next.remove();
		_next_remove.remove();
	});
	

	
	$(".ques_num").live('mouseover',function () {
		$(this).addClass("active");
	});
	$(".ques_num").live('mouseout',function () {
		$(this).removeClass("active");
	});
	
	/*模拟hover*/
	$(".List-questions .edit img.del").live('mouseover',function(){
		$(this).attr('src','img/del2.png');
	});
	
	$(".List-questions .edit img.del").live('mouseout',function(){
		$(this).attr('src','img/theme_del.png');
	});
	
	$(".List-questions .edit img.next").live('mouseover',function(){
		$(this).attr('src','img/down2.png');
	});
	
	$(".List-questions .edit img.next").live('mouseout',function(){
		$(this).attr('src','img/theme_down.png');
	});
	
	$(".List-questions .edit img.up").live('mouseover',function(){
		$(this).attr('src','img/up2.png');
	});
	
	$(".List-questions .edit img.up").live('mouseout',function(){
		$(this).attr('src','img/theme_up.png');
	});
	
	
	
	/*提示弹窗*/
	$('.main_right .sub_ques .sub_ques_line_r .collection span.quxiao').live('click',function(){
		$(".del_down").show();  
		setTimeout(function () {
			$(".del_down").hide(); 
		},1000);
	});
		
	$('.main_right .sub_ques .sub_ques_line_r .collection span.tiku').live('click',function(){
		$(".text-text").html("分享成功");
		$(".del_down").show();  
		setTimeout(function () {
			$(".del_down").hide(); 
		},1000);
	});
		
	$('.main_right .sub_ques .sub_ques_line_r .collection span.shoucang').live('click',function(){
		$(".text-text").html("已收藏");
		$(".del_down").show();  
		setTimeout(function () {
			$(".del_down").hide(); 
		},1000);
	});
	
	/*我的课堂*/
	$('.content-body .text .rate .subject').live('click',function(){
		_height();
	    $('.mask').css('display','block');
	});
	
	
	/*组卷记录删除提示*/
	$(".form_table a.del").click(function () {
		YiBin.Msg.confirm('您确定删除这条记录吗？',function (s) {});
	});

	/*试卷预览保存事件*/
	$('.Save_as').click(function(){
		var test = $(".save_theme_input").val();
		if(test==''||test=='请输入名称'){
            $(".del_down").show();  
        }
		setTimeout(function () {
			$(".del_down").hide(); 
		},1000);
	});
});




window.onload = function(){

    /****************************************   饼状图   ******************************************/
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('count'));

    // 指定图表的配置项和数据
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',//水平垂直排放
            x: 'right',//位置
            y:'middle',//位置
            data:['A选项30人','B选项10人','C选项20人','D选项10人']//显示数据
            //itemGap: 20, 行高
            //padding: 10, 内边距
            //textStyle: {color: 'red'}, 设置文字颜色
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {
                        value:335,
                        name:'A选项30人',
                        itemStyle: {
                            normal: {
                                color: '#7ed221'
                            }
                        }
                    },
                    {
                        value:310,
                        name:'B选项10人',
                        itemStyle: {
                            normal: {
                                color: '#7cb5ec'
                            }
                        }
                    },
                    {
                        value:135,
                        name:'C选项20人',
                        itemStyle: {
                            normal: {
                                color: '#f7a35b'
                            }
                        }
                    },
                    {
                        value:335,
                        name:'D选项10人',
                        itemStyle: {
                            normal: {
                                color: '#f15b80'
                            }
                        }
                    }
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
/*----------------------------------------------------- Ztree相关js ------------------------------------------------------------*/
var setting = {};
var zNodes =[
    //有子分类
    { name:"第一单元", open:true,
        children: [
            { name:"阅读",open:true,
                children: [
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"}
                ]
            },
        ]
    },
    { name:"第二单元",
        children: [
            { name:"阅读",
                children: [
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"}
                ]
            },
        ]
    },
    { name:"第三单元",
        children: [
            { name:"阅读",
                children: [
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"}
                ]
            },
        ]
    },
    { name:"第三单元",
        children: [
            { name:"阅读",
                children: [
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"}
                ]
            },
        ]
    },
];
$(document).ready(function(){
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    $.fn.zTree.init($("#treeDemo1"), setting, zNodes);
    $.fn.zTree.init($("#treeDemo2"), setting, zNodes);
    $.fn.zTree.init($("#treeDemo3"), setting, zNodes);

    $('.list-trees .list-p').click(function(){
        $(this).next('.content_wrap').slideToggle();
        $(this).addClass('ztree_active').siblings('p').removeClass('ztree_active');
        $(this).find('img').attr('src','img/red_minus.png').parent('p').siblings('p').find('img').attr('src','img/black_add.png');
    });

});
