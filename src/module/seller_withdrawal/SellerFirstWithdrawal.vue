<style lang="less">
	@import "../../assets/less/C.less";
	.isFirstWithdrawal{
		width: 500px;
		padding: 0 30px;
		margin: 50px auto;
		border: 1px solid #d2d2d2;
		>p{
			padding: 15px 20px;
			border-bottom: 2px solid #fcc505;
			font-size: 18px;
			>link{
				margin-top: -6px;
				font-size: 20px;
				color: #fb5b46;
			}
			>span{
				color: #fcc505;
			}
		}
		>ul{
			>li{
				.clearfix();
				margin: 30px 0;
				>link{
					float: left;
					font-size: 70px;
					color: #c4bebc;
				}
				>ul{
					float: left;
					margin: 10px 0 0 20px;
					>li{
						margin-bottom: 10px;
						color: #989898;
						>a{
							padding-left: 10px;
							color: #fcc505;
						}
					}
				}
			}
		}
	}
</style>

<template>
	<div class="isFirstWithdrawal">
		<p>
			<link rel="stylesheet" class="icon-tishi">
			<span>为保障您账户资金安全，请先做一下设置：</span>
		</p>
		<ul>
			<li>
				<link rel="stylesheet" class="icon-certification">
				<ul>
					<li>您尚未实名认证，请通过<a href="">实名验证>></a></li>
					<li>为您账户资金安全，防止他人冒名提取账户金额。</li>
				</ul>
			</li>
			<li>
				<link rel="stylesheet" class="icon-zhifumima">
				<ul>
					<li>您尚未设置支付密码，请先设置<a href="">支付密码>></a></li>
					<li>支付密码：使用账户余额、资金提现、确认收货时使用</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'
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
	  	
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->