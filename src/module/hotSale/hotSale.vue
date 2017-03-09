<template>
	<div>
		<headerComponent pageName="hotPage" @subStor="_subStor" @subKeyword="_subkeyword"></headerComponent>
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
												<a :title="sliderItem.title" @click="_toSliderDetail(sliderIndex)"><img :src="_replaceImg(sliderItem.pic_url,250)" :title="sliderItem.item.title" :alt="sliderItem.item.title"></a>
												<div>
													<p>¥{{sliderItem.item.price}}</p>
													<p><a @click="_toSliderDetail(sliderIndex)">{{sliderItem.item.title}}</a></p>
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
										<span style="display: none;" class="hotsalepage-left-womenhotsale-top-moreicon icon-more" />
									</div>
									<hr class="ck-hr"/>
									<div class="hotsalepage-left-womenhotsale-links">
										<ul>
											<li>
												<!-- <img src="../../assets/images/hotsale_women.jpg"/> -->
												<a @click="_goAct(hotGirlAds[0].activity_url)">
													<img :src="hotGirlAds[0]&&hotGirlAds[0].pic_url" :title="hotGirlAds[0]&&hotGirlAds[0].tip" :alt="hotGirlAds[0]&&hotGirlAds[0].tip"/>
												</a>
											</li>
											<li v-for="(girlItem, girlIndex) in girlData" :class="_reGirlCla(girlIndex)">
												<div class="hotsalepage-left-womenhotsale-links-item">
													<a :title="girlItem.title" @click="_toGirlDetail(girlIndex)"><img class="hotsalepage-left-womenhotsale-links-item-wimg" :src="_replaceImg(girlItem.pic_url,220)" :title="girlItem.item.title" :alt="girlItem.item.title" /></a>
													<span class="hotsalepage-left-womenhotsale-links-item-price">¥{{girlItem.item.price}}</span>
													<span :title="girlItem.title" class="hotsalepage-left-womenhotsale-links-item-title"><a @click="_toGirlDetail(girlIndex)">{{girlItem.item.title}}</a></span>
													<span class="hotsalepage-left-womenhotsale-links-item-spanleft"><a @click="_toGirlStore(girlIndex)">{{girlItem.item.store.store_name}}</a></span>
													<span class="hotsalepage-left-womenhotsale-links-item-spanright">
													{{girlItem.item.store.location.split("-").splice(0,1).concat(girlItem.item.store.location.split("-").splice(2,girlItem.item.store.location.split("-").length-2)).join("-")}}</span>
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
											<li>
												<!-- <img src="../../assets/images/hotsale_man.jpg"/> -->
												<a @click="_goAct(hotBoyAds[0].activity_url)">
													<img :src="hotBoyAds[0]&&hotBoyAds[0].pic_url" :title="hotBoyAds[0]&&hotBoyAds[0].tip" :alt="hotBoyAds[0]&&hotBoyAds[0].tip"/>
												</a>
											</li>
											<li v-for="(boyItem, boyIndex) in boyData" :class="_reBoyCla(boyIndex)">
												<div class="hotsalepage-left-manhotsale-links-item">
													<a :title="boyItem.title" @click="_toBoyDetail(boyIndex)"><img class="hotsalepage-left-manhotsale-links-item-mimg" :src="_replaceImg(boyItem.pic_url,220)" :title="boyItem.item.title" :alt="boyItem.item.title"/></a>
													<span class="hotsalepage-left-manhotsale-links-item-price">¥{{boyItem.item.price}}</span>
													<span :title="boyItem.item.title" class="hotsalepage-left-manhotsale-links-item-title"><a @click="_toBoyDetail(boyIndex)">{{boyItem.item.title}}</a></span>
													<span class="hotsalepage-left-manhotsale-links-item-spanleft"><a @click="_toBoyStore(boyIndex)">{{boyItem.item.store.store_name}}</a></span>
													<span class="hotsalepage-left-manhotsale-links-item-spanright">
														{{boyItem.item.store.location.split("-").splice(0,1).concat(boyItem.item.store.location.split("-").splice(2,boyItem.item.store.location.split("-").length-2)).join("-")}}
													</span>
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
										<li v-if="rightIndex < 9" v-for="(rightItem, rightIndex) in rightData">
											<div class="hotsalepage-right-links-item">
												<span class="hotsalepage-right-links-item-hotnum">{{rightIndex+1}}</span>
												<a :title="rightItem.title" @click="_toRightDetail(rightIndex)"><img class="hotsalepage-right-links-item-himg" :src="_replaceImg(rightItem.pic_url,180)" :title="rightItem.item.title" :alt="rightItem.item.title"/></a>
												<span class="hotsalepage-right-links-item-price">¥{{rightItem.item.price}}</span>
												<span :title="rightItem.title" class="hotsalepage-right-links-item-title"><a @click="_toRightDetail(rightIndex)">{{rightItem.item.title}}</a></span>
												<span class="hotsalepage-right-links-item-spanleft"><a @click="_toRightStore(rightIndex)">{{rightItem.item.store.store_name}}</a></span>
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
	      		isStore: false,
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
		        boyData:[],
		        hotGirlAds:[],
		        hotBoyAds:[]
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
			_reGirlCla (i) {
				if(i > 1){
					return "girlLineTwo"
				}
			},
			_reBoyCla (i) {
				if(i > 1){
					return "boyLineTwo"
				}
			},
			_toSliderStore(t){
				window.open("./sellerAllProduct.html?store_id="+this.sliderData[t].item.store.id)
			},
			_toRightStore(t){
				window.open("./sellerAllProduct.html?store_id="+this.rightData[t].item.store.id)
			},
			_toGirlStore(t){
				window.open("./sellerAllProduct.html?store_id="+this.girlData[t].item.store.id)
			},
			_toBoyStore(t){
				window.open("./sellerAllProduct.html?store_id="+this.boyData[t].item.store.id)
			},
			_toSliderDetail(t){
				window.open("./detail.html?"+this.sliderData[t].item.id)
			},
			_toRightDetail(t){
				window.open("./detail.html?"+this.rightData[t].item.id)
			},
			_toGirlDetail(t){
				window.open("./detail.html?"+this.girlData[t].item.id)
			},
			_toBoyDetail(t){
				window.open("./detail.html?"+this.boyData[t].item.id)
			},
			_goAct(url){
				window.open(url)
			},
			_replaceImg(url,num){
				if(url.match('img.alicdn.com') != null){
					url += '_'+ num + 'x' + num + '.jpg'
				}
				return url
			}
		},
		mounted(){
			this.$http.get('/api/active_rec_items'+'?page_name=hot&location=top')
	    	.then(
		        function(res){
					//console.log(res)
					this.sliderData = res.data.data
					// for(var i = 0 ; i < this.sliderData.length ; i++){
					// 	if(this.sliderData[i].pic_url.match('img.alicdn.com') != null){
					// 		this.sliderData[i].pic_url += '_250x250.jpg'
					// 	}
					// }
		        },function(err){
		          console.log(err)
		        }
	    	)
	    	this.$http.get('/api/active_rec_items'+'?page_name=public&location=right')
	    	.then(
		        function(res){
					//console.log(res)
					this.rightData = res.data.data
					// for(var i = 0 ; i < this.rightData.length ; i++){
					// 	if(this.rightData[i].pic_url.match('img.alicdn.com') != null){
					// 		this.rightData[i].pic_url += '_180x180.jpg'
					// 	}
					// }
		        },function(err){
		          console.log(err)
		        }
	    	)
	    	this.$http.get('/api/active_rec_items'+'?page_name=hot&location=girl')
	    	.then(
		        function(res){
					//console.log(res)
					this.girlData = res.data.data
	    // 			for(var i = 0 ; i < this.girlData.length ; i++){
					// 	if(this.girlData[i].pic_url.match('img.alicdn.com') != null){
					// 		this.girlData[i].pic_url += '_220x220.jpg'
					// 	}
					// }
		        },function(err){
		          console.log(err)
		        }
	    	)
	    	this.$http.get('/api/active_rec_items'+'?page_name=hot&location=boy')
	    	.then(
		        function(res){
					//console.log(res)
					this.boyData = res.data.data
					// for(var i = 0 ; i < this.boyData.length ; i++){
					// 	if(this.boyData[i].pic_url.match('img.alicdn.com') != null){
					// 		this.boyData[i].pic_url += '_220x220.jpg'
					// 	}
					// }
		        },function(err){
		          console.log(err)
		        }
	    	)
	    	this.$http.get('/api/active_cookaads'+'?page_name=hot&&location=girl')
	    	.then(
	    		function(res){
	    			this.hotGirlAds = res.data.data
	    		},function(err){
	    			console.log(err)
	    		}
	    	)
	    	this.$http.get('/api/active_cookaads'+'?page_name=hot&&location=boy')
	    	.then(
	    		function(res){
	    			this.hotBoyAds = res.data.data
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