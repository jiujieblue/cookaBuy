<template>
	<div>
		<headerComponent pageName="visitPage" stroe='stroe' :keyword="q"  @subKeyword="_subkeyword" @subStor="_subStor"></headerComponent>
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
										<a href="./sellerAllProduct.html?store_id=2389">
											<img src="../../assets/images/sanye.jpg" alt="">
										</a>
									</swiper-slide>
									<swiper-slide>
										<a href="./sellerAllProduct.html?store_id=2417">
											<img src="../../assets/images/yirenzui.jpg" alt="">
										</a>
									</swiper-slide>
									<swiper-slide>
										<a href="./sellerAllProduct.html?store_id=1997">
											<img src="../../assets/images/feiyiban.jpg" alt="">
										</a>
									</swiper-slide>
									<div class="swiper-button-prev" slot="button-prev"></div>
									<div class="swiper-button-next" slot="button-next"></div>
								</swiper>
							</div>
							<div class="clearfix"></div>
							<div v-if="!q" class="market-box">
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
											<div v-for="(floorItem, floorIndex) in floors" @click="_clickF(floorItem)"><a :class="ft == floorItem ? 'tagActive' : ''">{{floorItem}}</a></div>
										</td>
									</tr>
									<tr>
										<td>主营</td>
										<td>
											<div><a>全部</a></div>
											<div v-for="(categoriesItem, categoriesIndex) in categories" @click="_clickC(categoriesItem.name,categoriesIndex)"><a :class="ct == categoriesIndex ? 'tagActive' : ''">{{categoriesItem.name}}</a></div>
										</td>
									</tr>
								</table>
							</div>
							<div v-if="!q" class="crumb-box">
								<ol class="breadcrumb">
									<li><a>大西豪</a></li>
									<li v-if="floor"><a class="floor ? active : ''">{{floor}}</a></li>
									<li v-if="cat"><a class="cat ? active : ''">{{cat}}</a></li>
								</ol>
							</div>
							<div class="storelist-box">
								<div class="storelist-box-storeblock" v-for="(storeItem, storeIndex) in stores">
									<div class="title">{{ _isKey(storeItem,'store_name')}}</div>
									<div class="body">
										<div class="img">
											<img :src="_isKey(storeItem,'store_logo')" alt="">
										</div>
										<div>{{_isKey(storeItem,'market')}}</div>
										<div>主营:{{_isKey(storeItem,'cat')}}</div>
										<div>{{_isKey(storeItem,'location')}}</div>
										<div>
											<a class="btn-link" @click="_toStore(storeIndex)">进店逛逛</a>
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
						</div>
						<CkPagination v-if="!q" :pages="pages" :pageNum="page" @submitPage="subPage"></CkPagination>
						<!-- 暂时隐藏 -->
						<!-- <CKHr></CKHr>
						<div class="col-md-2"></div>
						<div class="col-md-8">
							<CKSearch @subKeyword="_subkey" :keyword="q"></CKSearch>
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
						</div> -->
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
		        store_logo:'',
		        q:'',
		        page:1,
		        pages:'',
		        total:'',
		        floor:'',
		        cat:'',
		        ct:-1,
		        ft:-1,
		        isStore: false,
		        isActiveF: false,
		        isActiveC: false
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
			_subStor (n) {
		  		if(n == 0){
		  			this.isStore = false
		  		}else{
		  			this.isStore = true
		  		}
		  	},
			_subkeyword(keyword){
				if(this.isStore || $('.ck-search-type').html() == "店铺"){
					window.location.href = "./visitingMarket.html?q=" + keyword
				}else{
					window.location.href = "./search.html?q="+keyword
				}
				
			},
			_toStore(t){
				window.open("./sellerAllProduct.html?store_id="+this.stores[t].id)
			},
			subPage (val) {
			  	console.log(val)
			  	var cat = this.cat ? '&cat='+this.cat : ''
			  	var floor = this.floor ? '&floor='+this.floor : ''
			  	this.$http.get('/api/stores?market=大西豪'+ cat + floor + '&page=' + val)
				.then(
					function(res){
						this.stores = res.data.data
						this.categories = res.data.categories
						this.page = res.data.page_number
						this.pages = res.data.total_pages
						//window.location.href = './visitingMarket.html?market=大西豪'+ '&cat=' + c + '&floor=' + this.floor + '&page=' + this.page
					},
					function(err){
						console.log(err)
					}
				)
			},
			_clickM(m){
				console.log(m)
			},
			_clickF(f){
				console.log(f)
				this.floor = f
				this.ft = f
				this.$http.get('/api/stores?market=大西豪' + '&floor=' + f + '&page=1')
				.then(
					function(res){
						this.stores = res.data.data
						this.categories = res.data.categories
						this.page = res.data.page_number
						this.pages = res.data.total_pages
						this.cat = ''
						//window.location.href = './visitingMarket.html?market=大西豪' + '&floor=' + f + '&page=1'
					},
					function(err){
						console.log(err)
					}
				)
			},
			_clickC(c,cIndex){
				console.log(c)
				console.log(cIndex)
				this.cat = c
				this.ct = cIndex
				if(this.floor){
					this.$http.get('/api/stores?market=大西豪'+ '&cat=' + c + '&floor=' + this.floor + '&page=1')
					.then(
						function(res){
							this.stores = res.data.data
							this.categories = res.data.categories
							this.page = res.data.page_number
							this.pages = res.data.total_pages
							//window.location.href = './visitingMarket.html?market=大西豪'+ '&cat=' + c + '&floor=' + this.floor + '&page=' + this.page
						},
						function(err){
							console.log(err)
						}
					)
				}else{
					this.$http.get('/api/stores?market=大西豪'+ '&cat=' + c + '&page=1')
					.then(
						function(res){
							this.stores = res.data.data
							this.categories = res.data.categories
							this.page = res.data.page_number
							this.pages = res.data.total_pages
							//window.location.href = './visitingMarket.html?market=大西豪'+ '&cat=' + c + '&floor=' + this.floor + '&page=' + this.page
						},
						function(err){
							console.log(err)
						}
					)
				}
			},
			_isKey (pro,key) {
		  		if(pro._source){
		  			return pro._source[key]
		  		}else{
		  			return pro[key]
		  		}
		  	}
		},
		props: {
			keyword: {
				default: ''
			},
			pageName: {
				default: ''
			}
		},
		mounted(){
			var hrefStr = window.location.href
			var qI = hrefStr.indexOf('q=')
		  	if(qI != -1){
		  		this.q = hrefStr.slice(qI)
		  		if((qI = this.q.indexOf('&')) != -1){
		  			this.q = this.q.slice(0,qI)
		  		}
		  		this.q = decodeURIComponent(this.q.slice(this.q.indexOf('=')+1))
		  	}

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
			if(this.q){
				this.$http.get('/s1/searchs?type=store&q=' + this.q)
				.then(
					function(res){
						console.log(res.data[2].hits.hits)
						this.stores = res.data[2].hits.hits
						this.total = res.data[2].hits
						// this.markets = res.data.markets
						// this.page = res.data.data.page_number
						// this.pages = res.data.total_pages
						// this.stores =  res.data.data
						// this.floors = res.data.floors
						// this.categories = res.data.categories
					},
					function(err){
						console.log(err)
					}
				)

			}else{
				this.$http.get('/api/stores?market=大西豪' + '&page=1')
				.then(
					function(res){
						this.markets = res.data.markets
						this.page = res.data.data.page_number
						this.pages = res.data.total_pages
						this.stores =  res.data.data
						this.floors = res.data.floors
						this.categories = res.data.categories
						// for (var i = 0; i < this.stores.length; i++) {
						// 	if((this.stores[i].store_logo).match('http://static17.17zwd.com') != null){
						// 		this.stores[i].store_logo = '../../assets/images/default_avatar.png'
						// 	}
						// }
					},
					function(err){
						console.log(err)
					}
				)
			}
		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/visitingmarket.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>