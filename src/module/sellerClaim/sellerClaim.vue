<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/sellerClaim.less';
</style>

<template>
	<div id="sellerClaim">
		<SellerCenterHeader sellerInfo="claim"></SellerCenterHeader>
		<div class="sellerClaim">
			<div class="sellerClaim-main">
				<p>欢迎来到店铺认领！</p>
				<p>认领成功之后，立即成为柯咔商家</p>
				<div>
					<button onclick="window.open('./sellerClaimCond.html#/chooseStore')">我要认领</button>
					<button onclick="window.open('./sellerClaimCond.html#/results')">认领情况</button>
				</div>
			</div>
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
	     
	    }
	  },
	  methods: {
	  	
	  },
	 	components: {
	 		footerComponent,
	 		SellerCenterHeader,
	 		SellerCenterSideBar
	 	}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->