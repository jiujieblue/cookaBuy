<template>
	<div>
		<oh></oh>
		<div class="orderconfirm">
			<div class="container">
				<ri></ri>
				<form action="">
					<od></od>
					<cp style="display:none"></cp>
					<account></account>
				</form>
			</div>
		</div>
		<fc></fc>
	</div>
</template>

<script>

	import Vue from 'vue'
	const fto = require('form_to_object')
	const VueResource = require('vue-resource')
	Vue.use(fto)
	Vue.use(VueResource)

	import oh from 'components/OrderHeader'
	import fc from 'components/footer'
	import ri from './receiptInfo.vue'
	import od from './orderDetail.vue'
	import cp from './coupon.vue'
	import account from './account.vue'

	export default{
		data(){
			return{

			}
		},
		components:{
			oh,
			fc,
			ri,
			od,
			cp,
			account
		},
		mothods:{
			
		},
		mounted(){

		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/orderconfirm.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>