<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/BuyFootprint.less';
</style>

<template>
<div id='buyFootprint'>
	<BuyerCenterHeader></BuyerCenterHeader>
	<div class='container buyFootprint'>
			<div class="row">
				<div class="col-md-2">
					<BuyerCenterSideBar></BuyerCenterSideBar>
				</div>
				<div class="col-md-10 buyFootprint-right">
					<div class="row">
						<div class="buyFootprint-right-title">
							<span>当前位置：其他></span>我的足迹
						</div>
						<div class="buyFootprint-right-container">
							<div class="buyFootprint-right-container-nav">
								<ul>
									<li class="active" @click="_footNav($event,0)">全部 (12)</li>
									<li @click="_footNav($event,1)">免邮 (22)</li>
									<li @click="_footNav($event,2)">优惠 (0)</li>
								</ul>
							</div>
							<div class="buyFootprint-right-container-list">
								<ul>
									<li>
										<input type="radio" id="allSel">
										<label for="allSel">全选</label>
										<a href=""><link rel="stylesheet" class="icon-shanchu">删除</a>
									</li>
									<li>您有<span>2</span>个失效商品<span>全部删除</span></li>
								</ul>
								<div class="buyFootprint-right-container-list-main">
									<ul>
										<li>
											<span>2016-08-30</span>浏览了<b>25</b>件宝贝
										</li>
										<li>
											<ul>
												<li>
													<a href=""><img src="../../assets/images/my-fav.jpg" alt="足迹图片"></a>
													<a>茵曼女装棉质性感红色T恤热销...</a>
													<b>￥520.00</b>
												</li>
												<li>
													<a href=""><img src="../../assets/images/my-fav.jpg" alt="足迹图片"></a>
													<a>茵曼女装棉质性感红色T恤热销...</a>
													<b>￥520.00</b>
												</li>
												<li>
													<a href=""><img src="../../assets/images/my-fav.jpg" alt="足迹图片"></a>
													<a>茵曼女装棉质性感红色T恤热销...</a>
													<b>￥520.00</b>
												</li>
												<li>
													<a href=""><img src="../../assets/images/my-fav.jpg" alt="足迹图片"></a>
													<a>茵曼女装棉质性感红色T恤热销...</a>
													<b>￥520.00</b>
												</li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<CkPagination pages=5 prePage=0 pageNum=1 nextPage=2></CkPagination>
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
	import CkPagination from 'components/CkPagination'
	export default {
	  data () {
	    return {
	    	status: 2,
	    	cardList: [
	    		{
	    			n: 'aa',
	    			list: [
	    				11,12,13,14,15,16
	    			]
	    		},
	    		{
	    			n: 'bb',
	    			list: [
	    				21,22,23,24,25,26
	    			]
	    		}
	    	]
	    }
	  },
	  mounted () {

	  },
	  methods: {
	  	_footNav (e,n) {
	  		var el = e.target
	  		$(el).addClass('active').siblings('.active').removeClass('active')
	  	}
	  },
	  components: {
	  	BuyerCenterHeader,
	  	footerComponent,
	  	BuyerCenterSideBar,
	  	CkPagination
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->