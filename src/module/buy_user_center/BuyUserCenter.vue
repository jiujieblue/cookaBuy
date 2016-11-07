<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/BuyUserCenter.less';
</style>

<template>
<div id='buyUserCenter'>
	<BuyerCenterHeader></BuyerCenterHeader>
	<div class="container">
		<div class="row">
			<div class="col-md-2">
				<BuyerCenterSideBar></BuyerCenterSideBar>
			</div>
			<div class="col-md-10 userCenter">
				<div class="row userCenter-top">
					<div class="userCenter-top-info">
						<a href="">
							<img src="../../assets/images/user.gif" alt="用户头像">
						</a>
						<ul>
							<li>郑思远（13760636639）</li>
							<li>
								<span :class="[ isPhoneSet? 'icon-shouji2' : 'icon-shouji1']">
									<span class="path1"></span>
									<span class="path2"></span>
									<span class="path3"></span>
								</span>
								手机{{ isPhoneSet? '已':'未' }}设置
								<span :class="[ isEmailSet? 'icon-youxiang2' : 'icon-youxiang1']">
									<span class="path1"></span>
									<span class="path2"></span>
									<span class="path3"></span>
								</span>
								邮箱{{ isEmailSet? '已':'未' }}设置
								<span :class="[ isPasswordSet? 'icon-mima2' : 'icon-mima1']">
									<span class="path1"></span>
									<span class="path2"></span>
									<span class="path3"></span>
								</span>
								支付密码{{ isPasswordSet? '已':'未' }}设置
							</li>
							<li>
								余额（元）：<span>￥1000.00</span>&nbsp;&nbsp;&nbsp;&nbsp;
								优惠券：共计<span>0</span>张
							</li>
						</ul>
						<p>
							上次登录：2016-08-22 15:25:05
						</p>
					</div>
					<div class="userCenter-top-announcement">
						<p>
							<span>NEW</span>最心公告：<span class="icon-more"></span>
						</p>
						<ul :class="[ isannouncements ? '': 'isAnnouncement' ]">
							<li class="noAnnouncements" v-if="!isannouncements">
								<img src="../../assets/images/announcement.png" alt="暂无公共">
							</li>
							<li v-for="(announcement,index) in lilimit">
								<i></i>
								<a href="">{{ announcement.title }}</a>
								<p>{{ announcement.date }}</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="row userCenter-myorder">
					<ul class="userCenter-myorder-nav">
						<li><span class="icon-wodedingdan"></span>我的订单</li>
						<li class="active" @click="_orderNav">代付款（22）</li>
						<li @click="_orderNav">代发货（0）</li>
						<li @click="_orderNav">待确认收货（0）</li>
						<li @click="_orderNav">待评价（0）</li>
						<li><a href="">查看更多 ></a></li>
					</ul>
					<div class="userCenter-myorder-container">
						<div class="userCenter-empty" v-if="!isMyorder">
							<img src="../../assets/images/dingdan.png" alt="">
							<p>暂无相关订单记录</p>
						</div>
						<ul v-if="isMyorder">
							<li>
								<p><span>订单号</span>1554456464611</p>
								<ul>
									<li>
										<a href=""><img src="../../assets/images/cart-show.jpg" alt="商品图片"></a>
										<ul>
											<li><b>$2555.00</b>含运费（￥22.00）</li>
											<li>共1款；合计5件</li>
										</ul>
									</li>
									<li>
										<ul>
											<li>您已下单，待完成付款</li>
											<li>2016-08-31&nbsp;&nbsp;14:31:52 <a href="">查看详情</a></li>
										</ul>
									</li>
									<li>
										<button>马上付款</button>
									</li>
								</ul>
							</li>
							<li>
								<p><span>订单号</span>1554456464611</p>
								<ul>
									<li>
										<a href=""><img src="../../assets/images/cart-show.jpg" alt="商品图片"></a>
										<ul>
											<li><b>$2555.00</b>含运费（￥22.00）</li>
											<li>共1款；合计5件</li>
										</ul>
									</li>
									<li>
										<ul>
											<li>您已下单，待完成付款</li>
											<li>2016-08-31&nbsp;&nbsp;14:31:52 <a href="">查看详情</a></li>
										</ul>
									</li>
									<li>
										<button>马上付款</button>
									</li>
								</ul>
							</li>
							<li>
								<p><span>订单号</span>1554456464611</p>
								<ul>
									<li>
										<a href=""><img src="../../assets/images/cart-show.jpg" alt="商品图片"></a>
										<ul>
											<li><b>$2555.00</b>含运费（￥22.00）</li>
											<li>共1款；合计5件</li>
										</ul>
									</li>
									<li>
										<ul>
											<li>您已下单，待完成付款</li>
											<li>2016-08-31&nbsp;&nbsp;14:31:52 <a href="">查看详情</a></li>
										</ul>
									</li>
									<li>
										<button>马上付款</button>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<div class="row userCenter-productcollection public">
					<p class="public-nav">
						<span class="icon-shoucang"></span><span>商品收藏</span>
						<a href="">查看所有商品收藏(5) ></a>
					</p>
					<div class="userCenter-empty" v-if="!productcollection">
						<img src="../../assets/images/shoucang.png" alt="">
						<p>
							您还没有收藏喜欢的商品<br/>
							快去商城逛逛吧~
						</p>
					</div>
					<ul class="public-container" v-if="productcollection">
						<li>
							<a href=""><img src="../../assets/images/shoucan.gif" alt="商品收藏图片"></a>
							<p>￥220.00~230.00</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/shoucan.gif" alt="商品收藏图片"></a>
							<p>￥220.00~230.00</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/shoucan.gif" alt="商品收藏图片"></a>
							<p>￥220.00~230.00</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/shoucan.gif" alt="商品收藏图片"></a>
							<p>￥220.00~230.00</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/shoucan.gif" alt="商品收藏图片"></a>
							<p>￥220.00~230.00</p>
						</li>
						<li>
							<a href=""><img src="../../assets/images/shoucan.gif" alt="商品收藏图片"></a>
							<p>￥220.00~230.00</p>
						</li>
					</ul>
				</div>
				<div class="row userCenter-storeFocus public">
					<p class="public-nav">
						<span class="icon-dianpu"></span><span>店铺关注</span>
						<a href="">近期上新店铺(2) ></a>
					</p>
					<div class="userCenter-empty" v-if="!storeFocus">
						<img src="../../assets/images/dianpu.png" alt="">
						<p>
							您还没有关注过店铺<br/>
							快去逛逛吧~
						</p>
					</div>
					<ul class="public-container" v-if="storeFocus">
						<li>
							<a href="">
								<b>SHOP</b>
								<img src="../../assets/images/shoucan.gif" alt="商品收藏图片">
								<span>上新255件</span>
							</a>
							<p>￥220.00~230.00</p>
						</li>
						<li>
							<a href="">
								<b>SHOP</b>
								<img src="../../assets/images/shoucan.gif" alt="商品收藏图片">
								<span>上新255件</span>
							</a>
							<p>￥220.00~230.00</p>
						</li>
						<li>
							<a href="">
								<b>SHOP</b>
								<img src="../../assets/images/shoucan.gif" alt="商品收藏图片">
								<span>上新255件</span>
							</a>
							<p>￥220.00~230.00</p>
						</li>
						<li>
							<a href="">
								<b>SHOP</b>
								<img src="../../assets/images/shoucan.gif" alt="商品收藏图片">
								<span>上新255件</span>
							</a>
							<p>￥220.00~230.00</p>
						</li>
						<li>
							<a href="">
								<b>SHOP</b>
								<img src="../../assets/images/shoucan.gif" alt="商品收藏图片">
								<span>上新255件</span>
							</a>
							<p>￥220.00~230.00</p>
						</li>
						<li>
							<a href="">
								<b>SHOP</b>
								<img src="../../assets/images/shoucan.gif" alt="商品收藏图片">
								<span>上新255件</span>
							</a>
							<p>￥220.00~230.00</p>
						</li>
					</ul>
				</div>
				<div class="row userCenter-footprint public">
					<p class="public-nav">
						<span class="icon-liulan"></span><span>最近浏览</span>
						<a href="">查看我的足迹(2) ></a>
					</p>
					<div class="userCenter-empty userCenter-empty-browse" v-if="!footprint">
						<img src="../../assets/images/browse.png" alt="">
						<p>
							您还没有浏览过商品<br/>
							快去逛逛吧~
						</p>
					</div>
					<ul v-if="footprint">
						<li>
							<a href=""><img src="../../assets/images/detail-new.jpg" alt="最近浏览图片"></a>
							<ul>
								<li><a href="">YINMAN女装紧身短装 2016春秋装2016春秋装新款</a></li>
								<li>￥120.00~138.00</li>
							</ul>
						</li>
						<li>
							<a href=""><img src="../../assets/images/detail-new.jpg" alt="最近浏览图片"></a>
							<ul>
								<li><a href="">YINMAN女装紧身短装 2016春秋装2016春秋装新款</a></li>
								<li>￥120.00~138.00</li>
							</ul>
						</li>
						<li>
							<a href=""><img src="../../assets/images/detail-new.jpg" alt="最近浏览图片"></a>
							<ul>
								<li><a href="">YINMAN女装紧身短装 2016春秋装2016春秋装新款</a></li>
								<li>￥120.00~138.00</li>
							</ul>
						</li>
						<li>
							<a href=""><img src="../../assets/images/detail-new.jpg" alt="最近浏览图片"></a>
							<ul>
								<li><a href="">YINMAN女装紧身短装 2016春秋装2016春秋装新款</a></li>
								<li>￥120.00~138.00</li>
							</ul>
						</li>
						<li>
							<a href=""><img src="../../assets/images/detail-new.jpg" alt="最近浏览图片"></a>
							<ul>
								<li><a href="">YINMAN女装紧身短装 2016春秋装2016春秋装新款</a></li>
								<li>￥120.00~138.00</li>
							</ul>
						</li>
						<li>
							<a href=""><img src="../../assets/images/detail-new.jpg" alt="最近浏览图片"></a>
							<ul>
								<li><a href="">YINMAN女装紧身短装 2016春秋装2016春秋装新款</a></li>
								<li>￥120.00~138.00</li>
							</ul>
						</li>
					</ul>
				</div>
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
	export default {
	  data () {
	    return {
	      isPhoneSet: true,
	      isEmailSet: true,
	      isPasswordSet: false,
	      isannouncements: true,
	      announcements: [
	      	{
	      		title: '柯咔商城将以最新面貌血洗',
	      		date: '2016-08-20'
	      	},
	      	{
	      		title: '柯咔商城将以最新面貌血洗中国服装批发市场',
	      		date: '2016-08-20'
	      	},
	      	{
	      		title: '柯咔商城将以最新面貌血洗中国服装批发市场',
	      		date: '2016-08-20'
	      	}
	      ],
	      isMyorder: true,
	      productcollection: true,
	      storeFocus: true,
	      footprint: true
	    }
	  },
	  mounted () {
	  	
	  },
	  methods: {
	  	_orderNav (e) {
	  		var el = e.target
	  		$(el).addClass('active').siblings('.active').removeClass('active')
	  	}
	  },
	  computed: {
	  	lilimit () {
	  		return this.announcements.length!=0 ? this.announcements.splice(0,3): ''
	  	}
	  },
	  components: {
	  	BuyerCenterHeader,
	  	footerComponent,
	  	BuyerCenterSideBar
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->