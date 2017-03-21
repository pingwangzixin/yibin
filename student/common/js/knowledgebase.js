/**
 * 知识库
 */
$(function(){
   var knowledge = {
       show:function(){
       	var that = this;
           $(".container-left>ul>li>a").click(function(){
               if($(this).next().is(":visible")){
                   $(this).next().hide();
                   $(this).removeClass("cuent")
               }
               else{
               	   that.closeAll();
                   $(this).next().show();
                   $(this).addClass("cuent")
               }
           });
       },
       exclusive:function(){
           $(".container-left-nav ul li a").click(function(){
               $(".container-left-nav ul li a").removeClass("beiying");
               $(this).addClass("beiying");
           });
           $(".conright-nav .paging li.pages").click(function(){
               $(this).addClass("active").siblings().removeClass("active");
           });
           $(".classification ul li").click(function(){
               $(this).addClass("current").siblings().removeClass("current");
           });
           $(".comprehensive ul li").click(function(){
               $(this).addClass("current").siblings().removeClass("current");
           });
           $(".container-right .conright-list li").click(function(){
               $(this).addClass("current").siblings().removeClass("current");
               var num = $(this).index();
               console.log($(".container-right .conright-mask li").eq(num));
               $(".container-right .conright-mask li").eq(num).addClass("show").siblings().removeClass("show");
           });
           $(".zhouji a,.kemu a,.week a").live("click",function(){
              	if($(this).attr("class")=='active'){
          			$(this).siblings().attr("class",'');
          			$(this).attr("class","");
          		}else{
          			$(this).siblings().attr("class",'');
          			$(this).attr("class",'active');
          		}
               //show
               $(".container-left .def").hide();
               $(".container-left ul").show();
               
           });
//         $(".nav-tit a").click(function(){
//             $(".nav-tit a").attr("class",'');
//             $(this).attr("class",'active');
//         });

           $(".page span").click(function(){
               $(".page span").removeClass("active");
               $(this).addClass('active');
           });
       },
       closeAll:function(){
       		$(".container-left-nav").hide();
       		$(".container-left>ul>li>a.cuent").removeClass("cuent");
       },
	   search:function(){
	   	$(".search-img").live("click",function(){
	   		$(".know_box").hide();
	   		$(".know_box_2").show();
	   	});
	   },
       init:function(){
           this.show();
           this.exclusive();
           this.closeAll();
           this.search();
       },
   };
    knowledge.init();
});