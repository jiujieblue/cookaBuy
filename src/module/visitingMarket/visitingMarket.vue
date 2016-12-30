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
									<img src="../../assets/images/mingxingdianpu.svg" >
								</div>
								<span>明星店铺</span>
							</div>
							<div class="swiper-box">
								<!-- <swiper :options="swiperOption">
									<swiper-slide>
										<a @click="_toBannerStore(2389)">
											<img src="../../assets/images/sanye.jpg" >
										</a>
									</swiper-slide>
									<swiper-slide>
										<a @click="_toBannerStore(2417)">
											<img src="../../assets/images/yirenzui.jpg" >
										</a>
									</swiper-slide>
									<swiper-slide>
										<a @click="_toBannerStore(1997)">
											<img src="../../assets/images/feiyiban.jpg" >
										</a>
									</swiper-slide>
									<swiper-slide>
										<a @click="_toBannerStore(81)">
											<img src="../../assets/images/yuanyuan.jpg" >
										</a>
									</swiper-slide>
									<swiper-slide>
										<a @click="_toBannerStore(2186)">
											<img src="../../assets/images/hanfengriliufushi_3F_330.jpg" >
										</a>
									</swiper-slide>
									<div class="swiper-pagination" slot="pagination"></div>
									<div class="swiper-button-prev" slot="button-prev"></div>
									<div class="swiper-button-next" slot="button-next"></div>
								</swiper> -->
								<div class="swiper-box-carousel" >
									<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="3000">
											<!-- Indicators -->
										<ol class="carousel-indicators">
											<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
											<li data-target="#carousel-example-generic" data-slide-to="1"></li>
											<li data-target="#carousel-example-generic" data-slide-to="2"></li>
											<li data-target="#carousel-example-generic" data-slide-to="3"></li>
											<li data-target="#carousel-example-generic" data-slide-to="4"></li>
										</ol>
										<!-- Wrapper for slides -->
										<div class="carousel-inner" role="listbox">
											<div class="item active" @click="_toBannerStore(2389)">
												<img src="../../assets/images/sanye.jpg" >
											</div>
											<div class="item" @click="_toBannerStore(2417)">
												<img src="../../assets/images/yirenzui.jpg" >
											</div>
											<div class="item" @click="_toBannerStore(1997)">
												<img src="../../assets/images/feiyiban.jpg" >
											</div>
											<div class="item" @click="_toBannerStore(81)">
												<img src="../../assets/images/yuanyuan.jpg" >
											</div>
											<div class="item" @click="_toBannerStore(2186)">
												<img src="../../assets/images/hanfengriliufushi_3F_330.jpg" >
											</div>
										</div>
										<!-- Controls -->
										<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
											<span class="icon-navqian"></span>
										</a>
										<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
											<span class="icon-navhou"></span>
										</a>
									</div>
								</div>
							</div>
							<div class="clearfix"></div>
							<div class="market-box">
								<table>
									<tr>
										<td>市场</td>
										<td>
											<div><a>全部</a></div>
											<div @click="_clickM('大西豪')"><a class="tagActive">大西豪</a></div>
											<!-- <div><a>新潮都</a></div>
											<div><a>灏丰(大西豪)</a></div>
											<div><a>长运</a></div>
											<div><a>长城</a></div> -->
										</td>
									</tr>
									<tr>
										<td>楼层</td>
										<td>
											<div @click="_clickAllF"><a :class="isAllF ? 'tagActive' : ''">全部</a></div>
											<div v-for="(floorItem, floorIndex) in sortF" @click="_clickF(floorItem.key)"><a :class="ft == floorItem.key ? 'tagActive' : ''">{{floorItem.key}}</a></div>
										</td>
									</tr>
									<tr>
										<td>主营</td>
										<td>
											<div @click="_clickAllZ"><a :class="isAllZ ? 'tagActive' : ''">全部</a></div>
											<div  v-for="(catsItem, catsIndex) in cats" @click="_clickZ(catsItem.key,catsIndex)"><a :class="zt == catsIndex ? 'tagActive' : ''">{{catsItem.key}}</a></div>
										</td>
									</tr>
									<tr v-if="false">
										<td>类目</td>
										<td>
											<div @click="_clickAllC"><a :class="isAllC ? 'tagActive' : ''">全部</a></div>
											<div v-for="(categoriesItem, categoriesIndex) in categories" @click="_clickC(categoriesItem.key,categoriesIndex)"><a :class="ct == categoriesIndex ? 'tagActive' : ''">{{categoriesItem.key}}</a></div>
										</td>
									</tr>
								</table>
							</div>
							<div class="crumb-box">
								<ol class="breadcrumb">
									<li><a>大西豪</a></li>
									<li v-if="isAllF">
										<a v-if="isAllF" class="isAllF ? active : ''">全部楼层</a>
									</li>	
									<li v-if="floor">
										<a class="floor ? active : ''">{{floor}}</a>
									</li>

									<li v-if="isAllZ">
										<a v-if="isAllZ" class="isAllZ ? active : ''">全部主营</a>
									</li>	
									<li v-if="zhuying">
										<a class="zhuying ? active : ''">{{zhuying}}</a>
									</li>

									<!-- <li v-if="isAllC">
										<a v-if="isAllC" class="isAllC ? active : ''">全部类目</a>
									</li>	
									<li v-if="cat">
										<a class="cat ? active : ''">{{cat}}</a>
									</li> -->
								</ol>
							</div>
							<div class="storelist-box">
								<div class="storelist-box-storeblock" v-for="(storeItem, storeIndex) in stores">
									<div class="title">{{ storeItem._source.store_name}}</div>
									<div class="body">
										<div class="img">
											<img :src="storeItem._source.store_logo" >
										</div>
										<div>{{storeItem._source.market}}</div>
										<div>主营：{{storeItem._source.cat.toString()}}</div>
										<div>{{storeItem._source.location}}</div>
										<div>
											<a class="btn-link" @click="_toStore(storeItem)">进店逛逛</a>
										</div>
									</div>
								</div>
								<!-- <div class="storelist-box-storeblock">
									<div class="title">广州市标总服饰</div>
									<div class="body">
										<div class="img">
											<img src="../../assets/images/dianputouxiang.png" >
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

							<div class="nostorelist-box" v-if="!stores.length">
								<div class="body">
										<img src="../../assets/images/nostore.png" >
										<span>找不到店铺哟～</span>
										<a href="./index.html">去商城首页</a>
								</div>
							</div>


						</div>
						<CkPagination v-if="stores.length" :pages="pages" :pageNum="page" @submitPage="subPage"></CkPagination>
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
										<img src="../../assets/images/test_img.jpg" >
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
										<img src="../../assets/images/test_img.jpg" >
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
										<img src="../../assets/images/test_img.jpg" >
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
										<img src="../../assets/images/test_img.jpg" >
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
										<img src="../../assets/images/test_img.jpg" >
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
//	import AwesomeSwiper from 'vue-awesome-swiper'
	import VueResource from 'vue-resource'
	import headerComponent from 'components/header'
	import footerComponent from 'components/footer'
	import 'bootstrap/dist/js/bootstrap.js'
	import gotop from 'components/goTop'
	import CkPagination from 'components/CkPagination'
	import CKHr from 'components/CKHr'
	import CKSearch from 'components/CkSearch'
	Vue.use(VueResource)
