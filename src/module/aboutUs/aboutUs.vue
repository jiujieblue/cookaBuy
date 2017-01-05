<template>
	<div>
		<headerComponent pageName="aboutUsPage"></headerComponent>
		<div class="container">
			<div class="row">
				<div class="col-md-12 trim-col">
					<div class="aboutus">
						<div class="aboutus-title">
							关于我们 - 柯咔服装网
						</div>
						<div class="aboutus-banner">
							<img src="../../assets/images/haofenghuwaiguanggao.jpg" alt="">
						</div>
						<div class="aboutus-content">
							<div class="aboutus-content-title">柯咔简介</div>
							<div class="aboutus-content-text">
								<p>
									广州市柯咔网络科技有限公司，简称“柯咔网络”，是华南地区线上服饰批发的先驱者。柯咔服装网以国内优势服装货源地为基础，国际化高端人才为基石，立志于打造不受区域限制、让优秀货物流通全国的知名品牌化的电商平台。凭靠毗邻众多大型批发市场的地域优势，拥有大量来自十三行、灏丰、沙河、白马、金马、红棉、长运、新潮都等批发市场的诚信、优秀进驻商家，吸引众多中小服饰企业在柯咔采购、批发优质货物。
								</p>
								<p>
									柯咔服装网致力打造一个为中小服饰企业提供专业化、人性化、高效化服务的在线服饰交易平台，始终秉承“好货源—多优惠—专业服务”的企业经营理念，为客户提供海量货源，各类服饰应有尽有，买家可在网上进行选购、交易，轻松下单，支持商品代发，迅速发货，让用户通过电子商务平台走向更广阔的贸易天地。
								</p>
							</div>
						</div>
					</div>
					<gotop></gotop>
				</div>
			</div>
		</div>
		<footerComponent></footerComponent>
	</div>
</template>

<script>
	import Vue from 'vue'
	import headerComponent from 'components/header'
	import footerComponent from 'components/footer'
	import gotop from 'components/goTop'
	
	export default{
		components:{
			headerComponent,
			footerComponent,
			gotop
		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/aboutUs.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>