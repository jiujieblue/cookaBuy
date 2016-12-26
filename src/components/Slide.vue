<style lang="less">
	.slide{
		margin: 0 auto;
		overflow: hidden;
		&-box{
			>div{
				float: left;
				>img{
					width: 100%;
				}
			}
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
  	<button class="slide-left">shang</button>
  </slot>
  <slot name="right">
		<button class="slide-right">下</button>
  </slot>
</div>
</template>

<script>
	import Vue from 'vue'


export default {
	data () {
		return {
			moveTime: 1000,
  				liW: 0,
  				oneTime: '400ms',
  				num: 1,
					liLength: 0,
			isMove: true,
			timer: null
		}
	},
  props: {
  	slideData: {
  		type: Object,
  		default: function(){
  			return {
  				liW: 0,
  				oneTime: '400ms',
  				num: 1,
					liLength: 0,
  				moveTime: 1000
  			}
  		}
  	}
  },
	mounted () {
		console.log(this.slideData)
		var me = this
		window.onload = function () {
			$('.slide-left').click(function(){
				me.move(-1)
			})
			$('.slide-right').click(function(){
				me.move(1)
			})

			me.slideData.liW = parseInt($('.slide-box div').css('width'))
			$('.slide, .slide-box div').css({width: me.slideData.liW + 'px'})
			me.liLength = $('.slide-box div').length
			$('.slide-box').css({width: me.slideData.liW*($('.slide-box div').length) + 'px'})
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
					$('.slide-box').prepend($('.slide-box div:eq('+(this.liLength-1)+')')).css({transitionDuration: '0ms', transform: 'translate3d('+(n*this.slideData.liW*this.slideData.num)+'px, 0px, 0px)'})

					setTimeout(function(){
						$('.slide-box').css({transitionDuration: '400ms', transform: 'translate3d(0px, 0px, 0px)'})
						setTimeout(function(){
							me.isMove = true
						},300)
					},0)
				}
				if(n>0){
					$('.slide-box').css({transitionDuration:  '400ms', transform: 'translate3d('+(-n*this.slideData.liW*this.slideData.num)+'px, 0px, 0px)'})

					setTimeout(function(){
						$('.slide-box').append($('.slide-box div:eq(0)')).css({transitionDuration: '0ms', transform: 'translate3d(0px, 0px, 0px)'})
						// for(var i = ){

						// }
						setTimeout(function(){
							me.isMove = true
						},10)
					},400)
				}
			}
		},
		autoMove () {
			this.timer = setInterval(this.move.bind(this,1),5000)
		},
		_over (e) {
			clearInterval(this.timer)
			this.timer = null
		},
		_out (e) {
			this.autoMove()
		}
	}
}
</script>