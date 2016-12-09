<template>
	<div class="header" :style="{marginBottom:this.pageName == 'detailPage'?'0px':'20px'}">
		<div class="header-top">
			<div class="container">
				<div class="row">
					<div class="col-md-2 trim-col">
						你好，欢迎光临柯咔商城！
					</div>
					<div class="col-md-3 trim-col" style="display: none;">
						<div class="text-left">
							<a href="#" class="header-top-link">
								请登录
							</a>
							<span class="header-top-sep">|</span>
							<a href="#" class="header-top-link">
								免费注册
							</a>
						</div>
					</div>
					<div class="col-md-7" style="display: none;">
						<div class="text-right">
							<a href="#" class="header-top-link" style="margin-right: 30px;">
								商家入驻
							</a>
							<a href="#" class="header-top-link">
								收藏本站
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="header-inner" :style="{backgroundColor:this.pageName == 'detailPage'?'#FFFFFF':''}">
			<div class="container">
				<div class="row">
					<div class="col-md-2 trim-left">
						<div class="header-logo">
							<a href="index.html"><img src="../assets/images/logo.svg" width="150"/></a>
						</div>
					</div>
					<div class="col-md-1"></div>
					<div class="col-md-6">
						<CkSearch @subKeyword="_subkey" :keyword="keyword"></CkSearch>
					</div>
					<div class="col-md-1"></div>
					<div class="col-md-2 trim-right">
						<div class="header-qrcode" style="display: none">
							<img src="../assets/images/qrcode.jpg" width="100" height="100"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="header-nav" v-if="this.pageName != 'detailPage'">
			<div class="header-nav-inner">
				<span href="#" class="header-category-all">
					<a href="#"> 全部商品分类 </a><span class="icon-zhankai"/>

					<ul class="header-category-lv-1">
						<li>
							<a href="#">一级类目 <span class="icon-xianghou"/></a>
							<ul class="header-category-lv-2">
								<li>
									<a href="#">二级类目</a>
									<ul class="header-category-lv-3">
										<li><a href="#">三级类目</a></li>
										<li><a href="#">三级类目</a></li>
									</ul>
								</li>
								<li>
									<a href="#">二级类目</a>
									<ul class="header-category-lv-3">
										<li><a href="#">三级类目</a></li>
										<li><a href="#">三级类目</a></li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">一级类目 <span class="icon-xianghou"/></a>
							<ul class="header-category-lv-2">
								<li>
									<a href="#">二级类目</a>
									<ul class="header-category-lv-3">
										<li><a href="#">三级类目</a></li>
										<li><a href="#">三级类目</a></li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</span>

				<ul class="header-nav-items">
					<li class="header-nav-item"><a href="./index.html">首页</a></li>
					<li class="header-nav-item"><a href="./hotSale.html">爆款专区</a></li>
					<li class="header-nav-item"><a href="./visitingMarket.html">逛市场</a></li>
					<li class="header-nav-item" style="display:none"><a href="#">我的关注</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import CkSearch from 'components/CkSearch'

export default{
	props:['pageName'],
	components:{
		CkSearch
	},
	methods: {
		_subkey (val) {
			this.$emit('subKeyword',val)
		}
	},
	props: {
		keyword: {
			default: ''
		}
	}
}
</script>
<style lang="less">
	@import '../assets/less/header.less';
	@import '../assets/css/icons.css';
	@import '../assets/css/bootstrap.css';
</style>