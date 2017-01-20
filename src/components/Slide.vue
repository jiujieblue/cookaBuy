<style lang="less">
	@keyframes leftfirst
	{
		0% {left: -40px;}
		50% {left: 0;}
		100% {opacity: 1;}
	}
	@keyframes rightfirst
	{
		0% {right: -40px;}
		50% {right: 0;}
		100% {opacity: 1;}
	}
	.slide{
		width: 100%;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
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
		&-sub{
			position: absolute;
			left: 50%;
			bottom: 10px;
			&-slideSub0{
				>li{
					float: left;
					margin-right: 10px;
					width: 15px;
					height: 15px;
					border: 1px solid #c6c6c6;
					border-radius: 50%;
					background: #fff;
					&.active{
						background: #000;
					}
				}
				&:after{
					content: '';
					display: table;
					clear: both;
				}
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
  
</div>
</template>

<script>
	import Vue from 'vue'


export default {
	data () {
		return {
			liW: 0,
			oneTime: '400ms',
			liLength: 0,
			isMove: true,
			timer1: null,
			timer2: null,
			activeNum: 0
		}
	},
  props: {
  	slideData: {
  		type: Object,
  		default: function(){
  			return {
  				oneTime: '400ms',
  				num: 1,
  				moveTime: 1000,
  				marginR: 0,
  				slideSub: 0,
  				isPropsMove: false,

  				parentReque: false
  			}
  		}
  	}
  },
  updated () {
  	this.liW = parseInt($($('.slide-box >div')[0]).css('width'))
		$('.slide-sub').css({marginLeft: '-'+parseInt($('.slide-sub').css('width'))/2+'px'})
		$('.slide').css({height: parseInt($($('.slide-box >div')[0]).css('height')) + 'px'})
  	var wid = this.liW
		this.liLength = $('.slide-box >div').length
		$('.slide-box >div').css({marginRight: this.slideData.marginR + 'px'})
		$('.slide-box').css({width: ((wid + this.slideData.marginR)*$('.slide-box div').length) + 'px'})
  },
	mounted () {
		var me = this
		window.onload = function () {
			$('.slide-left').click(function(){
				me.move(-1)
			})
			$('.slide-right').click(function(){
				me.move(1)
			})
		}

		var timer = setInterval(function(){
			if(me.slideData.parentReque){
				clearInterval(timer)
				me.autoMove()
			}
		}, 500)
	},
	methods: {
		_slideSub0 (e, i) {
			var n = i - $(e.target).siblings('.active').attr('data_li')
			this.move(n)
		},
		move (n) {
			var me =this
			if(this.isMove){
				this.isMove = false
				if(n < 0){
					$('.slide-box').prepend($('.slide-box div:eq('+(this.liLength-1)+')').clone(true)).css({transitionDuration: '0ms', transform: 'translate3d('+(n*(this.liW+this.slideData.marginR))+'px, 0px, 0px)'})

					setTimeout(function(){
						$('.slide-box').css({transitionDuration: '300ms', transform: 'translate3d(0px, 0px, 0px)'})
						$('.slide-box div:eq('+(this.liLength-1)+')').remove()
						setTimeout(function(){
							me.isMove = true
						},300)
					},10)
				}
				if(n > 0){
					$('.slide-box').css({width: (this.liW + this.slideData.marginR)*($('.slide-box div').length+n) + 'px'})
					setTimeout(function(){
						$('.slide-box').append($('.slide-box div:lt('+ n +')').clone(true))
						$('.slide-box').css({transitionDuration:  300 + 'ms', transform: 'translate3d('+(-(me.liW+me.slideData.marginR))+'px, 0px, 0px)'})
					},1)
					setTimeout(function(){
						$('.slide-box div:lt('+ n +')').remove()
						$('.slide-box').css({transitionDuration: '0ms', transform: 'translate3d(0px, 0px, 0px)'})
						
						setTimeout(function(){
							me.isMove = true
						},10)
					},301)
				}
			}
		},
		autoMove () {
			this.timer1 = setInterval(this.move.bind(this,this.slideData.num),this.slideData.moveTime)
		},
		_over (e) {
			if(this.slideData.isPropsMove){
				clearInterval(this.timer1)
				this.timer1 = null
			}
		},
		_out (e) {
			if(this.slideData.isPropsMove){
				this.autoMove()
			}
		}
	}
}
</script>