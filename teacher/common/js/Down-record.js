/**
 * 下发记录
 */
$(function(){
    var downrecord = {
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
        init:function(){
            this.tabs(".conleft-list ul","current",".conleft-nav");
        },
    };
    downrecord.init();
});