<template>
	<div class="coupon-box">
		<div class="coupon-box-header">
			<span>商品优惠券</span>
		</div>
		<div class="coupon-box-body">
			<div class="coupondiv" @click="UseCoupon">
				<i :class="['icon-moren_radio',IsUseCoupon?'use':'unuse']"></i>
				<div class="couponblock">
					<div>
						<img src="../../assets/images/coupon_boder.png" height="101" width="12" alt="">
					</div>
					<div>
						<span>¥</span>
						<span>10</span>
						<span>满100减10元</span>
					</div>
					<div>
						<span>全店铺满100减10元</span>
						<span>2016.05.11-06.10</span>
					</div>
				</div>
			</div>
			<div class="coupondiv">
				<i class="icon-moren_radio"></i>
				<div class="couponblock">
					<div>
						<img src="../../assets/images/coupon_boder.png" height="101" width="12" alt="">
					</div>
					<div>
						<span>¥</span>
						<span>20</span>
						<span>满100减10元</span>
					</div>
					<div>
						<span>全店铺满100减10元</span>
						<span>2016.05.11-06.10</span>
					</div>
				</div>
			</div>
			<div class="coupondiv">
				<i class="icon-moren_radio" style="display:none"></i>
				<i class="icon-disable_radio"></i>
				<div class="disable_couponblock">
					<div>
						<span>¥</span>
						<span>40</span>
						<span>满100减10元</span>
					</div>
					<div>
						<span>全店铺满100减10元</span>
						<span>2016.05.11-06.10</span>
					</div>
				</div>
			</div>
		</div>
		<div class="clearfix"></div>
		<div class="coupon-box-footer">
			<span>金额抵用：</span><span>¥10.00元</span>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default{
		data(){
			return{
				IsUseCoupon:true
			}
		},
		components:{

		},
		methods:{
			UseCoupon:function(){
				this.IsUseCoupon = !this.IsUseCoupon
				console.log(this.IsUseCoupon)
			}
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