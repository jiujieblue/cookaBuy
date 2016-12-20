<template>
	<div>
		<headerComponent pageName="hotPage"  @subKeyword="_subkeyword"></headerComponent>
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
											<swiper-slide v-for="(sliderItem, sliderIndex) in sliderData">
												<a @click="_toSliderDetail(sliderIndex)"><img :src="sliderItem.pic_url"></a>
												<div>
													<p>¥{{sliderItem.price}}</p>
													<p @click="_toSliderDetail(sliderIndex)">{{sliderItem.title}}</p>
												</div>
												<!-- <div>
													<span><a @click="_toSliderStore(sliderIndex)">{{sliderItem.store.store_name}}</a></span>
													<span>{{sliderItem.store.market}} {{sliderItem.store.store_number}}</span>
												</div> -->
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
										<span style="display: none;" class="hotsalepage-left-womenhotsale-top-moreicon icon-more" />
									</div>
									<hr class="ck-hr"/>
									<div class="hotsalepage-left-womenhotsale-links">
										<ul>
											<li><img src="../../assets/images/hotsale_women.jpg"/></li>
											<li v-for="(girlItem, girlIndex) in girlData" :class="_reGirlCla(girlIndex)">
												<div class="hotsalepage-left-womenhotsale-links-item">
													<a @click="_toGirlDetail(girlIndex)"><img class="hotsalepage-left-womenhotsale-links-item-wimg" :src="girlItem.pic_url" /></a>
													<span class="hotsalepage-left-womenhotsale-links-item-price">¥{{girlItem.price}}</span>
													<span :title="girlItem.title" class="hotsalepage-left-womenhotsale-links-item-title"><a @click="_toGirlDetail(girlIndex)">{{girlItem.title}}</a></span>
													<span class="hotsalepage-left-womenhotsale-links-item-spanleft"><a @click="_toGirlStore(girlIndex)">{{girlItem.store.store_name}}</a></span>
													<span class="hotsalepage-left-womenhotsale-links-item-spanright">{{girlItem.store.market}}{{girlItem.store.store_number}}</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div class="hotsalepage-left-manhotsale clearfix">
									<div class="hotsalepage-left-manhotsale-top">
										<span class="hotsalepage-left-manhotsale-top-hotthree">HOT</span>
										<span class="hotsalepage-left-manhotsale-top-hotthreetitle">男装爆款</span>
										<span style="display: none;" class="hotsalepage-left-manhotsale-top-moreicon icon-more"></span>
									</div>
									<hr class="ck-hr"/>
									<div class="hotsalepage-left-manhotsale-links">
										<ul>
											<li><img src="../../assets/images/hotsale_man.jpg"/></li>
											<li v-for="(boyItem, boyIndex) in boyData" :class="_reBoyCla(boyIndex)">
												<div class="hotsalepage-left-manhotsale-links-item">
													<a @click="_toBoyDetail(boyIndex)"><img class="hotsalepage-left-manhotsale-links-item-mimg" :src="boyItem.pic_url"/></a>
													<span class="hotsalepage-left-manhotsale-links-item-price">¥{{boyItem.price}}</span>
													<span :title="boyItem.title" class="hotsalepage-left-manhotsale-links-item-title"><a @click="_toBoyDetail(boyIndex)">{{boyItem.title}}</a></span>
													<span class="hotsalepage-left-manhotsale-links-item-spanleft"><a @click="_toBoyStore(boyIndex)">{{boyItem.store.store_name}}</a></span>
													<span class="hotsalepage-left-manhotsale-links-item-spanright">{{boyItem.store.market}}{{boyItem.store.store_number}}</span>
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
										<li v-for="(rightItem, rightIndex) in rightData">
											<div class="hotsalepage-right-links-item">
												<span class="hotsalepage-right-links-item-hotnum">{{rightIndex+1}}</span>
												<a @click="_toRightDetail(rightIndex)"><img class="hotsalepage-right-links-item-himg" :src="rightItem.pic_url"/></a>
												<span class="hotsalepage-right-links-item-price">¥{{rightItem.price}}</span>
												<span :title="rightItem.title" class="hotsalepage-right-links-item-title"><a @click="_toRightDetail(rightIndex)">{{rightItem.title}}</a></span>
												<span class="hotsalepage-right-links-item-spanleft"><a @click="_toRightStore(rightIndex)">{{rightItem.store.store_name}}</a></span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<gotop></gotop>
		</div>
		<footerComponent></footerComponent>
	</div>
