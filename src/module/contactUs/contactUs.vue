<template>
	<div>
		<headerComponent pageName="contactusPage"></headerComponent>
		<div class="container">
			<div class="row">
				<div class="col-md-12 trim-col">
					<div class="contactus">
						<div class="contactus-title">
							联系我们
						</div>
						<div class="contactus-content">
							<div class="contactus-content-text">
								<p>
									办公地址：广州市天河区华夏路28号富力盈信1512
									<br>
									QQ：2100505046
									<br>
									客服热线：400-8868-900
									<br>
									服务时间：周一至周五9:00-18:00
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
	@import "../../assets/less/contactus.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>