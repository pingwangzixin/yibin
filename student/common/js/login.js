/**
 * Created by kangwei chen on 2016/4/29.
 */
$(function(){
    var login = {
        teacher:function(){
            $(".guanbi").click(function(){
                $(".select-school").hide();
            });
            $(".quxiao").click(function(){
                $(".select-school").hide();
            });
            $(".list-teacher").click(function(){
                $(".student").hide();
                $(".teacher").show();
                $(".list-teacher").addClass("current");
                $(".list-student").removeClass("current-student");
                $(".container").css("background","url("+'img/ditu2.jpg'+")")
                $(".container-nav-left").attr("src","img/image2.png")
            });
        },
        student:function(){
            $(".list-student").click(function(){
                $(".teacher").hide();
                $(".student").show();
                $(".list-teacher").removeClass("current");
                $(".list-student").addClass("current-student");
                $(".container").css("background-image","url("+'img/ditu.jpg'+")")
                $(".container-nav-left").attr("src","img/image1.png")
            });
            $(".xuexiao").click(function(){
                $(".select-school-student").show();
            });
            $(".quxian").click(function(){
                $(".select-school-xuanze").show();
            });
        },

        init:function(){
            this.teacher()
            this.student();
        },
    };
    login.init();
});