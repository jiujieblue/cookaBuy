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
			timer: null
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
  				totalMar: 0
  			}
  		}
  	}
  },
  updated () {
  	this.liW = parseInt($($('.search-product-left-gridRecommended')[0]).css('width'))
  	
  	var val = this.liW
		this.liLength = $('.slide-box div').length
		$('.slide-box').css({width: (val*($('.slide-box div').length)) + 'px'})
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
		this.autoMove()
	},
	methods: {
		move (n) {
			var me =this
			if(this.isMove){
				//this.isMove = false
				if(n < 0){
					$('.slide-box').prepend($('.slide-box div:eq('+(this.liLength-1)+')')).css({transitionDuration: '0ms', transform: 'translate3d('+(n*this.liW)+'px, 0px, 0px)'})

					setTimeout(function(){
						$('.slide-box').css({transitionDuration: '300ms', transform: 'translate3d(0px, 0px, 0px)'})
						setTimeout(function(){
							me.isMove = true
						},300)
					},10)
				}
				if(n > 0){
					$('.slide-box').css({transitionDuration:  '300ms', transform: 'translate3d('+(-n*this.liW)+'px, 0px, 0px)'})
					setTimeout(function(){
						$('.slide-box').css({transitionDuration: '0ms', transform: 'translate3d(0px, 0px, 0px)'})
						
						if(n > 1){
							for(var i = 1; i <= n; i++){
								$('.slide-box').append($('.slide-box div:eq(0)'))
							}
						}else{
							$('.slide-box').append($('.slide-box div:eq(0)'))
						}
						setTimeout(function(){
							me.isMove = true
						},10)
					},300)
				}
			}
		},
		autoMove () {
			this.timer = setInterval(this.move.bind(this,this.slideData.num),this.slideData.moveTime)
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