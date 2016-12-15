/*导航效果*/
var b_nav = {};//导航相关的全局变量。
b_nav.li_left = 0;//初始的left;
b_nav.li_width = 0;//初始的宽

$(".b_nav_li").hover(function() {
    var that = $(this);
    b_nav.redHoverTimer = setTimeout(function(){
        var left = that.offset().left;
        var the_width = that.width();
        var all_left = $(".b_nav").offset().left;
        var the_left = left - all_left;
        $(".ani_red").css({
            left: the_left,
            width: the_width+20
        });
    },50);
}, function() {
    clearTimeout(b_nav.redHoverTimer);
});
$(".b_nav_li").click(function(event) {
    var index = $(this).index()-1;
    init_nav(index);
});
$(".b_nav").mouseleave(function(event) {
    clearTimeout(b_nav.redHoverTimer);
    $(".ani_red").css({
        left: b_nav.li_left,
        width: b_nav.li_width
    });
});
$(".b_nav").mouseenter(function(event) {
    $(".ani_red").show();
});

init_nav(0);//初始化


//菜单初始化
function init_nav(i){
    if($('.b_nav_li').length-1<i){
        i = 0;
    }
    var theLi = $('.b_nav_li').eq(i);
    var left = theLi.offset().left;
    var the_width = theLi.width();
    var all_left = $(".b_nav").offset().left;
    var the_left = left - all_left;
    b_nav.li_left = the_left;
    b_nav.li_width = the_width+20;
    $(".b_nav_li_active").removeClass('b_nav_li_active');
    theLi.addClass('b_nav_li_active');
    $(".ani_red").css({
        left: b_nav.li_left,
        width: b_nav.li_width
    });
}

/*导航效果*/


