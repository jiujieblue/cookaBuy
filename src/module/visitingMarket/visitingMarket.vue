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
								<div class="swiper-box-carousel" >
									<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="3000">
											<!-- Indicators -->
										<ol class="carousel-indicators">
											<li v-for="(storeAdsItem, storeAdsIndex) in storeAds" data-target="#carousel-example-generic" :data-slide-to="storeAdsIndex" :class="storeAdsIndex? '':'active'"></li>
										</ol>
										<!-- Wrapper for slides -->
										<div class="carousel-inner" role="listbox">
											<div :class="storeAdsIndex? 'item':'item active'" v-for="(storeAdsItem, storeAdsIndex) in storeAds" @click="_goAdsMore(storeAdsItem.activity_url)">
											<img :src="storeAdsItem.pic_url" :title="storeAdsItem.tip" alt="storeAdsItem.tip">
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
									<tr data_tr="1">
										<td>市场</td>
										<td>
											<div @click="_clickAllM"><a :class="isAllM ? 'tagActive' : ''">全部</a></div>
										</td>
										<td>
											<div v-for="(marketItem, marketIndex) in markets" @click="_clickM(marketItem.key,marketIndex)"><a :class="mt == marketIndex ? 'tagActive' : ''">{{marketItem.key}}</a></div>
										</td>
									</tr>
									<tr data_tr="2">
										<td>楼层</td>
										<td>
											<div @click="_clickAllF"><a :class="isAllF ? 'tagActive' : ''">全部</a></div>
										</td>
										<td>
											<div v-for="(floorItem, floorIndex) in sortF" @click="_clickF(floorItem.key)"><a :class="ft == floorItem.key ? 'tagActive' : ''">{{floorItem.key}}</a></div>
										</td>
									</tr>
									<tr data_tr="3">
										<td>主营</td>
										<td>
											<div @click="_clickAllZ"><a :class="isAllZ ? 'tagActive' : ''">全部</a></div>
										</td>
										<td>
											<div v-for="(catsItem, catsIndex) in cats" @click="_clickZ(catsItem.key,catsIndex)"><a :class="zt == catsIndex ? 'tagActive' : ''">{{catsItem.key}}</a></div>
										</td>
									</tr>
									<tr v-if="false">
										<td>类目</td>
										<td>
											<div @click="_clickAllC"><a :class="isAllC ? 'tagActive' : ''">全部</a></div>
										</td>
										<td>
											<div v-for="(categoriesItem, categoriesIndex) in categories" @click="_clickC(categoriesItem.key,categoriesIndex)"><a :class="ct == categoriesIndex ? 'tagActive' : ''">{{categoriesItem.key}}</a></div>
										</td>
									</tr>
								</table>
							</div>
							<div class="crumb-box">
								<ol class="breadcrumb">
									<!-- <li><a>大西豪</a></li> -->
									<li v-if="isAllM">
										<a v-if="isAllM" :class="isAllM ? 'active' : ''">全部市场</a>
									</li>
									<li v-if="market">
										<a :class="market ? 'active' : ''">{{market}}</a>
									</li>
									<li v-if="isAllF">
										<a v-if="isAllF" :class="isAllF ? 'active' : ''">全部楼层</a>
									</li>	
									<li v-if="floor">
										<a :class="floor ? 'active' : ''">{{floor}}</a>
									</li>

									<li v-if="isAllZ">
										<a v-if="isAllZ" :class="isAllZ ? 'active' : ''">全部主营</a>
									</li>	
									<li v-if="zhuying">
										<a :class="zhuying ? 'active' : ''">{{zhuying}}</a>
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
	import VueResource from 'vue-resource'
	import headerComponent from 'components/header'
	import footerComponent from 'components/footer'
	import 'bootstrap/dist/js/bootstrap.js'
	import gotop from 'components/goTop'
	import CkPagination from 'components/CkPagination'
	import CKHr from 'components/CKHr'
	import CKSearch from 'components/CkSearch'
	Vue.use(VueResource)

	export default{
		data(){
			return{
				storeAds:[],
		        markets:[],
		        stores:[],
		        floors:[],
		        sortF:[],
		        cats:[],
		        categories:[],
		        isAllM:true,
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
		        market:'',
		        floor:'',
		        zhuying:'',
		        cat:'',
		        mt:-1,
		        ct:-1,
		        zt:-1,
		        ft:-1,
		        isStore: false,
		        isActiveM:false,
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
				var store_id = t._source ? t._source.id : t._id
				window.open("./sellerAllProduct.html?store_id="+ store_id)
			},
			_goAdsMore(url){
		    	window.open(url)
		    },
			subPage (val) {
			  	this.page = val
			  	var market = this.market && '&market=' + this.market
			  	var zhuying = this.zhuying && '&main_cat='+this.zhuying
			  	var floor = this.floor && '&floor='+this.floor
			  	var q = this.q && '&q=' + this.q
		  		this.$http.get('/s1/searchs?type=store' + market + zhuying + floor + q +'&search_size=10&from=' + (val-1)*10)
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
			_clickM(m, mIndex){
				//console.log(m)
				this.isSearch = false
				this.isAllM = false
				this.isAllF = true
				this.isAllZ = true
				this.isAllC = true
				this.market = m
				this.mt = mIndex
				this.floor = ''
				this.zhuying = ''
				this.cat = ''
				this.q = ''
				this.ft = -1
				this.zt = -1
				this.page = 1
				this.$http.get('/s1/searchs?type=store' + '&market=' + m + '&search_size=10&from=0').then(
					function(res){
						this.floors = res.data[2].aggregations.floors.buckets
						this.sortF = []
						this.sortF[0] = this.floors[0]
						for( var i = 1 ; i < this.floors.length ; i ++){
							var fStr = this.floors[i].key
							for(var n = 0; n < this.sortF.length; n++){
								if( parseInt(fStr) <= parseInt(this.sortF[n].key)){
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
						this.stores = res.data[2].hits.hits
						this.total = res.data[2].hits.total
						this.pages = Math.ceil(this.total/this.pageSize)
					},function(err){
						console.log(err)
					}
				)
			},
			_clickAllM(){
				this.isSearch = false
				this.isAllM = true
				this.q = ''
				this.market = ''
				this.floor = ''
				this.ct = -1
				this.ft = 0
				this.page = 1
				this.$http.get('/s1/searchs?type=store' + '&market=' + this.market + '&search_size=10' + '&from=0')
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
				window.location.href = './visitingMarket.html'
				$('.ck-pagination-input input').val('')
			},
			_clickF(f){
				//console.log(f)
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
				if(this.market){
					this.$http.get('/s1/searchs?type=store' + '&market=' + this.market + '&search_size=10' + '&floor=' + f + '&from=0')
					.then(
						function(res){
							//console.log(this.categories)
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
				}else{
					this.$http.get('/s1/searchs?type=store' + '&floor=' + f +'&search_size=10&from=0')
					.then(
						function(res){
							//console.log(this.categories)
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
				}
			},
			_clickAllF(){
				this.isSearch = false
				this.isAllF = true
				this.isAllZ = true
				this.q = ''
				this.floor = ''
				this.zhuying = ''
				this.zt = -1
				this.ft = 0
				this.page = 1
				if(this.market){
					this.$http.get('/s1/searchs?type=store' + '&market=' + this.market + '&search_size=10' + '&from=0')
					.then(
						function(res){
							this.stores = res.data[2].hits.hits
							this.categories = res.data[2].aggregations.cates.buckets
							this.cats = res.data[2].aggregations.cats.buckets
							this.total = res.data[2].hits.total
							this.pages = Math.ceil(this.total/this.pageSize)
							this.cat = ''
						},
						function(err){
							console.log(err)
						}
					)
					//window.location.href = './visitingMarket.html?' + 'market=' + this.market + '&search_size=10' + '&from=0'
				}else if(!this.market){
					this.$http.get('/s1/searchs?type=store&search_size=10' + '&from=0')
					.then(
						function(res){
							this.stores = res.data[2].hits.hits
							this.categories = res.data[2].aggregations.cates.buckets
							this.cats = res.data[2].aggregations.cats.buckets
							this.total = res.data[2].hits.total
							this.pages = Math.ceil(this.total/this.pageSize)
							this.cat = ''
						},
						function(err){
							console.log(err)
						}
					)
				}
				$('.ck-pagination-input input').val('')
			},
			_clickZ(z,zIndex){
				//console.log(z)
				//console.log(this.floor)
				this.isSearch = false
				this.isAllC = true
				this.isAllZ = false
				this.zhuying = z
				this.zt = zIndex
				this.q = ''
				this.page = 1
				if(this.market && this.floor){
					this.$http.get('/s1/searchs?type=store' + '&market=' + this.market + '&floor=' + this.floor + '&main_cat=' + this.zhuying + '&search_size=10&from=0')
					.then(
						function(res){
							//console.log(this.categories)
							this.categories = res.data[2].aggregations.cates.buckets
							this.stores = res.data[2].hits.hits
							this.total = res.data[2].hits.total
							this.pages = Math.ceil(this.total/10)
							//console.log(this.pages)
						},
						function(err){
							console.log(err)
						}
					)
				}else if(this.market && !this.floor){
					this.$http.get('/s1/searchs?type=store' + '&market=' + this.market +  '&main_cat=' + this.zhuying + '&search_size=10&from=0')
					.then(
						function(res){
							//console.log(this.categories)
							this.categories = res.data[2].aggregations.cates.buckets
							this.stores = res.data[2].hits.hits
							this.total = res.data[2].hits.total
							this.pages = Math.ceil(this.total/10)
							//console.log(this.pages)
						},
						function(err){
							console.log(err)
						}
					)
				}else if(!this.market && this.floor){
					this.$http.get('/s1/searchs?type=store' + '&floor=' + this.floor+ '&main_cat=' + this.zhuying + '&search_size=10&from=0')
					.then(
						function(res){
							//console.log(this.categories)
							this.categories = res.data[2].aggregations.cates.buckets
							this.stores = res.data[2].hits.hits
							this.total = res.data[2].hits.total
							this.pages = Math.ceil(this.total/10)
							//console.log(this.pages)
						},
						function(err){
							console.log(err)
						}
					)
				}else{
					this.$http.get('/s1/searchs?type=store' + '&main_cat=' + this.zhuying + '&search_size=10&from=0')
					.then(
						function(res){
							//console.log(this.categories)
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
				if(this.market && this.floor){
					this.$http.get('/s1/searchs?type=store' + '&market=' + this.market + '&floor=' + this.floor + '&search_size=10&from=0')
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
				}else if(this.market && !this.floor){
					this.$http.get('/s1/searchs?type=store&search_size=10' + '&market=' + this.market + '&from=0')
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
				}else if(!this.market && this.floor){
					this.$http.get('/s1/searchs?type=store&search_size=10' + '&floor=' + this.floor + '&from=0')
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
					this.$http.get('/s1/searchs?type=store&search_size=10' + '&from=0')
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

			// this.$nextTick(function(){
	  //           var trs = $('.market-box table tr')
			// 	for (var i = 0; i < trs.length; i++) {
			// 		console.log($(trs[i]).height())
			// 		console.log($(trs[i]).css('min-height'))
			// 		if(parseInt($(trs[i]).height()) > parseInt($(trs[i]).css('min-height'))) {
						
			// 			$('.market-box table tr:nth-child(' + i+1 +') td:nth-child(2)').addClass('overheight')

			// 		} 
			// 	}
			// })
			

			!this.q && (this.isSearch = false)
			if(this.q){
				this.$http.get('/s1/searchs?type=store&search_size=10&from=0&q=' + this.q)
				.then(
					function(res){
						this.stores = res.data[2]&&res.data[2].hits&&res.data[2].hits.hits
						this.q_total = res.data[2]&&res.data[2].hits&&res.data[2].hits.total
						this.pages = Math.ceil(this.q_total/10)
					},
					function(err){
						console.log(err)
					}
				)
				this.$http.get('/s1/searchs?type=store&search_size=10' + '&from=0')
				.then(
					function(res){
						this.markets = res.data[2].aggregations.markets.buckets
						this.floors = res.data[2].aggregations.floors.buckets
						this.sortF.push(this.floors[0])
						for( var i = 1 ; i < this.floors.length ; i ++){
							var fStr = this.floors[i].key
							for(var n = 0; n < this.sortF.length; n++){
								if( parseInt(fStr) <= parseInt(this.sortF[n].key)){
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
				this.$http.get('/s1/searchs?type=store&search_size=10' + '&from=0')
				.then(
					function(res){
						this.markets = res.data[2].aggregations.markets.buckets
						this.floors = res.data[2].aggregations.floors.buckets
						this.sortF.push(this.floors[0])
						for( var i = 1 ; i < this.floors.length ; i ++){
							var fStr = this.floors[i].key
							for(var n = 0; n < this.sortF.length; n++){
								if( parseInt(fStr) <= parseInt(this.sortF[n].key)){
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
			this.$http.get('/api/active_cookaads'+'?page_name=market')
			.then(
				function(res){
					this.storeAds = res.data.data
					//console.log(this.storesAds)
				},function(err){
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