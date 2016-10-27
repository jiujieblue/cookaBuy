<template>
  <div class="go-top">
  	<span class="icon-zhiding" @click='go_top'></span>
  </div>
</template>

<script>
import Vue from 'vue'

$(window).bind("scroll", function(){ 
  var top = $(this).scrollTop(); // 当前窗口的滚动距离
  if(top>=600){
  	$('.go-top').addClass('scroll')
  }else{
  	$('.go-top').removeClass('scroll')
  }
});

export default{
	data () {
		return{
			sdelay: 0
		}
	},
  methods: {
  	go_top (acceleration) {
  		// var Tops = $(window).scrollTop()
  		// var count = 200
  		// var num = 0
  		// var step = Tops/count
  		// var timer = setInterval(function(){
  		// 	num ++
  		// 	window.scrollBy(0,-step)
  		// 	if(num >= count){
  		// 		clearInterval(timer)
  		// 		timer = null
  		// 		num = 0
  		// 	}
  		// },0.01)

  		acceleration = 0.1
			var y = window.scrollY || 0
			// 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
			var speed = 1 + acceleration
			window.scrollTo(0, Math.floor(y / speed))
			// 如果距离不为零, 继续调用迭代本函数
			if( y > 0) {
			  window.setTimeout(this.go_top,16)
			}

      // window.scrollBy(0,-10);//Only for y vertical-axis
      // if(document.body.scrollTop>0) {
      //   this.sdelay = setTimeout(this.go_top(),100);
      // }
  	}
  }
}
</script>
<style lang="less">
	.go-top{
		width: 0;
		height: 0;
		overflow: hidden;
		position: fixed;
		right: 80px;
		bottom: 100px;
		z-index: 1000;
		transition: all 0.3s linear;
		span{
			padding: 5px;
			background: #c2c2c2;
			font-size: 45px;
			color: #fff;
			&:hover{
				background: #818181;
			}
		}
		&.scroll{
			width: 55px;
			height: 55px;
		}
	}
</style>