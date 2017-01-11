<template>
	<div class="seller-header">
		<div class="seller-header-top">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<a style="display: none" href="./sellerClaim.html" target="_blank" class="sellerclaim">店铺认领</a>
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
		<div class="seller-header-mid" v-if="isMid">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="seller-header-mid-box">
							<div>
								<a>
									<img src="../assets/images/logo.svg" width="150" alt="">
								</a>								
							</div>
							<div v-if="sellerInfo != 'claim'">
								<div>用户中心</div>
								<div>我是商家</div>
							</div>
							<div v-if="sellerInfo == 'claim'" class="claim">
								店铺认领
							</div>
							<div v-if="sellerInfo == 'claim'" class="feedback">
								<a href="#">公告信息</a>
								<a href="#">意见反馈</a>
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
		},
		props: {
			sellerInfo: {
				default: ''
			},
			isMid: {
				type: Boolean,
				default: true
			}
		}
	}
</script>

<style lang="less">
	@import '../assets/less/sellercenter_header.less';
	@import '../assets/css/icons.css';
	@import '../assets/css/bootstrap.css';
	@import "../assets/less/public.less";
	@import "../assets/less/C.less";
</style>