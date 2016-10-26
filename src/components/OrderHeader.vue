<template>
	<div class="orderheader">
		<div class="orderheader-top">
			<div class="container">
				<ul class="minbar">
					<li><div><a href="">你好，12345678901</a></div></li>
					<li><div><a href="">进货单</a></div></li>
					<li><div><a href="">收藏夹</a></div></li>
					<li><div><a href="">我是商家</a></div></li>
					<li><div><a href="">商家入驻</a></div></li>
					<li><div><a href="">收藏本站</a></div></li>
				</ul>
			</div>
		</div>
		<div class="orderheader-inner">
			<div class="container">
				<div class="row">
					<div class="col-md-2">
						<div class="orderheader-logo">
							<img src="../assets/images/logo.svg" width="150"/>
						</div>
					</div>
					<div class="col-md-10">
						<div class="stepbox">
							<div><span>1</span></div>
							<div class="stepbox-line"></div>
							<div><span>1.进货单</span></div>
							<div><span>2</span></div>
							<div class="stepbox-line"></div>
							<div><span>2.填写核对订单信息</span></div>
							<div><span>3</span></div>
							<div class="stepbox-line"></div>
							<div><span>3.在线支付</span></div>
							<div><span class="icon-check"></span></div>
							<div><span>4.完成购买</span></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'

export default{
	components:{
	}
}
</script>

<style lang="less">
	@import '../assets/less/order_header.less';
	@import '../assets/css/icons.css';
	@import '../assets/css/bootstrap.css';
</style>