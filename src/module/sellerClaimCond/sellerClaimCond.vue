<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/sellerClaimCond.less';

	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
	  opacity: 0
	}

</style>

<template>
	<div id="sellerClaimCond">
		<SellerCenterHeader sellerInfo="claim" :isMid="false"></SellerCenterHeader>
		<div class="sellerClaimCond container">
			<div class="sellerClaimCond-banner">
				<img src="../../assets/images/sellerClaimBanner.jpg" alt="欢迎来到店铺认领">
				<div>
					<p>欢迎来到店铺认领！</p>
					<p>认领成功之后，立即成为柯咔商家</p>
				</div>
			</div>
			<div class="sellerClaimCond-privilege">
				<p>立即认领，马上享受以下商家特权</p>
				<ul>
					<li>
						<img src="../../assets/images/privilege1.jpg" alt="特权1">
					</li>
					<li>
						<img src="../../assets/images/privilege1.jpg" alt="特权1">
					</li>
					<li>
						<img src="../../assets/images/privilege1.jpg" alt="特权1">
					</li>
					<li>
						<img src="../../assets/images/privilege1.jpg" alt="特权1">
					</li>
				</ul>
			</div>
  			<transition name="fade">
				<router-view v-show="show"></router-view>
  			</transition>
		</div>
		<footerComponent></footerComponent>
	</div>
</template>

<script>
	import Vue from 'vue'
	import SellerCenterHeader from 'components/SellerCenterHeader'
	import footerComponent from 'components/footer'
	import SellerCenterSideBar from 'components/SellerCenterSideBar'

	export default {
	  data () {
	    return {
	    	status1: 3,
	    	details1: 1,
	    	status2: 1,
	    	details2: null,
	    	show: true
	    }
	  },
	  methods: {
	  	_details1 (details) {
	  		return details == 0 ? '失败原因：身份证照片不清晰 <a href="#">修改资料</a>，再次提交' : details == 1 ? '关闭原因：您的店铺已被认领，如有疑问，请<a href="#">咨询客服（400-165542130）</a>或重新认领' : '恭喜您已认领该店铺，查看我的<a href="#">店铺后台</a>'
	  	}
	  },
	 	components: {
	 		footerComponent,
	 		SellerCenterHeader,
	 		SellerCenterSideBar
	 	}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->