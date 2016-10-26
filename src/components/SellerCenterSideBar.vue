<template>
	<div>
		<div class="seller-side">
			<p>我是商家</p>
			<ul class="shoppingup-menu-shop">
				<li><p>商家资料</p><span class="icon-xianghou"></span></li>
				<li><p>商家认证</p><span class="icon-xianghou"></span></li>
				<li><p>子账户管理</p><span class="icon-xianghou"></span></li>
				<li><p>账户安全</p><span class="icon-xianghou"></span></li>
			</ul>
			<p>商品管理</p>
			<ul class="shoppingup-menu-manage">	
				<li><p>一键同步</p><span class="icon-xianghou"></span></li>
				<li><p>商品上传</p><span class="icon-xianghou"></span></li>
				<li><p>草稿箱</p><span class="icon-xianghou"></span></li>
				<li><p>在售/停售商品</p><span class="icon-xianghou"></span></li>
			</ul>
			<p>物流管理</p>
			<ul class="shoppingup-menu-trans">
				<li><p>运费模块设置</p><span class="icon-xianghou"></span></li>
			</ul>
			<p>交易中心</p>
			<ul class="shoppingup-menu-jiaoyi">	
				<li><p>我的订单</p><span class="icon-xianghou"></span></li>
				<li><p>快捷支付单</p><span class="icon-xianghou"></span></li>
				<li><p>会员管理</p><span class="icon-xianghou"></span></li>
			</ul>
			<p>我的钱包</p>
			<ul class="shoppingup-menu-purse">
				<li><p>资产概览</p><span class="icon-xianghou"></span></li>
				<li><p>交易明细</p><span class="icon-xianghou"></span></li>
				<li><p>提现</p><span class="icon-xianghou"></span></li>
				<li><p>银行卡设置</p><span class="icon-xianghou"></span></li>
			</ul>
			<p>其他</p>
			<ul class="shoppingup-menu-oth">
				<li><p>公告信息</p><span class="icon-xianghou"></span></li>
				<li><p>帮助中心</p><span class="icon-xianghou"></span></li>
			</ul>
		</div>
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
				$('.seller-side>ul>li').click(function(e){
					e.stopPropagation();
					$('.seller-side>ul>li').css({
						'background':'',
						'color': ''
					});
					$('.seller-side>ul>li span').css('display','none');
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
	@import '../assets/less/sellercenter_sidebar.less';
	@import '../assets/css/icons.css';
	@import '../assets/css/bootstrap.css';
	@import "../assets/less/public.less";
	@import "../assets/less/C.less";
</style>