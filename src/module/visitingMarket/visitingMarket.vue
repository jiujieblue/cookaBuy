<template>
	<div>
		<headerComponent></headerComponent>
		<div class="container">
			<div class="row">
				<div class="col-md-12 trim-col">
					<div class="visitingmarket">
						<div class="startstore-box">
							<div class="top">
								<div class="top-img">
									<img src="../../assets/images/mingxingdianpu.svg" alt="">
								</div>
								<span>明星店铺</span>
							</div>
							<div class="swiper-box">
								<swiper :options="swiperOption">
									<swiper-slide>
										<img src="../../assets/images/mingxingdianpu01.jpg" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/images/mingxingdianpu02.jpg" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/images/mingxingdianpu03.jpg" alt="">
									</swiper-slide>
									<div class="swiper-button-prev" slot="button-prev"></div>
									<div class="swiper-button-next" slot="button-next"></div>
								</swiper>
							</div>
							<div class="clearfix"></div>
							<div class="market-box">
								<table>
									<tr>
										<td>市场</td>
										<td>
											<div><a href="#">全部</a></div>
											<div><a href="#">新潮都</a></div>
											<div><a href="#">灏丰(大西豪)</a></div>
											<div><a href="#">长运</a></div>
											<div><a href="#">长城</a></div>
										</td>
									</tr>
									<tr>
										<td>楼层</td>
										<td>
											<div><a href="#">全部</a></div>
											<div><a href="#">1F东侧</a></div>
											<div><a href="#">1F西侧</a></div>
											<div><a href="#">1F一街A档</a></div>
											<div><a href="#">1F</a></div>
											<div><a href="#">2F</a></div>
											<div><a href="#">3F</a></div>
											<div><a href="#">4F</a></div>
											<div><a href="#">5F</a></div>
											<div><a href="#">6F</a></div>
											<div><a href="#">7F</a></div>
											<div><a href="#">8F</a></div>
											<div><a href="#">三晟A区(1F)</a></div>
											<div><a href="#">三晟B区(2F)</a></div>
											<div><a href="#">三晟C区(-1F)</a></div>
										</td>
									</tr>
									<tr>
										<td>主营</td>
										<td>
											<div><a href="#">女装</a></div>
											<div><a href="#">男装</a></div>
											<div><a href="#">童装</a></div>
											<div><a href="#">孕妇装</a></div>
											<div><a href="#">其他</a></div>
										</td>
									</tr>
								</table>
							</div>
							<div class="crumb-box">
								<ol class="breadcrumb">
									<li><a href="#">长城</a></li>
									<li><a href="#" class="active">1F</a></li>
								</ol>
							</div>
							<div class="storelist-box">
								<div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" alt="">
										</div>
										<div>长城</div>
										<div>主营:女装</div>
										<div>1F&nbsp;&nbsp;522档</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
								<div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" alt="">
										</div>
										<div>长城</div>
										<div>主营:女装</div>
										<div>1F&nbsp;&nbsp;522档</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
								<div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" alt="">
										</div>
										<div>长城</div>
										<div>主营:女装</div>
										<div>1F&nbsp;&nbsp;522档</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
								<div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" alt="">
										</div>
										<div>长城</div>
										<div>主营:女装</div>
										<div>1F&nbsp;&nbsp;522档</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
								<div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" alt="">
										</div>
										<div>长城</div>
										<div>主营:女装</div>
										<div>1F&nbsp;&nbsp;522档</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
								<div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" alt="">
										</div>
										<div>长城</div>
										<div>主营:女装</div>
										<div>1F&nbsp;&nbsp;522档</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
								<div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" alt="">
										</div>
										<div>长城</div>
										<div>主营:女装</div>
										<div>1F&nbsp;&nbsp;522档</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
								<div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" alt="">
										</div>
										<div>长城</div>
										<div>主营:女装</div>
										<div>1F&nbsp;&nbsp;522档</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
								<div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" alt="">
										</div>
										<div>长城</div>
										<div>主营:女装</div>
										<div>1F&nbsp;&nbsp;522档</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
								<div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" alt="">
										</div>
										<div>长城</div>
										<div>主营:女装</div>
										<div>1F&nbsp;&nbsp;522档</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
								<div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" alt="">
										</div>
										<div>长城</div>
										<div>主营:女装</div>
										<div>1F&nbsp;&nbsp;522档</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
								<div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" alt="">
										</div>
										<div>长城</div>
										<div>主营:女装</div>
										<div>1F&nbsp;&nbsp;522档</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
								<div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" alt="">
										</div>
										<div>长城</div>
										<div>主营:女装</div>
										<div>1F&nbsp;&nbsp;522档</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
								<div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" alt="">
										</div>
										<div>长城</div>
										<div>主营:女装</div>
										<div>1F&nbsp;&nbsp;522档</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
							</div>
							<CkPagination></CkPagination>
						</div>
						<CKHr></CKHr>
						<div class="col-md-2"></div>
						<div class="col-md-8">
							<CKSearch></CKSearch>
						</div>
						<div class="col-md-2"></div>
						<div class="clearfix"></div>
						<div class="recommend-box">
							<div class="top">
								<span>HOT</span>
								<span>人气推荐</span>
							</div>
							<div class="body">
								<div class="stroeblock">
									<div class="img">
										<img src="../../assets/images/test_img.jpg" alt="">
									</div>
									<div>¥&nbsp;500</div>
									<div><a href="#">战地吉普男士牛仔卫裤2016春秋装新款</a></div>
									<div>
										<span>宝立美服饰</span>
										<span>大西豪823档</span>
									</div>
								</div>
								<div class="stroeblock">
									<div class="img">
										<img src="../../assets/images/test_img.jpg" alt="">
									</div>
									<div>¥&nbsp;500</div>
									<div><a href="#">战地吉普男士牛仔卫裤2016春秋装新款</a></div>
									<div>
										<span>宝立美服饰</span>
										<span>大西豪823档</span>
									</div>
								</div>
								<div class="stroeblock">
									<div class="img">
										<img src="../../assets/images/test_img.jpg" alt="">
									</div>
									<div>¥&nbsp;500</div>
									<div><a href="#">战地吉普男士牛仔卫裤2016春秋装新款</a></div>
									<div>
										<span>宝立美服饰</span>
										<span>大西豪823档</span>
									</div>
								</div>
								<div class="stroeblock">
									<div class="img">
										<img src="../../assets/images/test_img.jpg" alt="">
									</div>
									<div>¥&nbsp;500</div>
									<div><a href="#">战地吉普男士牛仔卫裤2016春秋装新款</a></div>
									<div>
										<span>宝立美服饰</span>
										<span>大西豪823档</span>
									</div>
								</div>
								<div class="stroeblock">
									<div class="img">
										<img src="../../assets/images/test_img.jpg" alt="">
									</div>
									<div>¥&nbsp;500</div>
									<div><a href="#">战地吉普男士牛仔卫裤2016春秋装新款</a></div>
									<div>
										<span>宝立美服饰</span>
										<span>大西豪823档</span>
									</div>
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
	import AwesomeSwiper from 'vue-awesome-swiper'
	import headerComponent from 'components/header'
	import footerComponent from 'components/footer'
	import CkPagination from 'components/CkPagination'
	import CKHr from 'components/CKHr'
	import CKSearch from 'components/CkSearch'

	Vue.use(AwesomeSwiper)
	export default{
		name:'carrousel',
		data(){
			return{
				swiperOption: {
		          paginationClickable: true,
		          spaceBetween: 10,
		          freeMode: true,
		          autoplay: 3000,
		          slidesPerView: 1,
		          prevButton:'.swiper-button-prev',
				  nextButton:'.swiper-button-next'
		        }
			}
		},
		components:{
			headerComponent,
			CkPagination,
			CKHr,
			CKSearch,
			footerComponent
		},
		mounted(){
		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/visitingmarket.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>