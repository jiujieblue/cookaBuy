<style lang="less">
	@import "../../assets/less/C.less";
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	.sellerClaimResults{
		&-details{
			margin: 10px 0;
			&-situation{
				margin-top: 2px;
				padding: 40px 70px;
				background: #fff;
				>p{
					margin-bottom: 20px;
					padding-left: 5px;
					font-size: 18px;
				}
				>div{
					.clearfix();
					>ul{
						float: left;
						width: 40%;
						&:first-child{
							padding: 30px 50px;
							margin-right: 60px;
							border: 1px solid #30c2ff;
							border-radius: 2px;
							>li{
								float: left;
								&:first-child{
									>span{
										display: block;
										margin-top: 20px;
										background: #30c2ff;
										border-radius: 2px;
										color: #fff;
										font-size: 12px;
										text-align: center;
									}
								}
								&:last-child{
									margin-left: 50px;
									>ul{
										li{
											margin-bottom: 5px;
											color: #656565;
											&:first-child{
												margin-bottom: 15px;
												font-size: 16px;
												color: #0f5c7c;
											}
										}
									}
								}
							}
						}
						&:last-child{
							padding: 20px;
							text-align: center;
							>li{
								&:first-child{
									margin-bottom: 20px;
									link{
										font-size: 80px;
										&.icon-shibai2{
											color: red;
										}
										//color: #30c2ff;
									}
								}
								&:last-child{
									font-size: 16px;
									a{
										padding-left: 3px;
										color: #30c2ff;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>

<template>
	<div id="sellerClaimResults">
			<div class="sellerClaimResults-details">
				<sellerClaimStatus :status="2"></sellerClaimStatus>
				<div class="sellerClaimResults-details-situation">
					<p>您已申请认领店铺：</p>
					<div>
						<ul>
							<li>
								<img src="../../assets/images/sellerClaimStore.png" alt="店铺小图片">
								<span>认领成功</span>
							</li>
							<li>
								<ul>
									<li>吴江市甜心服饰</li>
									<li>市场：新潮都</li>
									<li>楼层：2F</li>
									<li>档口号：2114</li>
								</ul>
							</li>
						</ul>
						<ul v-if="!details1">
							<li>
								<link rel="stylesheet" class="icon-done">
							</li>
							<li>恭喜您已认领该店铺，查看我的<a href="#">店铺后台</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="sellerClaimResults-details">
				<sellerClaimStatus :status="2"></sellerClaimStatus>
				<div class="sellerClaimResults-details-situation">
					<p>您已申请认领店铺：</p>
					<div>
						<ul>
							<li>
								<img src="../../assets/images/sellerClaimStore.png" alt="店铺小图片">
								<span>认领成功</span>
							</li>
							<li>
								<ul>
									<li>吴江市甜心服饰</li>
									<li>市场：新潮都</li>
									<li>楼层：2F</li>
									<li>档口号：2114</li>
								</ul>
							</li>
						</ul>
						<ul v-if="!details2">
							<li>
								<link rel="stylesheet" class="icon-done">
							</li>
							<li>恭喜您已认领该店铺，查看我的<a href="#">店铺后台</a></li>
						</ul>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import sellerClaimStatus from './sellerClaimStatus'
	export default {
	  data () {
	    return {
	    	status1: 3,
	    	details1: null,
	    	status2: 1,
	    	details2: null
	    }
	  },
	  methods: {
	  	
	  },
	 	components: {
	 		sellerClaimStatus
	 	}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->