</template>

<script>
	import Vue from 'vue'
	import AwesomeSwiper from 'vue-awesome-swiper'
	import headerComponent from 'components/header'
	import footerComponent from 'components/footer'
	import gotop from 'components/goTop'
	const VueResource = require('vue-resource')
	Vue.use(VueResource)
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
		        },
		        sliderData:[],
		        rightData:[],
		        girlData:[],
		        boyData:[]
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
			_reGirlCla (i) {
				if(i > 1){
				console.log(i)
					return "girlLineTwo"
				}
			},
			_reBoyCla (i) {
				if(i > 1){
				console.log(i)
					return "boyLineTwo"
				}
			},
			_toSliderStore(t){
				window.open("./sellerAllProduct.html?store_id="+this.sliderData[t].store.id)
			},
			_toRightStore(t){
				window.open("./sellerAllProduct.html?store_id="+this.rightData[t].store.id)
			},
			_toGirlStore(t){
				window.open("./sellerAllProduct.html?store_id="+this.girlData[t].store.id)
			},
			_toBoyStore(t){
				window.open("./sellerAllProduct.html?store_id="+this.boyData[t].store.id)
			},
			_toSliderDetail(t){
				window.open("./detail.html?"+this.sliderData[t].num_iid)
			},
			_toRightDetail(t){
				window.open("./detail.html?"+this.rightData[t].num_iid)
			},
			_toGirlDetail(t){
				window.open("./detail.html?"+this.girlData[t].num_iid)
			},
			_toBoyDetail(t){
				window.open("./detail.html?"+this.boyData[t].num_iid)
			}
		},
		mounted(){
			this.$http.get('/api/recommends'+'?page_name=hot&location=top&page_size=8')
	    	.then(
		        function(res){
		          //console.log(res)
		          this.sliderData = res.data.data
		          console.log(this.sliderData)
		          for(var i = 0 ; i < this.sliderData.length ; i++){
	             	this.sliderData[i].pic_url += '_250x250.jpg'
	              }
		        },function(err){
		          console.log(err)
		        }
	    	)
	    	this.$http.get('/api/recommends'+'?page_name=hot&location=right&page_size=5')
	    	.then(
		        function(res){
		          //console.log(res)
		          this.rightData = res.data.data
		          console.log(this.rightData)
		          for(var i = 0 ; i < this.rightData.length ; i++){
	             	this.rightData[i].pic_url += '_180x180.jpg'
	              }
		        },function(err){
		          console.log(err)
		        }
	    	)
	    	this.$http.get('/api/recommends'+'?page_name=hot&location=girl&page_size=6')
	    	.then(
		        function(res){
		          //console.log(res)
		          this.girlData = res.data.data
		          console.log(this.girlData)
		          for(var i = 0 ; i < this.girlData.length ; i++){
	             	this.girlData[i].pic_url += '_220x220.jpg'
	              }
		        },function(err){
		          console.log(err)
		        }
	    	)
	    	this.$http.get('/api/recommends'+'?page_name=hot&location=boy&page_size=6')
	    	.then(
		        function(res){
		          //console.log(res)
		          this.boyData = res.data.data
		          console.log(this.boyData)
		          for(var i = 0 ; i < this.boyData.length ; i++){
	             	this.boyData[i].pic_url += '_220x220.jpg'
	              }
		        },function(err){
		          console.log(err)
		        }
	    	)
		}
	}
</script>

<style lang="less">
	@import '../../assets/css/icons.css';
	@import "../../assets/less/hotsale.less";
	@import "../../assets/less/public.less";
	@import "../../assets/less/C.less";
</style>