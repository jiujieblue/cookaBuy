<template>
	<div>
		<headerComponent pageName="indexPage" @subStor="_subStor" @subKeyword="_subkeyword"></headerComponent>
		<div class="container">
			<div class="row">
				<div class="col-md-12 trim-col">
					<div class="index">
						<div class="index-top">
							<div class="index-category">
								<div class="index-category-block">
									<a class="index-category-lv-1">女装</a>
									<a class="index-category-lv-2">毛呢外套</a>
									<a class="index-category-lv-2">连衣裙</a>
									<a class="index-category-lv-2">卫衣</a>
									<a class="index-category-lv-2">毛衣</a>
									<a class="index-category-lv-2">短外套</a>
									<a class="index-category-lv-2">牛仔裤</a>
									<a class="index-category-lv-2">T恤</a>
									<a class="index-category-lv-2">衬衫</a>
								</div>
								<div class="index-category-block">
									<a class="index-category-lv-1">男装</a>
									<a class="index-category-lv-2">羽绒服</a>
									<a class="index-category-lv-2">毛呢大衣</a>
									<a class="index-category-lv-2">棉衣</a>
									<a class="index-category-lv-2">毛衣</a>
									<a class="index-category-lv-2">牛仔裤</a>
									<a class="index-category-lv-2">马甲</a>
									<a class="index-category-lv-2">衬衫</a>
									<a class="index-category-lv-2">T恤</a>
								</div>
								<div class="index-category-block">
									<a class="index-category-lv-1">孕妇装</a>
									<a class="index-category-lv-2">孕妇装</a>
									<a class="index-category-lv-2">防辐射</a>
									<a class="index-category-lv-2">孕妇裤</a>
									<a class="index-category-lv-2">孕妇袜</a>
									<a class="index-category-lv-2">哺乳装</a>
									<a class="index-category-lv-2">哺乳文胸</a>
									<a class="index-category-lv-2">瘦身塑体衣</a>
								</div>
								<div class="index-category-block">
									<a class="index-category-lv-1">童装</a>
									<a class="index-category-lv-2">童外套</a>
									<a class="index-category-lv-2">棉衣/棉服</a>
									<a class="index-category-lv-2">童卫衣</a>
									<a class="index-category-lv-2">打底裤</a>
									<a class="index-category-lv-2">童T恤</a>
								</div>
							</div>
							<div class="index-carousel" >
								<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="3000">
										<!-- Indicators -->
									<ol class="carousel-indicators">
										<li v-for="(adsItem, adsIndex) in ads" data-target="#carousel-example-generic" :data-slide-to="adsIndex" :class="adsIndex? '':'active'"></li>
									</ol>
									<!-- Wrapper for slides -->
									<div class="carousel-inner" role="listbox">
										<div :class="adsIndex? 'item':'item active'" v-for="(adsItem, adsIndex) in ads" @click="_goAdsMore(adsItem.activity_url)">
											<img :src="adsItem.pic_url" :title="adsItem.tip" alt="adsItem.tip">
										</div>
									</div>
									<!-- Controls -->
									<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
										<span class="icon-xiangqian"></span>
									</a>
									<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
										<span class="icon-xianghou"></span>
									</a>
								</div>
							</div>
							<div class="index-note">
								<h4 class="index-note-title">
									<span class="icon-gonggao"></span><a>商城公告</a>
									<a class="index-note-more">
										<span class="icon-gengduo"></span>
									</a>
								</h4>
								<!-- <div class="index-note-body">
									<div v-if="false" class="img">
										<img src="../../assets/images/announcement.png" alt="">
									</div>
									<p v-if="false">暂无公告</p>
								</div> -->
								<div class="index-note-items">
									<a href="./publicDetail.html" class="index-note-item">
										[公告] 柯咔商城系统升级通知及活动优惠政策预告
									</a>
									<!--<a class="index-note-item" v-for="(announcementsItem, announcementsIndex) in announcements">
										[公告] {{announcementsItem.title}}
									</a>
									<a class="index-note-item">
										[公告] 我是标题我是标题我是标题我是标题我是标题
									</a>
									<a class="index-note-item">
										[公告] 我是标题我是标题我是标题我是标题我是标题
									</a>-->
								</div>
							</div>
						</div>
						<!-- new -->
						<div class="index-block index-block-new">
							<h4 class="index-block-title">
								<span class="index-block-title-label">
								NEW
								</span>
								新品上架

								<a @click="_changePro" class="index-block-title-aside">
									换一批
									<span class="icon-huanyipi" />
								</a>
							</h4>

							<div class="index-block-body">
								<div class="left">
									<div class="index-product" v-for="(productsItem, productsIndex) in products" v-if="productsIndex < 8">
										<a class="index-product-link" @click="_toRecommendDetail(productsIndex)">
											<img :title="productsItem.item.title" :src="productsItem.pic_url" />
										</a>
										<div class="index-product-price">
											¥ {{productsItem.item.price}}
											<a class="index-product-fav" title="收藏商品" style="display:none">
												<span class="icon-shoucang" />
											</a>
										</div>
										<div class="index-product-extra">
											<a class="index-product-store" @click="_toProStore(productsIndex)">
												{{productsItem.item.store&&productsItem.item.store.store_name}}
											</a>
											<span class="index-product-market">
												{{productsItem.item.store.location.split("-").splice(0,1).concat(productsItem.item.store.location.split("-").splice(2,2)).join("-")}}
											</span>
										</div>
									</div>
								</div>
								<div class="right">
									<div id="side" class="carousel">
										<ul class="carousel-list">
											<li class="carousel-list-items" v-for="(sideproductsItem, sideproductsIndex) in sideproducts" v-if="sideproductsIndex < 6" @click="_toSideProductDetail(sideproductsIndex)">
												<a>
													<div class="product">
														<div class="img">
															<img :title="sideproductsItem.item.title" :src="sideproductsItem.pic_url">
														</div>
														<a><span class="store">{{sideproductsItem.item.store&&sideproductsItem.item.store.store_name}}</span></a>
														<div class="extra">
														{{sideproductsItem.item.store.location.split("-").splice(0,1).concat(sideproductsItem.item.store.location.split("-").splice(2,2)).join("-")}}
														</div>
														 <div class="time">
														 {{_times(sideproductsItem.list_time)}}
														 </div>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<!-- hot -->
						<div class="index-block index-block-store">
							<h4 class="index-block-title">
								<span class="index-block-title-label">
								HOT
								</span>
								推荐店铺

								<a href="./visitingMarket.html" title="更多" class="index-block-title-aside index-block-title-aside-lg" >
									<span class="icon-more" />
								</a>
							</h4>

							<div class="index-block-body">
				                <div class="index-store" v-for="(storesItem, storesIndex) in stores" v-if="storesIndex < 5">
				                  <div class="index-store-info">
				                    <div class="index-store-name">
				                      {{storesItem.store_name}}
				                    </div>
				                    <div class="index-store-market">
				                      {{storesItem.location}}
				                    </div>

				                    <a class="index-store-link" @click="_toStore(storesIndex)">
				                      进店逛逛
				                    </a>
				                  </div>
				                  <a class="index-store-product" @click="_toStore(storesIndex)">
				                    <img :src="storesItem.pic_url" />
				                  </a>
				                </div>
							</div>
						</div>
						<!-- girl -->
						<div class="index-block index-block-girl">
							<h4 class="index-block-title">
								<span class="index-block-title-label">
								GIRL
								</span>
								女装

								<a title="更多" class="index-block-title-aside index-block-title-aside-lg" @click="_goMore('女装')">
									<span class="icon-more" />
								</a>
							</h4>

							<div class="index-block-body">
								<div class="left">
									<div class="index-product" v-for="(girlsItem, girlsIndex) in girls" >
										<a class="index-product-link" @click="_toGirlDetail(girlsIndex)">
											<img :title="girlsItem.title" :src="girlsItem.pic_url" />
										</a>
										<div class="index-product-price">
											¥ {{girlsItem.item.price}}
											<a class="index-product-fav" title="收藏商品" style="display:none">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a class="index-product-store" @click="_toGirlStore(girlsIndex)">
												{{girlsItem.item.store&&girlsItem.item.store.store_name}}
											</a>
											<span class="index-product-market">
												{{girlsItem.item.store.location.split("-").splice(0,1).concat(girlsItem.item.store.location.split("-").splice(2,2)).join("-")}}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- boy -->
						<div class="index-block index-block-boy">
							<h4 class="index-block-title">
								<span class="index-block-title-label">
								BOY
								</span>
								男装

								<a title="更多" class="index-block-title-aside index-block-title-aside-lg" @click="_goMore('男装')">
									<span class="icon-more" />
								</a>
							</h4>

							<div class="index-block-body">
								<div class="left">
									<div class="index-product" v-for="(boysItem, boysIndex) in boys" >
										<a class="index-product-link" @click="_toBoyDetail(boysIndex)">
											<img :title="boysItem.item.title" :src="boysItem.pic_url" />
										</a>
										<div class="index-product-price">
											¥ {{boysItem.item.price}}
											<a class="index-product-fav" title="收藏商品" style="display:none">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a class="index-product-store" @click="_toBoyStore(boysIndex)">
												{{boysItem.item.store&&boysItem.item.store.store_name}}
											</a>
											<span class="index-product-market">
												{{boysItem.item.store.location.split("-").splice(0,1).concat(boysItem.item.store.location.split("-").splice(2,2)).join("-")}}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- maternit -->
						<div class="index-block index-block-maternit">
							<h4 class="index-block-title">
								<span class="index-block-title-label">
								MATERNIT
								</span>
								孕妇装

								<a title="更多" class="index-block-title-aside index-block-title-aside-lg" @click="_goMore('孕妇装')">
									<span class="icon-more" />
								</a>
							</h4>

							<div class="index-block-body">
								<div class="left">
									<div class="index-product" v-for="(maternitsItem, maternitsIndex) in maternits" >
										<a class="index-product-link" @click="_toMaternitDetail(maternitsIndex)">
											<img :title="maternitsItem.title" :src="maternitsItem.pic_url" />
										</a>
										<div class="index-product-price">
											¥ {{maternitsItem.item.price}}
											<a class="index-product-fav" title="收藏商品" style="display:none">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a class="index-product-store" @click="_toMaternitStore(maternitsIndex)">
												{{maternitsItem.item.store&&maternitsItem.item.store.store_name}}
											</a>
											<span class="index-product-market">
												{{maternitsItem.item.store.location.split("-").splice(0,1).concat(maternitsItem.item.store.location.split("-").splice(2,2)).join("-")}}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- children -->
						<div class="index-block index-block-children">
							<h4 class="index-block-title">
								<span class="index-block-title-label">
								CHILDREN
								</span>
								童装

								<a title="更多" class="index-block-title-aside index-block-title-aside-lg" @click="_goMore('童装')">
									<span class="icon-more" />
								</a>
							</h4>

							<div class="index-block-body">
								<div class="left">
									<div class="index-product" v-for="(childrensItem, childrensIndex) in childrens" >
										<a class="index-product-link" @click="_toChildrenDetail(childrensIndex)">
											<img :title="childrensItem.title" :src="childrensItem.pic_url" />
										</a>
										<div class="index-product-price">
											¥ {{childrensItem.item.price}}
											<a class="index-product-fav" title="收藏商品" style="display:none">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a class="index-product-store" @click="_toChildrenStore(childrensIndex)">
												{{childrensItem.item.store&&childrensItem.item.store.store_name}}
											</a>
											<span class="index-product-market">
												{{childrensItem.item.store.location.split("-").splice(0,1).concat(childrensItem.item.store.location.split("-").splice(2,2)).join("-")}}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<gotop></gotop>
					</div>
				</div>
			</div>
		</div>
		<footerComponent></footerComponent>
	</div>
