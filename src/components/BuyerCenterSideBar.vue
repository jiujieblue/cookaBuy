<template>
	<div class="buyer-side">
		<p>账号管理</p>
		<ul>
			<li><p>个人资料</p><span class="icon-xianghou"></span></li>
			<li><p>收货地址</p><span class="icon-xianghou"></span></li>
			<li><p>账号安全</p><span class="icon-xianghou"></span></li>
		</ul>
		<p>交易中心</p>
		<ul>	
			<li><p>我的订单</p><span class="icon-xianghou"></span></li>
			<li><p>快捷支付单</p><span class="icon-xianghou"></span></li>
			<li><p>关注店铺</p><span class="icon-xianghou"></span></li>
			<li><p>收藏商品</p><span class="icon-xianghou"></span></li>
			<li><p>优惠券</p><span class="icon-xianghou"></span></li>
			<li><p>评价</p><span class="icon-xianghou"></span></li>
		</ul>
		<p>我的钱包</p>
		<ul>
			<li><p>钱包提现</p><span class="icon-xianghou"></span></li>
			<li><p>提现</p><span class="icon-xianghou"></span></li>
			<li><p>银行卡管理</p><span class="icon-xianghou"></span></li>
		</ul>
		<p>一键同步</p>
		<ul>	
			<li><p>同步记录</p><span class="icon-xianghou"></span></li>
		</ul>
		<p>其他</p>
		<ul>
			<li><p>我的足迹</p><span class="icon-xianghou"></span></li>
			<li><p>公告信息</p><span class="icon-xianghou"></span></li>
			<li><p>意见反馈</p><span class="icon-xianghou"></span></li>
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
		methods:{
			
		},
		mounted(){
			var me = this;
			window.onload=function(){
				$('.buyer-side>ul>li').click(function(e){
					e.stopPropagation();
					$('.buyer-side>ul>li').css({
						'background':'',
						'color': ''
					});
					$('.buyer-side>ul>li span').css('display','none');
					$(this).css({
						'background':'#e7e7e7',
						'color': '#000'
					});
					$(this).children().css('display','inline-block');
					me.menuN=e.target.textContent;
					console.log(me.menuN)
				})

			}
		},
		components:{
		}
	}
</script>

<style lang="less">
	@import '../assets/less/buyercenter_sidebar.less';
	@import '../assets/css/icons.css';
	@import '../assets/css/bootstrap.css';
	@import "../assets/less/public.less";
	@import "../assets/less/C.less";
</style>