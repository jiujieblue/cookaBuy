<style lang="less">
	.slide{
		width: 100%;
		margin: 0 auto;
		overflow: hidden;
		&-box{
			position: relative;
			&:after{
				content: '';
				display: table;
				clear: both;
			}
		}
	}
</style>
<template>
<div class="slide" @mouseover="_over" @mouseout="_out">
	<div class="slide-box">
		<slot>
			
		</slot>
  </div>
  <slot name="left">
  	<button @click="move(-1)" class="slide-left">shang</button>
  </slot>
  <slot name="right">
		<button @click="move(1)" class="slide-right">下</button>
  </slot>
</div>
</template>

<script>
	import Vue from 'vue'


export default {
	data () {
		return {
			liW: 0, // 总移动长度
			totalTime: 1000,
			oneTime: 400,
			isMove: true,
			liLength: 0,
			timer: null
		}
	},
	mounted () {
		var me = this
		window.onload = function () {
			var liW = parseInt($('.slide-box div').css('width'))
			$('.slide-box').css({width: liW*($('.slide-box div').length) + 'px'})
			console.log($('.search-product-left-gridRecommended'))
			me.liW = liW
			me.divDomList = $('.slide-box div')
			me.divLength = $('.slide-box div').length
		}
		$('.slide-left').click(function(){
			me.move(-1)
		})
		$('.slide-right').click(function(){
			me.move(1)
		})
		this.autoMove()
	},
	methods: {
		move (n) {
			var me =this
			if(this.isMove){
				this.isMove = false
				if(n<0){
					$('.slide-box').prepend($('.slide-box div:eq('+(this.liLength-1)+')')).css({transitionDuration: '0ms', transform: 'translate3d('+(n*this.liW)+'px, 0px, 0px)'})

					setTimeout(function(){
						$('.slide-box').css({transitionDuration: '400ms', transform: 'translate3d(0px, 0px, 0px)'})
						setTimeout(function(){
							me.isMove = true
						},300)
					},10)
				}
				if(n>0){
					$('.slide-box').css({transitionDuration: '400ms', transform: 'translate3d('+(-n*this.liW)+'px, 0px, 0px)'})

					setTimeout(function(){
						$('.slide-box').append($('.slide-box div:eq(0)')).css({transitionDuration: '0ms', transform: 'translate3d(0px, 0px, 0px)'})
						setTimeout(function(){
							me.isMove = true
						},10)
					},300)
				}
			}
		},
		autoMove () {
			//this.timer = setInterval(this.move.bind(this,1),this.totalTime)
		},
		_over (e) {
			clearInterval(this.timer)
			this.timer = null
		},
		_out (e) {
			this.autoMove()
		}
	},
  props: {
  	
  }
}
</script>