</template>

<script>
import Vue from 'vue'
import headerComponent from 'components/header'
import footerComponent from 'components/footer'
import gotop from 'components/goTop'
import 'bootstrap/dist/js/bootstrap.js'
const VueResource = require('vue-resource')
Vue.use(VueResource)

export default {
	data () {
		return {
			leftnav:[],
			ads:[],
	        recommend_data:[],
	        stores:[],
	        products:[],
	        sideproducts:[],
	        list_time:[],
	        announcements:[],
	        girls:[],
	        boys:[],
	        maternits:[],
	        childrens:[],
	        init_page: 1,
	        total_pages:'',
	        isStore: false
    	}
	},
	components:{
		headerComponent,
		footerComponent,
		gotop
	},
	methods:{
		_subStor (n) {
	  		if(n == 0){
	  			this.isStore = false
	  		}else{
	  			this.isStore = true
	  		}
	  	},
		_subkeyword(keyword){
			if(this.isStore){
  			window.location.href = './visitingMarket.html?q='+keyword
  		}else{
  			window.location.href = './search.html?q='+ keyword +'&from=1'
  		}
		},
		_changePro(){
			var p = this.products.splice(0,8)
			this.products = this.products.concat(p)
		},
		_times (t) {
			var date = new Date().getTime()
			var subTime = date - t
			subTime = subTime/1000/60
			if (subTime < 1) {
				return '1分钟前'
			}
			else if (subTime < 1 * 60) {
				return parseInt(subTime) + '分钟前'
			}
			else if (subTime < 1 * 60 * 24){
				return parseInt(subTime/60) + '小时前'
			}
			else if (subTime < 1 * 60 * 24 * 30){
				return parseInt(subTime/60/24) + '天前'
			}
			else {
				return parseInt(subTime/60/24/30) + '个月前'
			}
	    },
	    _goAdsMore(url){
	    	window.open(url)
	    },
		_goMore(str){
			window.open("./search.html?q="+ str)
		},
		_toStore(t){
			window.open("./sellerAllProduct.html?store_id="+this.stores[t].store_id)
		},
		_toProStore(t){
			window.open("./sellerAllProduct.html?store_id="+this.products[t].item.store.id)
		},
		_toGirlStore(t){
			window.open("./sellerAllProduct.html?store_id="+this.girls[t].item.store.id)
		},
		_toBoyStore(t){
			window.open("./sellerAllProduct.html?store_id="+this.boys[t].item.store.id)
		},
		_toMaternitStore(t){
			window.open("./sellerAllProduct.html?store_id="+this.maternits[t].item.store.id)
		},
		_toChildrenStore(t){
			window.open("./sellerAllProduct.html?store_id="+this.childrens[t].item.store.id)
		},
		_toRecommendDetail(t){
			window.open("./detail.html?"+this.products[t].item.id)
		},
		_toSideProductDetail(t){
			window.open("./detail.html?"+this.sideproducts[t].item.id)
		},
		_toGirlDetail(t){
			window.open("./detail.html?"+this.girls[t].item.id)
		},
		_toBoyDetail(t){
			window.open("./detail.html?"+this.boys[t].item.id)
		},
		_toMaternitDetail(t){
			window.open("./detail.html?"+this.maternits[t].item.id)
		},
		_toChildrenDetail(t){
			window.open("./detail.html?"+this.childrens[t].item.id)
		}
	},
	mounted(){

		var as = $('.index-category-block a')
		for(var i = 0; i < as.length;i++)
			as[i].addEventListener('click',function(){
			console.log($(this).html())
			var str = $(this).html()
			window.open("./search.html?q="+ str)
		})
		$('.index-carousel').hover(
			function(){
				$('.icon-xiangqian').css('left','0').fadeIn('normal')
				$('.icon-xianghou').css('right','0').fadeIn('normal')
			},
			function(){
				$('.icon-xiangqian').css('left','-50px').fadeOut('normal')
				$('.icon-xianghou').css('right','-50px').fadeOut('normal')
			}
		)
		// this.$http.get('/api/recommend_stores')
		// .then(
		// 	function(res){
		// 		//console.log(res.data.data)
		// 		this.recommend_data = res.data.data
		// 		console.log(res.data.data)
	 //        	for (var i = 0 ; i < 5 ; i ++){
	 //          		this.stores.push(this.recommend_data[i].store)
	 //        	}
		// 	},
		// 	function(err){
		// 		console.log(err)
		// 	}
		// )
		this.$http.get('/api/index')
		.then(
			function(res){
				//console.table(res.data.cats)
				//this.leftnav = res.data.cats // 左边导航

				//this.ads = res.data.ads
				if(res.data.ads){
					this.ads = res.data.ads // 广告
				}

				//this.products = res.data.left 
				if(res.data.left){
					this.products = res.data.left // 左边
					// for(var i = 0 ; i < this.products.length ; i++){
					// 	this.products[i].pic_url += '_210x210.jpg'
					// }
				}

				//this.sideproducts = res.data.right
				if(res.data.right){	
					this.sideproducts = res.data.right // 右边
					// for(var i = 0 ; i < this.sideproducts.length ; i++){
					// 	this.sideproducts[i].pic_url += '_80x80.jpg'
					// }
				}

				//this.recommend_data = res.data.stores
				if(res.data.stores){
					this.stores = res.data.stores // 推荐店铺
				}

				//this.girls = res.data.girl 
				if(res.data.girl){
					this.girls = res.data.girl // 女装
					// for(var i = 0 ; i < this.girls.length ; i++){
					// 	this.girls[i].pic_url += '_270x270.jpg'
					// }
				}

				//this.boys = res.data.boy
				if(res.data.boy){
					this.boys = res.data.boy //男装
					// for(var i = 0 ; i < this.boys.length ; i++){
					// 	this.boys[i].pic_url += '_270x270.jpg'
					// }
				}

				//this.maternits = res.data.maternit
				if(res.data.maternit){
					this.maternits = res.data.maternit //孕妇装
					// for(var i = 0 ; i < this.maternits.length ; i++){
					// 	this.maternits[i].pic_url += '_270x270.jpg'
					// }
				}

				//this.childrens = res.data.children
				if(res.data.children){
					this.childrens = res.data.children //童装
					// for(var i = 0 ; i < this.childrens.length ; i++){
					// 	this.childrens[i].pic_url += '_270x270.jpg'
					// }
				}
			},function(err){
				console.log(err)
			}
		)

		//右边栏图片切换效果
		var me = this
		var timer = setInterval(function(){
			$('#side').fadeOut('swing',function(){
				var s = me.sideproducts.splice(0,6)
				me.sideproducts = me.sideproducts.concat(s)
				$('#side').fadeIn(500)
			})
	    },4000)
    	
    	// this.$http.get('/api/bulletins'+'?type=0')
    	// .then(
     //    function(res){
     //      //console.log(res)
     //      this.announcements = res.data.data
     //      //console.log(this.announcements)
     //    },function(err){
     //      console.log(err)
     //    }
     //  )
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../../assets/css/icons.css';
@import "../../assets/less/index.less";
@import "../../assets/less/public.less";
@import "../../assets/less/C.less";
</style>
