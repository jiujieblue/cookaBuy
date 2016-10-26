<template>
	<div class="buyer-header">
		<div class="buyer-header-top">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<ul>
							<li>
								您好，<a href="#">12345612345</a>
							</li>
							<li>
								<a href="#">进货单(0)</a>
							</li>
							<li>
								<a href="#">收藏夹</a>
							</li>
							<li>
								<a href="#">我是商家</a>
							</li>
							<li>
								<a href="#">商家入驻</a>
							</li>
						</ul>
					</div>					
				</div>
			</div>
		</div>
		<div class="buyer-header-mid">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="buyer-header-mid-box">
							<div>
								<a><span class="icon-cooka"></span></a>								
							</div>
							<div>用户中心</div>
							<div>我是买家</div>
							<div class="buyer-info">
								<span>HI~12345612345</span>
								<img src="../assets/images/detail-look.jpg"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import BCH from 'components/BuyerCenterHeader'

	export default{
		data(){
			return{
			}
		},
		methods:{
			
		},
		mounted(){

		},
		components:{
			BCH
		}
	}
</script>

<style lang="less">
	@import '../assets/less/buyercenter_header.less';
	@import '../assets/css/icons.css';
	@import '../assets/css/bootstrap.css';
	@import "../assets/less/public.less";
	@import "../assets/less/C.less";
</style>