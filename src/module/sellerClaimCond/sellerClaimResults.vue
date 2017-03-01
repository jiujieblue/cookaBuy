<style lang="less">
	@import "../../assets/less/C.less";
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	.sellerClaimResults{
		button{
			outline: none;
		}
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
						min-height: 175px;
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
								&.isClaim{
									margin-left: 115px;
								}
							}
						}
						&:last-child{
							padding: 20px;
							text-align: center;
							font-size: 16px;
							>li{
								&:first-child{
									margin-bottom: 20px;
									>span{
										display: block;
										margin-top: 40px;
									}
									link{
										font-size: 80px;
										color: #30c2ff;
										&.icon-chacha{
											color: red;
										}
										&.icon-shibai{
											color: #ccc;
										}
									}
								}
								&:last-child{
									font-size: 16px;
									a{
										padding-left: 3px;
										color: #30c2ff;
									}
									>button{
										width: 170px;
										height: 35px;
										border: none;
										border-radius: 3px;
										background: #30c2ff;
										color: #fff;
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
				<sellerClaimStatus :status="3"></sellerClaimStatus>
				<div class="sellerClaimResults-details-situation">
					<p>您已申请认领店铺：</p>
					<div>
						<ul>
							<li>
								<img src="../../assets/images/sellerClaimStore.png" alt="店铺小图片">
								<span>认领成功</span>
							</li>
							<li v-if="details1 || status1 >= 1">
								<ul>
									<li>吴江市甜心服饰</li>
									<li>市场：新潮都</li>
									<li>楼层：2F</li>
									<li>档口号：2114</li>
								</ul>
							</li>
						</ul>
						<ul>
							<li>
								<link rel="stylesheet" :class="_reDetails(details1, status1, 'cla')">
								<span v-if="!details1 && status1 < 1">每个商店可以认领两个店铺，有店铺要认领吗？</span>
							</li>
							<li v-html='_reDetails(details1, status1)'></li>
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
							<li :class="{isClaim: !details2 && status2 < 1 }">
								<img src="../../assets/images/sellerClaimStore.png" alt="店铺小图片">
								<span>认领成功</span>
							</li>
							<li v-if="details2 || status2 >= 1">
								<ul>
									<li>吴江市甜心服饰</li>
									<li>市场：新潮都</li>
									<li>楼层：2F</li>
									<li>档口号：2114</li>
								</ul>
							</li>
						</ul>
						<ul>
							<li>
								<link rel="stylesheet" :class="_reDetails(details2, status2, 'cla')">
								<span v-if="!details2 && status2 < 1">每个商店可以认领两个店铺，有店铺要认领吗？</span>
							</li>
							<li v-html='_reDetails(details2, status2)'></li>
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
	    	status2: 0,
	    	details2: null
	    }
	  },
	  methods: {
	  	_reDetails (details, status, cla) {
	  		if(details){
	  			if(details == 's'){
	  				return cla ? 'icon-done' : '恭喜您已认领该店铺，查看我的<a href="#">店铺后台</a>'
	  			}else if(details == 'f'){
	  				return cla ? 'icon-chacha' : '失败原因：身份证照片不清晰。<a href="#">修改资料</a>，再次提交审核'
	  			}else{
	  				return cla ? 'icon-shibai' : '关闭原因：您的店铺已被认领，如有疑问，<a href="#">请咨询客服（400-165542130）</a>，或重新认领'
	  			}
	  		}else{
	  			if(status >= 1){
	  				return cla ? 'icon-but-processing' : '我们会在1-3个工作日内完成审核，请耐心等候！'
	  			}else{
	  				return cla ? '' : '<button onclick="window.open(\'./sellerClaimCond.html#/chooseStore\')">马上认领</button>'
	  			}
	  		}
	  	}
	  },
	 	components: {
	 		sellerClaimStatus
	 	}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->