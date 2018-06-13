//		这是放大镜外面的鼠标区域
	function Zoom(imgbox, hoverbox, l, t, x, y, h_w, h_h, showbox) {
    var moveX = x - l - (h_w / 2);
    //鼠标区域距离
    var moveY = y - t - (h_h / 2);
    //鼠标区域距离
    if (moveX < 0) {
        moveX = 0//控制底部的最小bottom边距
    }
    if (moveY < 0) {
        moveY = 0//控制顶部的最小top边距
    }
    if (moveX > imgbox.width() - h_w) {
        moveX = imgbox.width() - h_w
    }
    if (moveY > imgbox.height() - h_h) {
        moveY = imgbox.height() - h_h
    }
    //判断鼠标使其不跑出图片框
    var zoomX = showbox.width() / imgbox.width()
    //求图片比例
    var zoomY = showbox.height() / imgbox.height()

    showbox.css({
        left: -(moveX * zoomX),
        top: -(moveY * zoomY)
    })
//  console.log(moveX+"  "+zoomX);
    hoverbox.css({
        left: moveX,
        top: moveY,
    })
    //确定位置
    
    
    //让放大后的图片跟着放大镜走
    $(".showbox").css("left",moveX+"px");
//    让放大后的图片上下跑动
	$(".showbox").css("top",moveY+"px");
//	console.log("top=="+moveY+",left=="+moveX);
}

function Zoomhover(imgbox, hoverbox, showbox) {
    var l = imgbox.offset().left;
    var t = imgbox.offset().top;
    var w = hoverbox.width();
    var h = hoverbox.height();
    var time;
//当鼠标进入这个img的时候,镜头出现  show();
    $(".probox img,.hoverbox").mouseover(function(e) {
//鼠标从哪里进入图片,图片定位
        var x = e.pageX;
        var y = e.pageY;
//      console.log(x+"  "+y);
        $(".hoverbox,.showbox").show();
        hoverbox.css("opacity", "0.3")
        time = setTimeout(function() {
            Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox)
        }, 1)
    }).mousemove(function(e) {
//镜片光标定位,光标在镜片中心点
        var x = e.pageX;
        var y = e.pageY;
        time = setTimeout(function() {
            Zoom(imgbox, hoverbox, l, t, x, y, w, h, showbox)
        }, 1)
    }).mouseout(function() {
//当鼠标从图片出来的时候,最大的imgboxDIV隐藏和镜头隐藏
        showbox.parent().hide()
        hoverbox.hide();
    })
}
$(function() {
	$("#Fa_suiyida>.min_imgbox>img").click(function(){
		var Src=$(this).attr('src');
		$("#Fa_suiyida>.imgbox>.probox>img").attr('src',Src);
		$("#Fa_suiyida>.imgbox>.showbox>img").attr('src',Src);
	});
//	调用
    Zoomhover($(".probox img"), $(".hoverbox"), $(".showbox img"));
    

})