/*-------------------------------Ztree相关js---------------------------------------------*/
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
});


/*-------------------------------ul列表点击事件---------------------------------------------*/
$(document).ready(function(){

    $('.list-trees .list-p').click(function(){
        $(this).next('.content_wrap').slideToggle();
        $(this).addClass('ztree_active').siblings('p').removeClass('ztree_active');
        $(this).find('img').attr('src','img/red_minus.png').parent('p').siblings('p').find('img').attr('src','img/black_add.png');
    });

});
