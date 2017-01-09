<style lang="less">
	@import "../../assets/less/C.less";
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';

	.sellerClaimStatus{
		padding: 40px 70px;
		background: #fff;
		color: #0f5c7c;
		>ul{
			.clearfix();
			>li{
				float: left;
				width: 153px;
				text-align: center;
				font-size: 18px;
				>img{
					margin-bottom: 15px;
				}
				&.waiting{
					color: #8fc4da;
				}
			}
		}
	}
</style>

<template>
	<div class="sellerClaimStatus">
		<ul>
			<li :class="{waiting: status < 1}">
				<img src="../../assets/images/sellerClaimstatu10.png" v-if="status >= 1" alt="选择店铺成功">
				<img src="../../assets/images/sellerClaimstatu11.png" v-else alt="选择店铺未成功">
				1、选择店铺
			</li>
			<li :class="{waiting: status < 2}">
				<img src="../../assets/images/sellerClaimstatu20.png" v-if="status >= 2" alt="提交资料成功">
				<img src="../../assets/images/sellerClaimstatu21.png" v-else alt="提交资料未成功">
				2、提交资料
			</li>
			<li :class="{waiting: status < 3}">
				<img src="../../assets/images/sellerClaimstatu20.png" v-if="status >= 3" alt="等待审核反馈成功">
				<img src="../../assets/images/sellerClaimstatu21.png" v-else alt="等待审核反馈未成功">
				3、等待审核反馈
			</li>
			<li :class="{waiting: status < 4}">
				<img src="../../assets/images/sellerClaimstatu30.png" v-if="status >= 4" alt="完成">
				<img src="../../assets/images/sellerClaimstatu31.png" v-else alt="未完成">
				4、完成
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
	  props: {
	  	status: {
	  		type: Number,
	  		default: 0
	  	}
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->