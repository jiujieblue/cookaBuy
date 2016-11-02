<template>
	<div class="daifa-side">
		<p>交易中心</p>
		<ul>
			<li><p>我的订单</p><span class="icon-xianghou"></span></li>
			<li><p>我的对账单</p><span class="icon-xianghou"></span></li>
		</ul>
		<p>我的钱包</p>
		<ul>	
			<li><p>钱包余额</p><span class="icon-xianghou"></span></li>
			<li><p>交易明细</p><span class="icon-xianghou"></span></li>
			<li><p>提现</p><span class="icon-xianghou"></span></li>
			<li><p>设置支付密码</p><span class="icon-xianghou"></span></li>
			<li><p>银行卡管理</p><span class="icon-xianghou"></span></li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'

	export default{
		data(){
			return{
				menuN:''
			}
		},
		components:{

		},
		methods:{
			
		},
		mounted(){
			var me=this;
			window.onload=function(){
			$('.daifa-side>ul>li').click(function(e){
				e.stopPropagation();
				$('.daifa-side>ul>li').css({
					'background':'',
					'color': ''
				});
				$('.daifa-side>ul>li span').css('display','none');
				$(this).css({
					'background':'#e7e7e7',
					'color': '#000'
				});
				$(this).children().css('display','inline-block');
				this.menuN=e.target.textContent
				console.log(this.menuN)
			})
		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/daifa_sidebar.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>