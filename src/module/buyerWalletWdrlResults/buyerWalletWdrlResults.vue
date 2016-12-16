<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/buyerWalletWdrlResults.less';
</style>

<template>
<div id='buyerWalletWdrlResults'>
	<BuyerCenterHeader></BuyerCenterHeader>
	<div class='container'>
			<div class="row">
				<div class="col-md-2">
					<BuyerCenterSideBar></BuyerCenterSideBar>
				</div>
				<div class="col-md-10">
					<div class="buyerWalletWdrlResults">
						<div class="buyerWalletWdrlResults-title">
							<span>当前位置：我的钱包 > </span>提现结果</p>
						</div>
						<p>提现记录</p>
						<div class="buyerWalletWdrlResults-status">
							<div>
								<link :class="[status==1?'icon-but-processing':status==2?'icon-success':'icon-shibai']" />
								{{ status == 1? '处理中': status == 2? '提现成功' : '提现失败'}}
							</div>
							<ul>
								<li>
									<span>申请时间：</span>2016-07-01<i class="em"></i>16 : 58
								</li>
								<li>
									<span>提 现 到：</span>***************5155<i class="em"></i>科比
								</li>
								<li>
									<span>持 卡 人：</span>科比
								</li>
								<li v-if="status == 1">
									<span>到账时间：</span>预计1-3天
								</li>
								<li v-if="status == 2">
									<span>到账时间：</span>2016-07-01<i class="em"></i>16 : 58
								</li>
								<li v-if="status == 3">
									<span>失败原因：</span>
									<ul>
										<li>1、您绑定的银行卡是否正确填写卡号、姓名及开卡行；</li>
										<li>2、确定您的银行卡是否处于正常使用状态；</li>
										<li>3、如有疑问，请联系柯咔客服平台。</li>
									</ul>
								</li>
							</ul>
							<p><button>返<span class="em"></span>回</button></p>
						</div>
					</div>
				</div>
			</div>
 	</div>
	<footerComponent></footerComponent>
</div>
</template>

<script>
	import Vue from 'vue'
	import BuyerCenterHeader from 'components/BuyerCenterHeader'
	import footerComponent from 'components/footer'
	import BuyerCenterSideBar from 'components/BuyerCenterSideBar'
	export default {
	  data () {
	    return {
	    	status: 2
	    }
	  },
	  mounted () {

	  },
	  components: {
	  	BuyerCenterHeader,
	  	footerComponent,
	  	BuyerCenterSideBar
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->