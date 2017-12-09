$(function(){
	/* zepto入口函数*/
	/*轮播图功能：1.无缝滚动 2.索引点 3.手势切换*/

	/* 无缝滚动*/
	var $banner = $('.sn_banner');
	var width = $banner.width();
	var $image = $banner.find('ul:first');
	var $pointUl = $banner.find('ul:eq(1)');
	var $points = $pointUl.find('li');
	/*动画方法*/
	var animateFuc = function(){
		//四个参数 需要改变动画的属性 动画执行的时间 动画执行的速度 回调函数
		$image.animate({'-webkit-transform':'translateX('+(-index*width)+'px)'},1000,'linear',function(){
			//判断
			if(index>=9){
				index=1;
				//瞬间回到原来的位置
				$image.css({'-webkit-transform':'translateX('+(-index*width)+'px)'});
			}else if(index <=0){
				index=0;
				$image.css({'-webkit-transform':'translateX('+(-index*width)+'px)'});
			}

			/* 索引点*/
			$points.removeClass('now').eq(index-1).addClass('now');
		});
	}

	var index = 1;
	var timer = setInterval(function(){
		index ++;
		animateFuc();
	},3000);

	/* 手势切换*/
	/* 上一张 右滑*/
	$image.on('swipeRight',function(){
		index --;
		/*动画地切换*/
		animateFuc();
	})
	/* 下一张 左滑*/
	$image.on('swipeLeft',function(){
		index ++;
		animateFuc();
	})
});