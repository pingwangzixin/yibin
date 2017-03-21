/**
 * 个人资源中心
 */
$(function(){
    var config = {
        /*方法 tab切换 */
        tabs:function(tabTit,on,tabCon){
            $(tabCon).each(function(){
                $(this).children().eq(0).show();
            });
            $(tabTit).each(function(){
                $(this).children().eq(0).addClass(on);
            });
            $(tabTit).children().click(function(){
                $(this).addClass(on).siblings().removeClass(on);
                var index = $(tabTit).children().index(this);
                $(tabCon).children().eq(index).show().siblings().hide();
            });
        },
        show:function(){
            /*点击打开弹窗*/
            $(".path-navigation-btn>li:nth-child(1) a").click(function(){
                $(".popup").show();
            });
            $(".investment_con .investment_con_one tbody .bianji").click(function(){
                $(".modify").show();
            });
            $(".investment_btn ul li:nth-child(1) a").click(function(){
                $(".issued").show();
            });
        },
        hide:function(){
            /*点击关闭弹窗*/
            $(".long-resources>.top>ul li:nth-child(2) a").click(function(){
                $(".popup").hide();
            });
            $(".modify-resources>.top>ul li:nth-child(2) a").click(function(){
                $(".modify").hide();
            });
            $(".issued>.modify-resources>.top>ul li:nth-child(2) a").click(function(){
                $(".issued").hide();
            });
            $(".send-off").click(function(){
                $(".issued").hide();
            });
            $(".modify-cancel").click(function(){
                $(".modify").hide();
            });
            $(".upload-cancelled").click(function(){
                $(".popup").hide();
            });
            /*tab切换*/
            config.tabs(".investment_title","on",".investment_con");
            config.tabs(".nav-list>ul","current",".nav-container");
        },
        checkall:function(){
            $(".nav-container div").find(".checkedAll").click(function(){
                var allinput = $(this).parent().find("ul").find("input")
                if ($(this).attr("checked")) { // 全选
                    $(allinput).each(function () {
                        $(allinput).attr("checked", true);
                    });
                }
                else { // 取消全选
                    $(allinput).each(function () {
                        $(allinput).attr("checked", false);
                    });
                }
            });
        },
        upload:function(){
            console.log()
            $(".inputs").change(function(){
                var filePath=$(this).val();
                if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
                    $(".upload-nav").html("").hide();
                    var arr=filePath.split('\\');
                    var fileName=arr[arr.length-1];
                    $(".showFileName").html(fileName);
                }else{
                    $(".showFileName").html("");
                    $(".upload-nav").html("您未上传文件，或者您上传文件类型有误").show();
                    return false
                }
            })
        },
        download:function(){
            $("#download").click(function(){
                if($(".investment_con input[checked]")){

                }
            });
        },
        //del_down btn
        del_down:function(){
            $("#download").parent().click(function(){
                var s =$(".investment_con_one input:checked").size();
                if(!s){
                	$(".nav-text").text("请选中您需要下载的资源");
                    $(".del_down").show();  
                }
				setTimeout(function () {
					$(".del_down").hide(); 
				},1000);
            });
            $("#delete").parent().click(function(){
                var s =$(".investment_con_one input:checked").size();
                if(!s){
                   if(!s){
                   		$(".nav-text").text("请选中您需要删除的资源");
	                    $(".del_down1").show();  
	                }
					setTimeout(function () {
						$(".del_down1").hide(); 
					},1000);
                   
                }else{
                	YiBin.Msg.confirm('您确定删除这条记录吗？',function (s) {});
                }
            });  
        },
        cancel:function(){
            $(".nav-top ul li input[type=text]").click(function(){
                $(".nav-top ul li input[type=text]").attr("placeholder","")
            });
            $(".nav-top ul li input[type=text]").blur(function(){
                $(".nav-top ul li input[type=text]").attr("placeholder","  例：2015年02月15日    下发资源（一）")
            });
        },
        del_downs:function(){
            $(".login").click(function(){
                $(".del_down2").show();
                setTimeout(function(){
                    $(".del_down2").hide();
                },2000);
            })
        },
        tabs_name:function(){
        	$('.modify .modify-resources nav .tab span').click(function(){
        		$(this).addClass('tabactive').siblings().removeClass('tabactive');
        	})
        },
        /*执行函数*/
        init:function(){
            this.hide();
            this.show();
            this.checkall();
            this.upload();
            this.download();
            this.del_down();
            this.del_downs();
            this.cancel();
            this.tabs_name();
        },
    };
    config.init();
})
