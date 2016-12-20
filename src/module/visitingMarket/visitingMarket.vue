<template>
	<div>
		<headerComponent pageName="visitPage"  @subKeyword="_subkeyword"></headerComponent>
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
										<img src="../../assets/images/sanye.jpg" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/images/xiangkesinanzhuang.jpg" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/images/xiongmaoyunfuzhuang.jpg" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/images/zunyichaonan.jpg" alt="">
									</swiper-slide>
									<swiper-slide>
										<img src="../../assets/images/feiyiban.jpg" alt="">
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
											<div><a>全部</a></div>
											<div @click="_clickM('大西豪')"><a>大西豪</a></div>
											<!-- <div><a>新潮都</a></div>
											<div><a>灏丰(大西豪)</a></div>
											<div><a>长运</a></div>
											<div><a>长城</a></div> -->
										</td>
									</tr>
									<tr>
										<td>楼层</td>
										<td>
											<div><a>全部</a></div>
											<div v-for="(floorItem, floorIndex) in floors" @click="_clickF(floorItem)"><a>{{floorItem}}</a></div>
										</td>
									</tr>
									<tr>
										<td>主营</td>
										<td>
											<div><a>全部</a></div>
											<div v-for="(categoriesItem, categoriesIndex) in categories" @click="_clickC(categoriesItem.name)"><a>{{categoriesItem.name}}</a></div>
										</td>
									</tr>
								</table>
							</div>
							<div class="crumb-box">
								<ol class="breadcrumb">
									<li><a>长城</a></li>
									<li><a class="active">1F</a></li>
								</ol>
							</div>
							<div class="storelist-box">
								<div class="storelist-box-storeblock" v-for="(storeItem, storeIndex) in stores">
									<div class="title">{{storeItem.store_name}}</div>
									<div class="body">
										<div class="img">
											<img :src="storeItem.store_logo" alt="">
										</div>
										<div>{{storeItem.market}}</div>
										<div>主营:没有数据</div>
										<div>{{storeItem.location}}</div>
										<div>
											<button class="btn-link">进店逛逛</button>
										</div>
									</div>
								</div>
								<!-- <div class="storelist-box-storeblock">
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
								</div> -->
							</div>
							<CkPagination :pages="pages" :pageNum="page" @submitPage="subPage"></CkPagination>
						</div>
						<CKHr></CKHr>
						<div class="col-md-2"></div>
						<div class="col-md-8">
							<CKSearch @subKeyword="_subkey" :keyword="keyword"></CKSearch>
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
									<div><a>战地吉普男士牛仔卫裤2016春秋装新款</a></div>
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
									<div><a>战地吉普男士牛仔卫裤2016春秋装新款</a></div>
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
									<div><a>战地吉普男士牛仔卫裤2016春秋装新款</a></div>
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
									<div><a>战地吉普男士牛仔卫裤2016春秋装新款</a></div>
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
									<div><a>战地吉普男士牛仔卫裤2016春秋装新款</a></div>
									<div>
										<span>宝立美服饰</span>
										<span>大西豪823档</span>
									</div>
								</div>
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
	import AwesomeSwiper from 'vue-awesome-swiper'
	import VueResource from 'vue-resource'
	import headerComponent from 'components/header'
	import footerComponent from 'components/footer'
	import gotop from 'components/goTop'
	import CkPagination from 'components/CkPagination'
	import CKHr from 'components/CKHr'
	import CKSearch from 'components/CkSearch'
	Vue.use(VueResource)
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
		        },
		        markets:[],
		        stores:[],
		        floors:[],
		        categories:[],
		        q:'',
		        page:2,
		        pages:'',
		        floor:'',
			}
		},
		components:{
			headerComponent,
			CkPagination,
			CKHr,
			CKSearch,
			footerComponent,
			gotop
		},
		methods:{
			_subkey (val) {
				this.$emit('subKeyword',val)
			},
			_subkeyword(keyword){
				window.location.href = "./search.html?q="+keyword
			},
			subPage (val) {
			  	this.q = window.location.href
			  	console.log(this.q)
			},
			_clickM(m){
				console.log(m)
			},
			_clickF(f){
				console.log(f)
				this.$http.get('/api/stores?market=大西豪' + '&floor=' + f + '&page=' + this.page)
				.then(
					function(res){
						this.floor = f
						this.stores = res.data.data
						this.categories = res.data.categories
						this.q = './visitingMarket.html?market=大西豪' + '&floor='+ this.floor
						window.location.href = this.q + '&page=' + this.page
					},
					function(err){
						console.log(err)
					}
				)
			},
			_clickC(c){
				this.q = window.location.href
				console.log(c)
				this.$http.get('/api/stores?market=大西豪' + '&floor=' + this.floor + '&page=' + this.page)
				.then(
					function(res){
						this.stores = res.data.data
						this.categories = res.data.categories
						window.location.href = this.q + '&category=' + c
					},
					function(err){
						console.log(err)
					}
				)
			}
		},
		mounted(){
			$('.swiper-container').hover(
					function(){
						$('.swiper-button-prev').css('left','0').fadeIn('slow')
						$('.swiper-button-next').css('right','0').fadeIn('slow')
					},
					function(){
						$('.swiper-button-prev').css('left','-40px').fadeOut('slow')
						$('.swiper-button-next').css('right','-40px').fadeOut('slow')
					}
				)
			this.$http.get('/api/stores?market=大西豪' + '&page=' + this.page)
			.then(
				function(res){
					this.markets = res.data.markets
					this.pages = res.data.data.total_pages
					this.stores =  res.data.data
					console.log(this.markets)
					this.$http.get('/api/stores?market=大西豪' + '&page=' + this.page)
					.then(
						function(res){
							this.floors = res.data.floors
							this.categories = res.data.categories
							console.log(this.floors)
							console.log(this.categories)
						},
						function(err){
							console.log(err)
						}
					)
				},
				function(err){
					console.log(err)
				}
			)
		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/visitingmarket.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>