//	Vue.use(AwesomeSwiper)

	export default{
		//name:'carrousel',
		data(){
			return{
				// swiperOption: {
				// 	pagination: '.swiper-pagination',
		  //       	paginationClickable: true,
		  //       	spaceBetween: 10,
		  //       	freeMode: true,
		  //       	autoplay: 3000,
		  //       	slidesPerView: 1,
		  //       	loop: true,
		  //       	prevButton:'.swiper-button-prev',
				// 	nextButton:'.swiper-button-next'
		  //       },
		        markets:[],
		        stores:[],
		        floors:[],
		        sortF:[],
		        cats:[],
		        categories:[],
		        isAllF:true,
		        isAllZ:true,
		        isAllC:true,
		        store_logo:'',
		        q:'',
		        q_total:'',
		        q_pageSize:10,
		        total:'',
		        pageSize:10,
		        page:1,
		        pages:'',
		        floor:'',
		        zhuying:'',
		        cat:'',
		        ct:-1,
		        zt:-1,
		        ft:-1,
		        isStore: false,
		        isActiveF: false,
		        isActiveZ: false,
		        isActiveC: false,
		        isSearch: true
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
				var keyStr = keyword && "?q=" + keyword
				if(this.isStore || $('.ck-search-type').html() == "店铺"){
					window.location.href = "./visitingMarket.html" + keyStr
				}else{
					window.location.href = "./search.html"+keyStr
				}
			},
			_toBannerStore(sid){
				window.open("./sellerAllProduct.html?store_id="+ sid)
			},
			_toStore(t){
				var store_id = t._source ? t._source.id : t.id
				window.open("./sellerAllProduct.html?store_id="+ store_id)
			},
			subPage (val) {
			  	this.page = val
			  	var zhuying = this.zhuying && '&main_cat='+this.zhuying
			  	var floor = this.floor && '&floor='+this.floor
			  	var q = this.q && '&q=' + this.q
		  		this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10' + zhuying + floor + q + '&from=' + (val-1)*10)
				.then(
					function(res){
						this.stores = res.data[2].hits.hits
						this.q_total = res.data[2].hits.total
						this.pages = Math.ceil(this.q_total/10)
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
				this.isSearch = false
				this.isAllF = false
				this.isAllZ = true
				this.isAllC = true
				this.floor = f
				this.ft = f
				this.ct = -1
				this.zt = -1
				this.zhuying = ''
				this.cat = ''
				this.q = ''
				this.page = 1
				this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10' + '&floor=' + f + '&from=0')
				.then(
					function(res){
						console.log(this.categories)
						this.cats = res.data[2].aggregations.cats.buckets
						this.stores = res.data[2].hits.hits
						this.total = res.data[2].hits.total
						this.pages = Math.ceil(this.total/this.pageSize)
					},
					function(err){
						console.log(err)
					}
				)
				$('.ck-pagination-input input').val('')
			},
			_clickAllF(){
				this.isSearch = false
				this.isAllF = true
				this.q = ''
				this.floor = ''
				this.ct = -1
				this.ft = 0
				this.page = 1
				this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10' + '&from=0')
				.then(
					function(res){
						this.stores = res.data[2].hits.hits
						this.categories = res.data[2].aggregations.cates.buckets
						this.total = res.data[2].hits.total
						this.pages = Math.ceil(this.total/this.pageSize)
						this.cat = ''
					},
					function(err){
						console.log(err)
					}
				)
				window.location.href = './visitingMarket.html?matket=大西豪&search_size=10' + '&from=0'
				$('.ck-pagination-input input').val('')
			},
			_clickZ(z,zIndex){
				console.log(z)
				console.log(this.floor)
				this.isSearch = false
				this.isAllF = false
				this.isAllC = true
				this.isAllZ = false
				this.zhuying = z
				this.zt = zIndex
				this.q = ''
				this.page = 1
				if(!this.floor){
					this.isAllF = true
					this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10' + '&main_cat=' + this.zhuying + '&from=0')
					.then(
						function(res){
							console.log(this.categories)
							this.categories = res.data[2].aggregations.cates.buckets
							this.stores = res.data[2].hits.hits
							this.total = res.data[2].hits.total
							this.pages = Math.ceil(this.total/10)
							console.log(this.pages)
						},
						function(err){
							console.log(err)
						}
					)
				}else{
					this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10' + '&floor=' + this.floor + '&main_cat=' + this.zhuying + '&from=0')
					.then(
						function(res){
							console.log(this.categories)
							this.categories = res.data[2].aggregations.cates.buckets
							this.stores = res.data[2].hits.hits
							this.total = res.data[2].hits.total
							this.pages = Math.ceil(this.total/10)
						},
						function(err){
							console.log(err)
						}
					)
				}
				$('.ck-pagination-input input').val('')
			},
			_clickAllZ(){
				this.isAllZ = true
				this.zt = -1
				this.ct = -1
				this.zhuying = ''
				this.q =''
				this.page = 1
				if(this.floor){
					this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10' + '&floor=' + this.floor + '&from=0')
					.then(
						function(res){
							this.categories = res.data[2].aggregations.cates.buckets
							this.stores = res.data[2].hits.hits
							this.total = res.data[2].hits.total
							this.pages = Math.ceil(this.total/10)
							this.cat = ''
						},
						function(err){
							console.log(err)
						}
					)
				}else{
					this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10' + '&from=0')
					.then(
						function(res){
							this.floors = res.data[2].aggregations.floors.buckets
							this.categories = res.data[2].aggregations.cates.buckets
							this.stores = res.data[2].hits.hits
							this.total = res.data[2].hits.total
							this.pages = Math.ceil(this.total/10)
						},
						function(err){
							console.log(err)
						}
					)
				}
				$('.ck-pagination-input input').val('')
			},
			// _clickC(c,cIndex){
			// 	this.isSearch = false
			// 	this.isAllC = false
			// 	this.isAllF = false
			// 	this.cat = c
			// 	this.page = 1
			// 	this.ct = cIndex
			// 	if(this.floor && this.zhuying){
			// 		this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10'+ '&main_cat' + this.zhuying + '&cate=' + c + '&floor=' + this.floor + '&page=1')
			// 		.then(
			// 			function(res){
			// 				this.stores = res.data[2].hits.hits
			// 				this.total = res.data[2].hits.total
			// 				this.pages = Math.ceil(this.total/this.pageSize)
			// 			},
			// 			function(err){
			// 				console.log(err)
			// 			}
			// 		)
			// 	}
			// 	else if(!this.floor && this.zhuying){
			// 		this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10'+ '&main_cat' + this.zhuying + '&cate=' + c + '&page=1')
			// 		.then(
			// 			function(res){
			// 				this.stores = res.data[2].hits.hits
			// 				this.total = res.data[2].hits.total
			// 				this.pages = Math.ceil(this.total/this.pageSize)
			// 			},
			// 			function(err){
			// 				console.log(err)
			// 			}
			// 		)
			// 	}
			// 	else if(!this.floor && !this.zhuying){
			// 		this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10' + '&cate=' + c + '&page=1')
			// 		.then(
			// 			function(res){
			// 				this.stores = res.data[2].hits.hits
			// 				this.total = res.data[2].hits.total
			// 				this.pages = Math.ceil(this.total/this.pageSize)
			// 			},
			// 			function(err){
			// 				console.log(err)
			// 			}
			// 		)
			// 	}
			// 	else if(this.floor && !this.zhuying){
			// 		this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10'+ '&cate=' + c + '&floor=' + this.floor + '&page=1')
			// 		.then(
			// 			function(res){
			// 				this.stores = res.data[2].hits.hits
			// 				this.total = res.data[2].hits.total
			// 				this.pages = Math.ceil(this.total/this.pageSize)
			// 			},
			// 			function(err){
			// 				console.log(err)
			// 			}
			// 		)
			// 	}
			// },
			// _clickAllC(){
			// 	this.isSearch = false
			// 	this.isAllC = true
			// 	this.ct = -1
			// 	console.log(this.floor)
			// 	if(this.floor){
			// 		this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10' + '&floor=' + this.floor + '&page=1')
			// 		.then(
			// 			function(res){
			// 				this.categories = res.data[2].aggregations.cates.buckets
			// 				this.stores = res.data[2].hits.hits
			// 				this.total = res.data[2].hits.total
			// 				this.pages = Math.ceil(this.total/this.pageSize)
			// 				this.cat = ''
			// 			},
			// 			function(err){
			// 				console.log(err)
			// 			}
			// 		)
			// 	}else{
			// 		this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10' + '&page=1')
			// 		.then(
			// 			function(res){
			// 				this.categories = res.data[2].aggregations.cates.buckets
			// 				this.stores = res.data[2].hits.hits
			// 				this.total = res.data[2].hits.total
			// 				this.pages = Math.ceil(this.total/this.pageSize)
			// 				this.cat = ''
			// 			},
			// 			function(err){
			// 				console.log(err)
			// 			}
			// 		)
			// 	}
			// },
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
			
			// $('.swiper-container').hover(
			// 		function(){
			// 			$('.swiper-button-prev').css('left','0').fadeIn('slow')
			// 			$('.swiper-button-next').css('right','0').fadeIn('slow')
			// 		},
			// 		function(){
			// 			$('.swiper-button-prev').css('left','-40px').fadeOut('slow')
			// 			$('.swiper-button-next').css('right','-40px').fadeOut('slow')
			// 		}
			// 	)

			$('.swiper-box-carousel').hover(
				function(){
					$('.icon-navqian').css('left','0').fadeIn('normal')
					$('.icon-navhou').css('right','0').fadeIn('normal')
				},
				function(){
					$('.icon-navqian').css('left','-50px').fadeOut('normal')
					$('.icon-navhou').css('right','-50px').fadeOut('normal')
				}
			)


			!this.q && (this.isSearch = false)
			if(this.q){
				this.$http.get('/s1/searchs?type=store&search_size=10&from=0&q=' + this.q)
				.then(
					function(res){
						this.stores = res.data[2]&&res.data[2].hits&&res.data[2].hits.hits
						this.q_total = res.data[2]&&res.data[2].hits&&res.data[2].hits.total
						this.pages = Math.ceil(this.q_total/10)
						console.log(this.pages)
					},
					function(err){
						console.log(err)
					}
				)
				this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10' + '&from=0')
				.then(
					function(res){
						this.markets = res.data[2].aggregations.markets.buckets
						this.floors = res.data[2].aggregations.floors.buckets
						this.sortF.push(this.floors[0])
						for( var i = 1 ; i < this.floors.length ; i ++){
							var fStr = this.floors[i].key
							for(var n = 0; n < this.sortF.length; n++){
								if(fStr.slice(0,1) < this.sortF[n].key.slice(0,1) || 
									fStr.slice(0,1) == this.sortF[n].key.slice(0,1)){
									var arr = this.sortF.splice(n,this.sortF.length - n)
									this.sortF.push(this.floors[i])
									this.sortF = this.sortF.concat(arr)
									break
								}
							}
							if(n == this.sortF.length){
								this.sortF.push(this.floors[i])
							}
						}
						this.cats = res.data[2].aggregations.cats.buckets
						this.categories = res.data[2].aggregations.cates.buckets
					},
					function(err){
						console.log(err)
					}
				)

			}else{
				this.$http.get('/s1/searchs?type=store&market=大西豪&search_size=10' + '&from=0')
				.then(
					function(res){
						this.markets = res.data[2].aggregations.markets.buckets
						this.floors = res.data[2].aggregations.floors.buckets
						this.sortF.push(this.floors[0])
						for( var i = 1 ; i < this.floors.length ; i ++){
							var fStr = this.floors[i].key
							for(var n = 0; n < this.sortF.length; n++){
								if(fStr.slice(0,1) < this.sortF[n].key.slice(0,1) || 
									fStr.slice(0,1) == this.sortF[n].key.slice(0,1)){
									var arr = this.sortF.splice(n,this.sortF.length - n)
									this.sortF.push(this.floors[i])
									this.sortF = this.sortF.concat(arr)
									break
								}
							}
							if(n == this.sortF.length){
								this.sortF.push(this.floors[i])
							}
						}
						this.cats = res.data[2].aggregations.cats.buckets
						this.categories = res.data[2].aggregations.cates.buckets
						this.stores = res.data[2].hits.hits
						this.total = res.data[2].hits.total
						this.pages = Math.ceil(this.total/10)
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