<template>
  <div class="go-top">
  	<span class="icon-zhiding" @click='go_top' v-if="!mouseGoTop"></span>
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
			isUpward: false,
			mouseGoTop: false
		}
	},
	mounted () {
		var me = this
		var scrollFunc=function(e){
	    e=e || window.event; 
	    if(e.wheelDelta){//IE/Opera/Chrome 
	      if(e.wheelDelta<0 && me.isUpward){
	      	me.isUpward = false
	      }
	    }else if(e.detail){//Firefox 
	      if(e.detail<0 && me.isUpward){
	      	me.isUpward = false
	      }
	    }
		}
		if(document.addEventListener){ 
	    document.addEventListener('DOMMouseScroll',scrollFunc,false);
		}//W3C 
		window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome
	},
  methods: {
  	go_top () {
  		this.isUpward = true
  		this.upMove()
  	},
  	upMove () {
			var y = window.scrollY || 0
			// 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
			var speed = 1.1
			window.scrollTo(0, Math.floor(y / speed))
			// 如果距离不为零, 继续调用迭代本函数
			if( y > 0 && this.isUpward ) {
			  window.setTimeout(this.upMove,10)
			}
  	}
  }
}
</script>
<style lang="less">
	.go-top{
		width: 0;
		height: 0;
		line-height: 25px;
		overflow: hidden;
		position: fixed;
		right: 80px;
		bottom: 100px;
		z-index: 1000;
		background: #c2c2c2;
		text-align: center;
		color: #fff;
		cursor: pointer;
		transition: all 0.3s linear;
		span{
			padding: 5px;
			font-size: 45px;
		}
		&.scroll{
			width: 55px;
			height: 55px;
		}
		&:hover{
			background: #818181;
		}
	}
</style>