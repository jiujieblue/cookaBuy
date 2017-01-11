<style lang="less">
	@import "../../assets/less/C.less";
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	.sellerClaimSubDataSucc{
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
					}
					>div{
						float: left;
						line-height: 25px;
						padding-top: 60px;
						a{
							padding: 0 5px;
							color: #30c2ff;
						}
					}
				}
			}
		}
	}
</style>

<template>
	<div class="sellerClaimSubDataSucc">
		<sellerClaimStatus :status="3"></sellerClaimStatus>
		<div class="sellerClaimSubDataSucc-details-situation">
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
				<div>
					恭喜您提交成功认领所需资料，我们会在1-3个工作日内完成审核，<br>
					您可以查看<a href="./sellerClaimCond.html#/results">认领情况</a>
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

	    }
	  },
	  mounted () {

	  },
	  methods: {

	  },
	 	components: {
	 		sellerClaimStatus
	 	}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->