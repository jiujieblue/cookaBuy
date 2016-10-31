<template>
	<div>
		<headerComponent></headerComponent>
		<div class="container">
			<div class="row">
				<div class="col-md-12 trim-col">
					<div class="hotsalepage">
						<div class="hotsalepage-left">
							<div class="col-md-10 trim-col">
								<div class="hotsalepage-left-todayhotsale clearfix">
									<div class="hotsalepage-left-todayhotsale-top">
										<span class="hotsalepage-left-todayhotsale-top-hotone">HOT</span>
										<span class="hotsalepage-left-todayhotsale-top-hotonetitle">今日爆款</span>
									</div>
									<hr class="ck-hr"/>
									<!-- 此处应有好厉害的图片轮播 -->
									<div class="myswiper">
										<swiper :options="swiperOption">
											<swiper-slide>
												<img src="../../assets/images/hot-sale-today.jpg" alt="">
												<div>
													<p>¥666</p>
													<a href="#"><p>韩红战地抱款牛仔卫裤2016春秋装新款</p></a>
												</div>
												<div>
													<span>宝丽美服饰</span>
													<span>大西豪 823档</span>
												</div>
											</swiper-slide>
											<swiper-slide>
												<img src="../../assets/images/hot-sale-today.jpg" alt="">
												<div>
													<p>¥666</p>
													<a href="#"><p>韩红战地抱款牛仔卫裤2016春秋装新款</p></a>
												</div>
												<div>
													<span>宝丽美服饰</span>
													<span>大西豪 823档</span>
												</div>
											</swiper-slide>
											<swiper-slide>
												<img src="../../assets/images/hot-sale-today.jpg" alt="">
												<div>
													<p>¥666</p>
													<a href="#"><p>韩红战地抱款牛仔卫裤2016春秋装新款</p></a>
												</div>
												<div>
													<span>宝丽美服饰</span>
													<span>大西豪 823档</span>
												</div>
											</swiper-slide>
											<swiper-slide>
												<img src="../../assets/images/hot-sale-today.jpg" alt="">
												<div>
													<p>¥666</p>
													<a href="#"><p>韩红战地抱款牛仔卫裤2016春秋装新款</p></a>
												</div>
												<div>
													<span>宝丽美服饰</span>
													<span>大西豪 823档</span>
												</div>
											</swiper-slide>
											<swiper-slide>
												<img src="../../assets/images/hot-sale-today.jpg" alt="">
												<div>
													<p>¥666</p>
													<a href="#"><p>韩红战地抱款牛仔卫裤2016春秋装新款</p></a>
												</div>
												<div>
													<span>宝丽美服饰</span>
													<span>大西豪 823档</span>
												</div>
											</swiper-slide>
											<swiper-slide>
												<img src="../../assets/images/hot-sale-today.jpg" alt="">
												<div>
													<p>¥666</p>
													<a href="#"><p>韩红战地抱款牛仔卫裤2016春秋装新款</p></a>
												</div>
												<div>
													<span>宝丽美服饰</span>
													<span>大西豪 823档</span>
												</div>
											</swiper-slide>
											<swiper-slide>
												<img src="../../assets/images/hot-sale-today.jpg" alt="">
												<div>
													<p>¥666</p>
													<a href="#"><p>韩红战地抱款牛仔卫裤2016春秋装新款</p></a>
												</div>
												<div>
													<span>宝丽美服饰</span>
													<span>大西豪 823档</span>
												</div>
											</swiper-slide>
											<swiper-slide>
												<img src="../../assets/images/hot-sale-today.jpg" alt="">
												<div>
													<p>¥666</p>
													<a href="#"><p>韩红战地抱款牛仔卫裤2016春秋装新款</p></a>
												</div>
												<div>
													<span>宝丽美服饰</span>
													<span>大西豪 823档</span>
												</div>
											</swiper-slide>
											<div class="swiper-pagination" slot="pagination"></div>
										</swiper>
										<div class="swiper-button-prev swiper-button-black"></div>
										<div class="swiper-button-next swiper-button-black"></div>
									</div>
								</div>
								<div class="hotsalepage-left-womenhotsale clearfix">
									<div class="hotsalepage-left-womenhotsale-top">
										<span class="hotsalepage-left-womenhotsale-top-hottwo">HOT</span>
										<span class="hotsalepage-left-womenhotsale-top-hottwotitle">女装爆款</span>
										<span class="hotsalepage-left-womenhotsale-top-moreicon icon-more" />
									</div>
									<hr class="ck-hr"/>
									<div class="hotsalepage-left-womenhotsale-links">
										<ul>
											<li><img class="hotsalepage-left-womenhotsale-links-wbigimg" src="../../assets/images/women-bk-show440335.jpg"/></li>
											<li>
												<div class="hotsalepage-left-womenhotsale-links-item">
													<img class="hotsalepage-left-womenhotsale-links-item-wimg" src="../../assets/images/women-bk-pic.jpg" />
													<span class="hotsalepage-left-womenhotsale-links-item-price">¥520.00</span>
													<span class="hotsalepage-left-womenhotsale-links-item-title">韩红战地抱款牛仔卫裤2016春秋装新款</span>
													<span class="hotsalepage-left-womenhotsale-links-item-spanleft">宝丽美服饰</span>
													<span class="hotsalepage-left-womenhotsale-links-item-spanright">大西豪823档</span>
												</div>
											</li>
											<li>
												<div class="hotsalepage-left-womenhotsale-links-item">
													<img class="hotsalepage-left-womenhotsale-links-item-wimg" src="../../assets/images/women-bk-pic.jpg" />
													<span class="hotsalepage-left-womenhotsale-links-item-price">¥520.00</span>
													<span class="hotsalepage-left-womenhotsale-links-item-title">韩红战地抱款牛仔卫裤2016春秋装新款</span>
													<span class="hotsalepage-left-womenhotsale-links-item-spanleft">宝丽美服饰</span>
													<span class="hotsalepage-left-womenhotsale-links-item-spanright">大西豪823档</span>
												</div>
											</li>
											<li>
												<div class="hotsalepage-left-womenhotsale-links-item">
													<img class="hotsalepage-left-womenhotsale-links-item-wimg" src="../../assets/images/women-bk-pic.jpg" />
													<span class="hotsalepage-left-womenhotsale-links-item-price">¥520.00</span>
													<span class="hotsalepage-left-womenhotsale-links-item-title">韩红战地抱款牛仔卫裤2016春秋装新款</span>
													<span class="hotsalepage-left-womenhotsale-links-item-spanleft">宝丽美服饰</span>
													<span class="hotsalepage-left-womenhotsale-links-item-spanright">大西豪823档</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div class="hotsalepage-left-manhotsale clearfix">
									<div class="hotsalepage-left-manhotsale-top">
										<span class="hotsalepage-left-manhotsale-top-hotthree">HOT</span>
										<span class="hotsalepage-left-manhotsale-top-hotthreetitle">男装爆款</span>
										<span class="hotsalepage-left-manhotsale-top-moreicon icon-more"></span>
									</div>
									<hr class="ck-hr"/>
									<div class="hotsalepage-left-manhotsale-links">
										<ul>
											<li><img class="hotsalepage-left-manhotsale-links-wbigimg" src="../../assets/images/women-bk-show440335.jpg"/></li>
											<li>
												<div class="hotsalepage-left-manhotsale-links-item">
													<img class="hotsalepage-left-manhotsale-links-item-mimg" src="../../assets/images/women-bk-pic.jpg" />
													<span class="hotsalepage-left-manhotsale-links-item-price">¥520.00</span>
													<span class="hotsalepage-left-manhotsale-links-item-title">韩红战地抱款牛仔卫裤2016春秋装新款</span>
													<span class="hotsalepage-left-manhotsale-links-item-spanleft">宝丽美服饰</span>
													<span class="hotsalepage-left-manhotsale-links-item-spanright">大西豪823档</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="hotsalepage-right">
							<div class="col-md-2 trim-right">
								<div class="hotsalepage-right-top">
									<span class="hotsalepage-right-top-myicon icon-rexiaopaihang"/>
									<span class="hotsalepage-right-top-hotfourtitle">热销排行</span>
								</div>
								<hr class="ck-hr"/>
								<div class="hotsalepage-right-links">
									<ul>
										<li key={index}>
											<div class="hotsalepage-right-links-item">
												<span class="hotsalepage-right-links-item-hotnum">1</span>
												<img class="hotsalepage-right-links-item-himg" src="../../assets/images/my-fav.jpg"/>
												<span class="hotsalepage-right-links-item-price">¥666</span>
												<span class="hotsalepage-right-links-item-title"><a href="#">我是title</a></span>
												<span class="hotsalepage-right-links-item-spanleft">我是店铺名</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footerComponent></footerComponent>
	</div>
</template>

<script>
	import Vue from 'vue'
	import AwesomeSwiper from 'vue-awesome-swiper'
	import headerComponent from 'components/header'
	import footerComponent from 'components/footer'
	Vue.use(AwesomeSwiper)
	export default{
		name:'carrousel',
		data(){
			return{
				swiperOption: {
		          pagination: '.swiper-pagination',
		          slidesPerView: 4,
		          paginationClickable: true,
		          spaceBetween: 10,
		          freeMode: true,
		          autoplay: 3000,
		          prevButton:'.swiper-button-prev',
				  nextButton:'.swiper-button-next'
		        }
			}
		},
		components:{
			headerComponent,
			footerComponent
		},
		mounted(){
		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/hotsale.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>