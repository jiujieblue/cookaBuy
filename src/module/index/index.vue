<template>
	<div>
		<headerComponent pageName="indexPage" @subKeyword="_subkeyword"></headerComponent>
		<div class="container">
			<div class="row">
				<div class="col-md-12 trim-col">
					<div class="index">
						<div class="index-top">
							<div class="index-category">
								<div class="index-category-block">
									<a class="index-category-lv-1">女装</a>
									<a class="index-category-lv-2">连衣裙</a>
									<a class="index-category-lv-2">牛仔装</a>
									<a class="index-category-lv-2">毛呢外套</a>
									<a class="index-category-lv-2">短外套</a>
									<a class="index-category-lv-2">卫衣</a>
									<a class="index-category-lv-2">马甲</a>
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
									<a class="index-category-lv-2">T恤</a>
									<a class="index-category-lv-2">衬衫</a>
								</div>
								<div class="index-category-block">
									<a class="index-category-lv-1">家具</a>
									<a class="index-category-lv-2">文胸</a>
									<a class="index-category-lv-2">睡裙</a>
									<a class="index-category-lv-2">睡袍</a>
									<a class="index-category-lv-2">吊带</a>
									<a class="index-category-lv-2">保暖</a>
									<a class="index-category-lv-2">抹胸</a>
									<a class="index-category-lv-2">内裤</a>
								</div>
								<div class="index-category-block">
									<a class="index-category-lv-1">女鞋</a>
									<a class="index-category-lv-2">低帮鞋</a>
									<a class="index-category-lv-2">高帮鞋</a>
									<a class="index-category-lv-2">靴子</a>
									<a class="index-category-lv-2">帆布鞋</a>
									<a class="index-category-lv-2">拖鞋</a>
									<a class="index-category-lv-2">凉鞋</a>
								</div>
							</div>
							<div class="index-carousel" >
								<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="3000">
										<!-- Indicators -->
									<ol class="carousel-indicators">
										<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
										<li data-target="#carousel-example-generic" data-slide-to="1"></li>
										<li data-target="#carousel-example-generic" data-slide-to="2"></li>
									</ol>
									<!-- Wrapper for slides -->
									<div class="carousel-inner" role="listbox">
										<div class="item active">
											<img src="../../assets/images/indexBanner01.jpg" alt="...">
										</div>
										<div class="item">
											<img src="../../assets/images/indexBanner02.jpg" alt="...">
										</div>
										<div class="item">
											<img src="../../assets/images/indexBanner03.jpg" alt="...">
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
								<div class="index-note-body">
									<div class="img">
										<img src="../../assets/images/announcement.png" alt="">
									</div>
									<p>暂无公告</p>
								</div>
								<div class="index-note-items" v-if="false">
									<a class="index-note-item" v-for="(announcementsItem, announcementsIndex) in announcements">
										[公告] {{announcementsItem.title}}
									</a>
									<!--<a class="index-note-item">
										[公告] 我是标题我是标题我是标题我是标题我是标题
									</a>
									<a class="index-note-item">
										[公告] 我是标题我是标题我是标题我是标题我是标题
									</a>-->
								</div>
							</div>
						</div>
						<hr />
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
									<div class="index-product" v-for="(productsItem, productsIndex) in products">
										<a class="index-product-link" @click="_toRecommendDetail(productsIndex)">
											<img :title="productsItem.title" :src="productsItem.pic_url" />
										</a>
										<div class="index-product-price">
											¥ {{productsItem.price}}
											<a class="index-product-fav" title="收藏商品" style="display:none">
												<span class="icon-shoucang" />
											</a>
										</div>
										<div class="index-product-extra">
											<a class="index-product-store" @click="_toProStore(productsIndex)">
												{{productsItem.store.store_name}}
											</a>
											<span class="index-product-market">
												{{productsItem.store.store_number}} {{productsItem.store.market}}
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
															<img :title="sideproductsItem.title" :src="sideproductsItem.pic_url">
														</div>
														<a ><span class="store">{{sideproductsItem.nick}}</span></a>
														<span class="extra">{{sideproductsItem.store.store_number}} {{sideproductsItem.store.market}}
														</span>
														<span>{{_times(sideproductsItem.list_time)}}</span>
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
                <div class="index-store" v-for="(storesItem, storesIndex) in stores" @click="_toStore(storesIndex)">
                  <div class="index-store-info">
                    <div class="index-store-name">
                      {{storesItem.store_name}}
                    </div>
                    <div class="index-store-market">
                      {{storesItem.market}} {{storesItem.store_number}}
                    </div>

                    <a class="index-store-link" @click="_toStore(storesIndex)">
                      进店逛逛
                    </a>
                  </div>
                  <a class="index-store-product">
                    <img :src="storesItem.store_logo" />
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
											¥ {{girlsItem.price}}
											<a class="index-product-fav" title="收藏商品" style="display:none">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a class="index-product-store" @click="_toGirlStore(girlsIndex)">
												{{girlsItem.store.store_name}}
											</a>
											<span class="index-product-market">
												{{girlsItem.store.store_number}} {{girlsItem.store.market}}
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
											<img :title="boysItem.title" :src="boysItem.pic_url" />
										</a>
										<div class="index-product-price">
											¥ {{boysItem.price}}
											<a class="index-product-fav" title="收藏商品" style="display:none">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a class="index-product-store" @click="_toBoyStore(boysIndex)">
												{{boysItem.store.store_name}}
											</a>
											<span class="index-product-market">
												{{boysItem.store.store_number}} {{boysItem.store.market}}
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
											¥ {{maternitsItem.price}}
											<a class="index-product-fav" title="收藏商品" style="display:none">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a class="index-product-store" @click="_toMaternitStore(maternitsIndex)">
												{{maternitsItem.store.store_name}}
											</a>
											<span class="index-product-market">
												{{maternitsItem.store.store_number}} {{maternitsItem.store.market}}
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
											¥ {{childrensItem.price}}
											<a class="index-product-fav" title="收藏商品" style="display:none">
												<span class="icon-jiahao" />
											</a>
										</div>
										<div class="index-product-extra">
											<a class="index-product-store" @click="_toChildrenStore(childrensIndex)">
												{{childrensItem.store.store_name}}
											</a>
											<span class="index-product-market">
												{{childrensItem.store.store_number}} {{childrensItem.store.market}}
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
	        total_entries:''
    	}
	},
	components:{
		headerComponent,
		footerComponent,
		gotop
	},
	methods:{
		_subkeyword(keyword){
			window.location.href = "./search.html?q="+keyword
		},
		_changePro(){
			this.$http.get('/api/recommends'+'?page_name=index&location=left&page_size=8&page='+this.init_page)
	    	.then(
	           function(res){
	             //console.log(res)
	            this.products = res.data.data
	            this.init_page ++ 
	      		if(this.init_page > this.total_entries ){
	      			this.init_page = 1
	      		}
	             console.log(this.products)
	           },function(err){
	               console.log(err)
	         }
	       )
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
		_goMore(str){
			window.open("./search.html?q="+ str)
		},
		_toStore(t){
			window.open("./sellerAllProduct.html?store_id="+this.stores[t].id)
		},
		_toProStore(t){
			window.open("./sellerAllProduct.html?store_id="+this.products[t].store.id)
		},
		_toGirlStore(t){
			window.open("./sellerAllProduct.html?store_id="+this.girls[t].store.id)
		},
		_toBoyStore(t){
			window.open("./sellerAllProduct.html?store_id="+this.boys[t].store.id)
		},
		_toMaternitStore(t){
			window.open("./sellerAllProduct.html?store_id="+this.maternits[t].store.id)
		},
		_toChildrenStore(t){
			window.open("./sellerAllProduct.html?store_id="+this.childrens[t].store.id)
		},
		_toRecommendDetail(t){
			window.open("./detail.html?"+this.products[t].num_iid)
		},
		_toSideProductDetail(t){
			window.open("./detail.html?"+this.sideproducts[t].num_iid)
		},
		_toGirlDetail(t){
			window.open("./detail.html?"+this.girls[t].num_iid)
		},
		_toBoyDetail(t){
			window.open("./detail.html?"+this.boys[t].num_iid)
		},
		_toMaternitDetail(t){
			window.open("./detail.html?"+this.maternits[t].num_iid)
		},
		_toChildrenDetail(t){
			window.open("./detail.html?"+this.childrens[t].num_iid)
		}
	},
	mounted(){

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
		this.$http.get('/api/recommend_stores')
		.then(
			function(res){
				//console.log(res.data.data)
				this.recommend_data = res.data.data
	        	for (var i = 0 ; i < 5 ; i ++){
	          		this.stores.push(this.recommend_data[i].store)
	        	}
			},
			function(err){
				console.log(err)
			}
		)
    	this.$http.get('/api/recommends'+'?page_name=index&location=left&page_size=8&page=1')
    	.then(
           function(res){
             //console.log(res)
             this.products = res.data.data
             for(var i = 0 ; i < this.products.length ; i++){
             	this.products[i].pic_url += '_210x210.jpg'
             }
           },function(err){
               console.log(err)
         }
       )
	 	this.$http.get('/api/recommends'+'?page_name=index&location=right')
		.then(
        function(res){
          //console.log(res)
        	this.sideproducts = res.data.data
        	this.total_entries  = res.data.total_entries
        	this.init_page++
        	for(var i = 0 ; i < this.sideproducts.length ; i++){
             	this.sideproducts[i].pic_url += '_80x80.jpg'
             }
             
        },function(err){
          console.log(err)
        }
      )

		var me = this
		var timer = setInterval(function(){
			$('#side').fadeOut('swing',function(){
				var s = me.sideproducts.splice(0,6)
				me.sideproducts = me.sideproducts.concat(s)
				$('#side').fadeIn(500)
			})
	    },4000)
    	this.$http.get('/api/recommends'+'?page_name=index&location=girl&page_size=8')
    	.then(
	        function(res){
	          //console.log(res)
	          this.girls = res.data.data
	          //console.log(this.girls)
	          for(var i = 0 ; i < this.girls.length ; i++){
             	this.girls[i].pic_url += '_270x270.jpg'
              }
	        },function(err){
	          console.log(err)
	        }
	    )
    	this.$http.get('/api/recommends'+'?page_name=index&location=boy&page_size=8')
    	.then(
        function(res){
          //console.log(res)
          this.boys = res.data.data
      	  for(var i = 0 ; i < this.boys.length ; i++){
         	this.boys[i].pic_url += '_270x270.jpg'
          }
          //console.log(this.boys)
        },function(err){
          console.log(err)
        }
      )
    	this.$http.get('/api/recommends'+'?page_name=index&location=maternit&page_size=8')
    	.then(
        function(res){
          //console.log(res)
          this.maternits = res.data.data
          //console.log(this.maternits)
          for(var i = 0 ; i < this.maternits.length ; i++){
             	this.maternits[i].pic_url += '_270x270.jpg'
           }
        },function(err){
          console.log(err)
        }
      )
    	this.$http.get('/api/recommends'+'?page_name=index&location=children&page_size=8')
    	.then(
        function(res){
          //console.log(res)
          this.childrens = res.data.data
          for(var i = 0 ; i < this.childrens.length ; i++){
         	this.childrens[i].pic_url += '_270x270.jpg'
          }
          //console.log(this.childrens)
        },function(err){
          console.log(err)
        }
      )
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
