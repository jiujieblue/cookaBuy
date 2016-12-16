<style lang="less">
	.slide{
		width: 960px;
		margin: 0 auto;
		border: 2px solid #ccc;
		overflow: hidden;
		ul{
			position: relative;
			left: 0;
			&:after{
				content: '';
				display: table;
				clear: both;
			}
			li{
				float: left;
				width: 960px;
				img{
					width: 100%;
				}
			}
		}
	}
</style>
<template>
<div>
	<div class="slide" @mouseover="_over" @mouseout="_out">
    <ul>
    	<li>
    		<img src="../../src/assets/images/indexCarousel01.jpg" alt="">
    	</li>
    	<li>
    		<img src="../../src/assets/images/indexCarousel02.jpg" alt="">
    	</li>
    	<li>
    		<img src="../../src/assets/images/indexCarousel03.jpg" alt="">
    	</li>
    	<li>
    		<img src="../../src/assets/images/indexCarousel04.jpg" alt="">
    	</li>
    </ul>
  </div>
  <button @click="move(-1)">shang</button>
	<button @click="move(1)">下</button>
	<button @click="del">删除</button>
</div>
</template>

<script>
	import Vue from 'vue'

	export default{
		data(){
			return {
				liW: 0, // 总移动长度
				totalTime: 1000,
				isMove: true,
				liLength: 0,
				num: 0
			}
		},
	mounted () {
		var me = this
		window.onload = function () {
			var liW = parseInt($('.slide ul li').css('width'))
			$('.slide ul').css({width: liW*$('.slide ul li').css('width').length + 'px'})
			me.liW = liW
			me.liDomList = $('.slide ul li')
			me.liLength = $('.slide ul li').length
		}
		//this.autoMove()
	},
	methods: {
		moveOne (n) {
			this.num += n
			$('.slide ul').css({transform: 'translate3d('+(-this.num*this.liW)+'px, 0px, 0px)'})
		},
		move (n) {
			var me =this
			if(this.isMove){
				this.isMove = false
				// var ulLeft = parseFloat($('.slide ul').css('left'))
				// $('.slide ul').css({left: (ulLeft+n*me.liW)+'px'})
				if(n<0){
					$('.slide ul').prepend($('.slide ul li:eq('+(this.liLength-1)+')')).css({transitionDuration: '0ms', transform: 'translate3d('+(n*this.liW)+'px, 0px, 0px)'})
					setTimeout(function(){
						$('.slide ul').css({transitionDuration: '600ms', transform: 'translate3d(0px, 0px, 0px)'})
						setTimeout(function(){
							me.isMove = true
						},600)
					},10)
				}
				if(n>0){
					$('.slide ul').css({transitionDuration: '600ms', transform: 'translate3d('+(-n*this.liW)+'px, 0px, 0px)'})
					setTimeout(function(){
						$('.slide ul').append($('.slide ul li:eq(0)')).css({transitionDuration: '0ms', transform: 'translate3d(0px, 0px, 0px)'})
						setTimeout(function(){
							me.isMove = true
						},10)
					},600)
				}
			}
		},
		autoMove () {
			console.log(4144)
			var timer2 = setInterval(this.move.bind(this,1),this.totalTime)
		},
		btnX () {
			
		},
		_over () {
			this.statu = false
		},
		_out () {
			this.statu = true
		},
		del () {
			$('.slide ul').prepend($('.slide ul li:eq('+(this.liLength-1)+')')).css({transitionDuration: '0ms', transform: 'translate3d('+(-this.liW)+'px, 0px, 0px)'})
		}
	},
  props: {
  	
  }

	}
</script>