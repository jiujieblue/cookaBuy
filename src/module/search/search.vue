<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/search.less';
</style>
<template>
<div id='search'>
	<headerComponent @subKeyword="_subkeyword" :keyword="decodeURIComponent(keyword)" @subStor="_subStor"></headerComponent>
	<div class='search container'>
	  	<div class="row search-list">
	  		<ul>
	  			<li>所有分类 > </li>
	  			<li v-for="(agg,k) in aggUrl" v-if="agg">
		  			<span>
			  			{{ product_nav(k,1) }}：{{ agg.doc_count }}
			  			<link rel="stylesheet" class="icon-cha" @click="_delAggUrl(k)">
	  				</span>
	  			</li>
	  		</ul>

	  		<div v-if="isRequestYes">
	  			<ul v-for="(aggregation,key,index) in aggregations" v-if="!aggUrl[key] && aggregation.buckets.length != 0">  				
	  				<li v-html="product_nav(key)"></li>
	  				<li :class="{moreCat: isShowMore[index]}">
	  					<ul :ref="'ul'+ index" :data-ref="key">
	  						<li v-for="(bucket, bucketIndex) in aggregation.buckets" v-if="_setKey(bucket.key)">
	  							<span @click="_urlTarget(key, bucket.key)">{{ _setKey(bucket.key) }}</span>
	  						</li>
	  					</ul>
	  					<span @click="_moreClick($event, index)" v-if="isMore[index]" :class="{active: isShowMore[index]}">更多</span>
	  				</li>
	  			</ul>
	  		</div>
	  	</div>
	    <nav class="row search-nav">
	    	<ul>
	    		<li v-for="(sor,index) in sorting" @click="_sorting($event, index)" :class="{active: sortingStan == index}">
	    			{{ sor.total }}
	    			<i :class="{ rising: sor.statu }"></i>
	    		</li>
	    	</ul>
	    	<p>
	    		<span>￥</span>
	    		<input ref="low_price" type="text" placeholder="最低价" @blur="_priceVal($event,'low_price','high_price')" @keyup="_subLowHigh($event, 1,'low_price','high_price')"/>
	    		<b>~&nbsp;</b>
	    		<span>￥</span>
	    		<input ref="high_price" type="text" placeholder="最高价" @blur="_priceVal($event,'high_price','low_price')" @keyup="_subLowHigh($event,1,'high_price','low_price')"/>
	    		<button @click="_subLowHigh">确定</button>
	    	</p>
	    	<!-- 浏览切换 -->
	    	<span rel="stylesheet" :class="['icon-liebiao', isGridOrList == 1 ? 'selected' : '']" @click='_gridOrList($event, 1)'></span>
	    	<span rel="stylesheet" :class="['icon-pingpumoshi', isGridOrList == 0 ? 'selected': '']" @click='_gridOrList($event, 0)'></span>
	    </nav>
	    <div class="row search-product">
	    	<div class="search-product-left">
	    		<div class="search-product-left-succee" v-if="isRequestYes">
			    	<div class="search-product-left-succee-grid" v-if='isGridOrList == 0'>
			    		<ul>
			    			<li v-for="(hit,index) in hits.hits" class="search-product-left-gridRecommended">
			    				<a :href="'./detail.html?' + hit._source.id" target="_blank">
			    					<img :ref="'Img_'+index" :src="_returuIMGURL(hit._source.pic_url, 220)" :alt="hit._source.title" :title="hit._source.title">
			    				</a>
			    				<ul :data_ul="index">
			    					<li>
			    						<span>￥&nbsp;{{ hit._source.price}}</span>
			    						<p style="display:none">
			    							<span rel="stylesheet" class="icon-liulan"></span>150
			    						</p>
			    					</li>
			    					<li>
			    						<a class="ie-11-a" :href="'./detail.html?' + hit._source.id" target="_blank" v-html="_titleColor(hit._source.title)"></a>
			    					</li>
			    					<li>
			    						<a :href="'./sellerAllProduct.html?store_id='+hit._source.store_id" target="_blank">{{ hit._source.store_name }}</a>
			    						<span>{{ hit._source.market }} {{ hit._source.store_number }}</span>
			    					</li>
			    					<!-- <li v-if="false">图片</li> -->
			    				</ul>
			    			</li>
			    		</ul>
			    	</div>
			    	<div class="search-product-left-succee-list" v-if='isGridOrList == 1'>
			    		<ul>
			    			<li v-for="(hit,index) in hits.hits" :data_id="hit._source.id"  class="asdfsdaf">
			    				<div>
				    				<a :href="'./detail.html?' + hit._source.id" target="_blank">
				    					<img :ref="'Img_'+index" :src="_returuIMGURL(hit._source.pic_url, 150)" :alt="hit._source.title" :title="hit._source.title">
				    				</a>
			    				</div>
			    				<ul>
			    					<li>
			    						<a :href="'./detail.html?' + hit._source.id" target="_blank" v-html="_titleColor(hit._source.title)"></a>
			    					</li>
			    					<li>
				    					<a :href="'./sellerAllProduct.html?store_id='+hit._source.store_id" target="_blank">{{ hit._source.store_name }}</a>
				    					{{ hit._source.market }} {{ hit._source.store_number }}
			    					</li>
			    				</ul>
			    				<ul>
			    					<li><b>￥ {{ hit._source.price }}</b><span style="display:none">人气：2025</span></li>
			    					<li style="display:none">预留图片</li>
			    				</ul>
			    			</li>
			    		</ul>
			    	</div>
	    		</div>
	    		<div class="search-product-left-loading" v-if="isRequestReady">
	    			<img src="../../assets/images/loading.gif" alt="加载动画~~" title="加载动画~~">
	    		</div>
		    	<div class="search-product-left-error" v-if='!isRequestYes && !isRequestReady'>
		    		<div>
		    			<img src="../../assets/images/nosearchR.png" title="没有相关商品哦~~" alt="没有相关商品哦~~">
		    			<ul>
		    				<li><p>没有相关商品哦~~</p></li>
		    				<li>
		    					<a href="./index.html" target="_blank">去商城逛逛</a>
		    				</li>
		    			</ul>
		    		</div>
		    	</div>
	    	<!-- 分页 -->
		    	<CkPagination :pages="pages" :pageNum="page" @submitPage="subPage" v-if="isRequestYes"></CkPagination>
	    	</div>
	    	<!-- 热销商品 -->
	    	<div class="search-product-right">
	    		<p><span>HOT</span><b>热销商品</b></p>
	    		<ul>
	    			<li v-for="(hot,index) in hotData.data">
	    				<span>热<b class="em_5"></b>销</span>
	    				<a :href="'./detail.html?'+hot.item.id" target="_blank">
		    				<img :src="_returuIMGURL(hot.pic_url, 180)" :alt="hot.item.title" :title="hot.item.title">
		    			</a>
	    				<span>￥{{ hot.item.price }}</span>
	    				<p>
	    					<a class="ie-11-a" :href="'./detail.html?'+hot.item.id" target="_blank">
	    						{{ hot.item.title }}
	    					</a>
	    				</p>
	    				<a :href="'./sellerAllProduct.html?store_id='+hot.item.store.id" target="_blank">{{ hot.item.store.store_name }}</a>
	    			</li>
	    		</ul>
	    	</div>
	    </div>
	    <div class="row">
	    	
	    </div>
	    <div class="row search-cookabuy">
	    	<hr/><p>cookabuy.com</p><hr/>
	    </div>
	    <div class="row search-aginsearch">
	   		<p>没有找到合适的商品？您可以搜索：</p>
	   		<!-- 搜索框 -->
	   		<CkSearch @subStor="_subStor" @subKeyword="_subkeyword" :keyword="decodeURIComponent(keyword)"></CkSearch>
	    </div>
	    <div class="search-recommended search-product-left-grid">
	    	<p><span>HOT</span><b>人气推荐</b></p>
      	
      	<!-- <Slide :slideData="slideData" :isPropsMove="isPropsMove"> -->
      	<div class="slide" @mouseover="_over" @mouseout="_out">
	      	<div class="slide-box">
	      		<div class="search-product-left-gridRecommended" v-for="(hot,index) in sentimentData.data">
	      			<a :href="'./detail.html?'+hot.item.id" target="_blank">
		    				<img :src="_returuIMGURL(hot.pic_url, 220)" :alt="hot.item.title" :title="hot.item.title">
		    			</a>
		    			<ul>
		    				<li><span>￥{{ hot.item.price }}</span></li>
		    				<li>
		    					<a class="ie-11-lunbo" :href="'./detail.html?'+hot.item.id" target="_blank">
		    						{{ hot.item.title }}
		    					</a>
		    				</li>
		    				<li>
		    					<a :href="'./sellerAllProduct.html?store_id='+hot.item.store.id" target="_blank">{{ hot.item.store.store_name }}</a>
		    					<span>{{hot.item.store.location.split("-").splice(0,1).concat(hot.item.store.location.split("-").splice(2,hot.item.store.location.split("-").length-2)).join("-")}}档</span>
		    				</li>
		    			</ul>
	      		</div>
	      	</div>
      	</div>
      	<!-- </Slide> -->
	    </div>
 	</div>
	<goTop></goTop>
	<footerComponent></footerComponent>
</div>
</template>

<script>
	import Vue from 'vue'
	import headerComponent from 'components/header'
	import footerComponent from 'components/footer'
	import CkSearch from 'components/CkSearch'
	import goTop from 'components/goTop'
	import CkPagination from 'components/CkPagination'

	export default {
	  data () {
	    return {
	    	// 浏览方式切换
	      isGridOrList: 0,
	    	// 请求数据
	      aggregations: {
	      	markets: {},
	      	style: {},
	      	colors: {},
	      	sizes: {}
	      },
	      hits: '',
	      hotData: '',
	      sentimentData: '',
	      // 排序
	      sorting:{
	      	//comprehensive: {statu: false, total: '综合排序'},
		      time: {statu: false, total: '上架时间'},
		      //sales: {statu: false, total: '销量'},
		      price: {statu: false, total: '价格'}
	      },
	      sortingUrl: '',
	      sortingStan: '',
	      // 分页
	      page: 1,
	      pages: 0,
	      // 价格筛选
	      lHPrice_isNot: {
		      low_price: false,
		      high_price: false,
		      ifSub: false
	      },
				lHPrice_str: {
					low_price: '',
					high_price: ''
				},

				// 分类链接 url 关键字
				aggUrl: {
	      	markets: undefined,
	      	style: undefined,
	      	colors: undefined,
	      	sizes: undefined
				},

				isMore: [],
				isShowMore:[],
				renqi: 5,
				isRequestReady: true,
				isRequestYes: false,
				// 搜索关键字
				keyword: '',
	      // 搜索关键字
	      q: '',
		    isStore: false,
		    // 女装、男装、孕妇装、童装
		    cpath: '',
		    slideData: {
  				oneTime: '400ms',
  				num: 1,
  				moveTime: 2000,
  				marginR: 5
		  	},
		  	isPropsMove: false,
		  	duoyu: false,

		  	// 轮播变量
		  	moveTime: 2000,
				oneTime: '400ms',
				liLength: 0,
				isMove: true,
				timer1: null,
				timer2: null,
				activeNum: 0,
				_autoMove: false,
				num: 1,
	    }
	  },
	  // 组件加载完成之后
	  updated () {
	  	var me = this
	  	// for(var key in this.isMore){
	  	// 	if(parseInt($(this.$refs['ul'+ key]).css('height')) >= 65){
	  	// 		this.$set(this.isMore, key, true)
	  	// 	}
	  	// }
	  },
	  mounted () {
	  	var me = this

	  	var hrefStr = window.location.href
	  	// 获取本地储存
	  	if(sessionStorage.getItem('browse')){
	  		this.isGridOrList = sessionStorage.getItem('browse')
	  	}

	  	// 获取搜索关键字
	  	var qI = hrefStr.indexOf('q='),keyStr = ''
	  	if(qI != -1){
	  		keyStr = hrefStr.slice(qI)
	  		if((qI = keyStr.indexOf('&')) != -1){
	  			keyStr = keyStr.slice(0,qI)
	  		}
	  		keyStr = keyStr.slice(keyStr.indexOf('=')+1)
	  		try
				{
				  //在此运行代码
				  decodeURIComponent(keyStr)
				}
				catch(err)
				{
				  //在此处理错误
				  keyStr = encodeURIComponent(keyStr)
				}
				this.keyword = keyStr
				if(keyStr.length >= 1800){
					window.location.href = "./uf.html"
				}

	  	}
	  	// 修改  name="keyword"   title
	  	var years = (new Date()).getFullYear()
	  	keyStr = decodeURIComponent(keyStr)
	  	$('meta[name="keywords"]').attr('content', keyStr + ',新款' + keyStr + ',' + keyStr + '厂家,' + keyStr + '进货')
	  	$('meta[name="description"]').attr('content', '柯咔服装网搜罗全国' + keyStr + '厂家货源，提供2017各式新款'+ keyStr +'，'+ keyStr +'品牌热销，厂家直销，一件代发，'+ keyStr +'批发市场货源充足，低价拿货首选柯咔~！')
	  	$('title').html( years + '新款'+ keyStr +',厂家货源批发,'+ keyStr +'进货首选 - 柯咔服装网')
	  	// 获取分类关键字
			this._aggUrl('colors', '&color', hrefStr)
			this._aggUrl('sizes', '&item_size', hrefStr)
			this._aggUrl('markets', '&market', hrefStr)
			this._aggUrl('style', '&style', hrefStr)
	  	// 获取价格筛选
	  	this._obtainLHPriceUrl('&low_price',hrefStr)
	  	this._obtainLHPriceUrl('&high_price',hrefStr)
	  	// 获取page
	  	this._aggUrl('page','&from',hrefStr)
	  	this._aggUrl('cpath','&cpath',hrefStr)
	  	this.cpath = this.cpath ? ('&cpath=' + this.cpath) : ''
	  	// 获取排序关键字
	  	this._obtainSorUrl('&order',hrefStr)

	  	var hrefUrlStr = ''
	  	// 搜索关键字

	  	if(!this.keyword){
	  		this.isRequestYes = false
	  		this.isRequestReady = false
	  	}
	  	if(this.keyword){
	  		hrefUrlStr = 'q='+this.keyword+'&search_size=20&from='+(this.page-1)*20+this.sortingUrl+this.lHPrice_str.low_price+this.lHPrice_str.high_price+this._retAggUrl()+this.cpath
		  	this.$http.get('/s1/searchs?' + hrefUrlStr)
		  	.then(function (res) {
		  		this.aggregations.markets = res.data[2].aggregations.markets
		  		this.aggregations.style = res.data[2].aggregations.style
		  		this.aggregations.colors = res.data[2].aggregations.colors
		  		this.aggregations.sizes = res.data[2].aggregations.sizes
		  		
		  		var num = 0
		  		for(var key1 in this.aggregations){
		  			this.isMore[num] = false
		  			this.isShowMore[num] = false
		  			var aggStr = ''
		  			for(var key2 in this.aggregations[key1].buckets){
		  				aggStr += this.aggregations[key1].buckets[key2].key
		  			}
		  			var aggWidth = aggStr.length * 15.1 + this.aggregations[key1].buckets.length * 15
		  			if(aggWidth > 956 * 2){
		  				this.isMore[num] = true
		  			}
		  			num ++
		  		}

		  		if(sessionStorage.showMore){
			  		console.log(sessionStorage.showMore)
			  		var showMore = JSON.parse(sessionStorage.showMore)
			  		for(var i in showMore){
			  			if(showMore[i]){
			  				this.$set(this.isShowMore, i, true)
			  				console.log(this.isShowMore[i])
			  			}
			  		}
			  	}

		  		this.hits = res.data[2].hits
		  		this.pages = Math.ceil(res.data[2].hits.total/20) >= 500 ? 500 : Math.ceil(res.data[2].hits.total/20)
	  			this.isRequestReady = false
		  		if(res.data[0] == 'ok' && res.data[2].hits.hits.length != 0){
		  			this.isRequestYes = true
		  		}else{
		  			this.isRequestYes = false
		  		}
		  	},
		  	function (res) {
		  		console.log(res)
		  	})
	  	}else{
	  		this.isRequestYes = false
	  	}
	  	// 热销商品
	  	this.$http.get('/api/active_rec_items?page_name=public&location=right&page_size=6&page=1')
	  	.then(function (res) {
	  		this.hotData = res.data
	  	},
	  	function (res) {
	  		console.log(res)
	  	})
	  	// 人气推荐商品
	  	this.$http.get('/api/active_rec_items?page_name=public&location=bottom&page_size=10&page=1')
	  	.then(function (res) {
	  		this.sentimentData = res.data
	  		$('.slide-box').css({width: res.data.data.length * (224 + 5) + 'px'})
	  		if(res.data.data.length <= 5){
	  			this.isPropsMove = false
	  		}else{
	  			this._autoMove()
	  			this.isPropsMove = true
	  		}
	  	},
	  	function (res) {
	  		console.log(res)
	  	})
	  },
	  // 组件加载完成之前
	  methods: {
	  	_returuIMGURL (imgUrl, num) {
	  		if(imgUrl.indexOf('img.alicdn.com') != -1){
	  			return imgUrl + '_' + num + 'x' + num + '.jpg'
	  		}else{
	  			return imgUrl
	  		}
	  	},
	  	// 轮播循环
	  	_move (n) {
				var me =this
				if(this.isMove){
					this.isMove = false
					if(n < 0){
						$('.slide-box').prepend($('.slide-box div:eq('+(this.liLength-1)+')').clone(true)).css({transitionDuration: '0ms', transform: 'translate3d('+(n*229)+'px, 0px, 0px)'})

						setTimeout(function(){
							$('.slide-box').css({transitionDuration: '300ms', transform: 'translate3d(0px, 0px, 0px)'})
							$('.slide-box div:eq('+(this.liLength-1)+')').remove()
							setTimeout(function(){
								me.isMove = true
							},300)
						},10)
					}
					if(n > 0){
						$('.slide-box').css({width: 229*($('.slide-box div').length+n) + 'px'})
						setTimeout(function(){
							$('.slide-box').append($('.slide-box div:lt('+ n +')').clone(true))
							$('.slide-box').css({transitionDuration:  300 + 'ms', transform: 'translate3d('+(-229)+'px, 0px, 0px)'})
						},1)
						setTimeout(function(){
							$('.slide-box div:lt('+ n +')').remove()
							$('.slide-box').css({transitionDuration: '0ms', transform: 'translate3d(0px, 0px, 0px)'})
							
							setTimeout(function(){
								me.isMove = true
							},10)
						},301)
					}
				}
			},
			_autoMove () {
				this.timer1 = setInterval(this._move.bind(this,this.num),this.moveTime)
			},
			_over (e) {
				if(this.isPropsMove){
					clearInterval(this.timer1)
					this.timer1 = null
				}
			},
			_out (e) {
				if(this.isPropsMove){
					this._autoMove()
				}
			},


	  	// 分类更多鼠标点击
	  	_moreClick (e, index) {
	  		// $(e.target).toggleClass('active')
	  		this.$set(this.isShowMore, index, !this.isShowMore[index])
				var showMore = JSON.stringify(this.isShowMore)
				sessionStorage.showMore = showMore
	  	},
	  	_setKey (key) {
	  		var reg = /[#&%]/ig
	  		if(!reg.test(key)){
	  			return key
	  		}else{
	  			return false
	  		}
	  	},
	  	_subStor (n) {
	  		if(n == 0){
	  			this.isStore = false
	  		}else{
	  			this.isStore = true
	  		}
	  	},
	  	_priceEtc (val) {
	  		var i = val.indexOf('.'),str = ''
	  		if(i != -1){
	  			str = val.slice(i+1)
	  			if(str.length == 1){
	  				return val+'0'
	  			}else if(str.length >= 2){
	  				return val.slice(0,i+3)
	  			}
	  		}else{
	  			return val+'.00'
	  		}
	  	},
	  	// 热销商品长度的控制
	  	_hotLength (val) {
	  		if(val){
		  		if(val.length > 6){
		  			return val.slice(0,6)
		  		}else{
		  			return val
		  		}
	  		}
	  	},
	  	// 搜索关键字高光
	  	_titleColor (val) {
	  		// var reg =new RegExp(this.keyword,"ig");
	  		if(this.keyword){
		  		return val.replace(this.keyword,"<span>"+ this.keyword +"</span>")
	  		}else{
	  			return val
	  		}
	  	},
	  	// 获取风格等分类 href  page
	  	_aggUrl (str1, str2, hrefStr) {
	  		var i = hrefStr.indexOf(str2)
	  		if(i != -1){
	  			if(str2 == '&from' || str2 == '&cpath'){
		  			var urlStr = hrefStr.slice(i+1)
		  			if((i = urlStr.indexOf('&')) != -1){
		  				urlStr = urlStr.slice(0,i)
		  			}
	  				this[str1] = urlStr.slice(urlStr.indexOf('=')+1)
	  			}else{
		  			var urlStr = hrefStr.slice(i+1)
		  			if((i = urlStr.indexOf('&')) != -1){
		  				urlStr = urlStr.slice(0,i)
		  			}
		  			i = urlStr.indexOf('=')
		  			this.aggUrl[str1] = {}
		  			this.aggUrl[str1].key = '&' + urlStr.slice(0,i+1)
		  			this.aggUrl[str1].doc_count = decodeURIComponent(urlStr.slice(i+1))
	  			}
	  		}
	  	},
	  	// 获取排序的 href
	  	_obtainSorUrl (str, hrefStr) {
	  		var i = hrefStr.indexOf(str)
		  	if(i != -1){
		  		this.sortingUrl = hrefStr.slice(i+1)
		  		var str1,str2
		  		if((i = this.sortingUrl.indexOf('&')) != -1){
		  			this.sortingUrl = this.sortingUrl.slice(0,i)
		  		}
		  		str1 = this.sortingUrl.slice(this.sortingUrl.indexOf('=')+1)
		  		str2 = str1.slice(str1.indexOf('_')+1)
		  		this.sortingStan = str1 = str1.slice(0,str1.indexOf('_'))
		  		if(str2 == 'asc'){
		  			this.sorting[str1].statu = true
		  		}
		  		this.sortingUrl = '&' + this.sortingUrl
	  		}
	  	},
	  	// 获取价格筛选 href
	  	_obtainLHPriceUrl (str,hrefStr) {
	  		var i = hrefStr.indexOf(str)
	  		str = str.slice(1)
	  		if(i != -1){
	  			this.lHPrice_isNot[str] = true
		  		this.lHPrice_str[str] = hrefStr.slice(i+1)
		  		if((i = this.lHPrice_str[str].indexOf('&')) != -1){
		  			this.lHPrice_str[str] = this.lHPrice_str[str].slice(0,i)
		  		}
		  		this.lHPrice_str[str] = '&' + this.lHPrice_str[str]
		  		var val = this.lHPrice_str[str].slice(this.lHPrice_str[str].indexOf('=')+1)
		  		if((i = val.indexOf('.')) != -1){
		  			var floatStr = val.slice(i+1)
		  			if(floatStr.length == 1){
		  				val +='0'
		  			}else if(floatStr.length >= 2){
		  				val = val.slice(0,i+3)
		  			}
		  		}else{
		  			val += '.00'
		  		}
		  		this.$refs[str].value = val
		  	}
	  	},
	  	// 输出 aggUrl中的关键字
	  	_retAggUrl () {
	  		var aggUrlStr = ''
	  		for (var key in this.aggUrl) {
	  			if(this.aggUrl[key]){
		  			aggUrlStr += this.aggUrl[key].key + this.aggUrl[key].doc_count
	  			}
		  	}
		  	return aggUrlStr
	  	},
	  	// 搜索关键期词
	  	_subkeyword (keyword) {
	  		var keyStr = keyword && "?q=" + keyword
	  		if(this.isStore){
	  			window.location.href = './visitingMarket.html'+keyStr
	  		}else{
	  			window.location.href = './search.html?q='+ keyword +'&from=1'
	  		}
	  	},
	  	// 删除相应链接关键字
	  	_delAggUrl (k) {
	  		this.aggUrl[k] = undefined
	  		window.location.href = './search.html?q='+ this.keyword +'&from=1'+this._retAggUrl() + this.cpath
	  	},
	  	// 风格等分类的跳转  添加到链接中
	  	_urlTarget (key, total) {
	  		var href = window.location.href
	  		var url = ''
	  		if(key == 'style'){
	  			url = '&style=' + total
	  		}else if(key == 'sizes'){
	  			url = '&item_size=' + total
	  		}else{
	  			url = '&'+ key.slice(0,key.length-1) +'=' + total
	  		}
	  		window.location.href = './search.html?q='+ this.keyword +'&from=1' + this._retAggUrl() + url + this.cpath
	  	},
	  	// 分页跳转
		  subPage (val) {
		  	window.location.href = './search.html?q='+ this.keyword +'&from='+ val + this.sortingUrl + this.lHPrice_str.low_price +this.lHPrice_str.high_price+this._retAggUrl() + this.cpath
		  },
	  	// 排序的切换
		  _sorting (e, str) {
		  	$(e.target).addClass('active').siblings('.active').removeClass('active')
		  	if(this.sorting[str].statu){
		  		this.sortingUrl = '&order='+ str +'_desc'
		  	}else{
		  		this.sortingUrl = '&order='+ str +'_asc'
		  	}
		  	for(var key in this.sorting){
		  		if(key == str){
		  			this.sorting[key].statu = !this.sorting[key].statu
		  		}else if(this.sorting[key].statu){
		  			this.sorting[key].statu = false
		  		}
		  	}
		  	window.location.href = './search.html?q='+ this.keyword +'&from=1' + this.sortingUrl + this.lHPrice_str.low_price +this.lHPrice_str.high_price+this._retAggUrl()
		  },
	  	// 提交筛选价格区间
	  	_subLowHigh (e, n,str1,str2) {
	  		if(n == 1){
	  			if(e.which == 13){
	  				this._priceVal (e,str1,str2)
	  			}else{
	  				return
	  			}
	  		}

	  		if(this.lHPrice_isNot.ifSub){
		  		if(this.lHPrice_isNot.low_price || this.lHPrice_isNot.high_price){
		  			if(this.lHPrice_isNot.low_price){
		  				if(!this.$refs.low_price.value){
		  					this.lHPrice_str.low_price = ''
		  				}else{
		  					parseInt(this.$refs.low_price.value)- Math.pow(10,10) > 0 && (this.$refs.low_price.value = 999999999.00)
		  					this.lHPrice_str.low_price = '&low_price='+this.$refs.low_price.value
		  				}
		  			}
		  			if(this.lHPrice_isNot.high_price){
		  				if(!this.$refs.high_price.value){
		  					this.lHPrice_str.high_price = ''
		  				}else{
		  					parseInt(this.$refs.high_price.value)- Math.pow(10,10) > 0 && (this.$refs.high_price.value = 999999999.00)
		  					this.lHPrice_str.high_price = '&high_price='+this.$refs.high_price.value
		  				}
		  			}
		  			window.location.href = "./search.html?q="+ this.keyword +'&from=1' + this.sortingUrl + this.lHPrice_str.low_price +this.lHPrice_str.high_price+this._retAggUrl() + this.cpath
		  		}
	  		}
	  	},
	  	// 价格筛选区间的验证
	  	_priceVal (e,str1,str2) {
	  		var reg = /^\d(\d|.)*$/
	  		var val1 = +e.target.value.replace(/\s/g,'')
	  		var val2 = +this.$refs[str2].value
	  		if(reg.test(val1)){ // 是否是数字
	  			if(val1 == 0){
	  				if((this.lHPrice_str[str1] && this.lHPrice_str[str1].slice(this.lHPrice_str[str1].indexOf('=')+1) != 0) || (!this.lHPrice_str[str2] && !this.lHPrice_str[str1])){
	  					this.lHPrice_isNot[str1] = true
	  					this.lHPrice_isNot.ifSub = true
	  				}else{
	  					this.lHPrice_isNot[str1] = false
	  					this.lHPrice_isNot.ifSub = false
	  					return
	  				}
	  			}
	  			if(val2){ // 比较大小
	  				if(str1 == 'low_price'){
	  					if(val1 <= val2){
	  						this.lHPrice_isNot[str1] = true
	  						this.lHPrice_isNot.ifSub = true
	  					}else{
	  						e.target.value = ''
	  						this.lHPrice_isNot[str1] = false
	  						this.lHPrice_isNot.ifSub = false
	  						return
	  					}
	  				}else{
	  					if(val1 >= val2){
	  						console.log(1)
	  						this.lHPrice_isNot[str1] = true
	  						this.lHPrice_isNot.ifSub = true
	  					}else{
	  						e.target.value = ''
	  						this.lHPrice_isNot[str1] = false
	  						this.lHPrice_isNot.ifSub = false
	  						return
	  					}
	  				}
	  			}else{
	  				this.lHPrice_isNot[str1] = true
	  				this.lHPrice_isNot.ifSub = true
	  			}
	  			if(this.lHPrice_str[str1]){  // 是否存在已搜索
	  				// 已搜索和现搜索是否一样
		  			if(val1 == +this.lHPrice_str[str1].slice(this.lHPrice_str[str1].indexOf('=')+1)){
		  				this.lHPrice_isNot[str1] = false
		  				if(this.lHPrice_isNot[str2]){
  							this.lHPrice_isNot.ifSub = true
  							return
  						}else{
  							this.lHPrice_isNot.ifSub = false
  							return
  						}
		  				return
		  			}else{
		  				this.lHPrice_isNot[str1] = true
	  					this.lHPrice_isNot.ifSub = true
		  			}
	  			}else{
	  				this.lHPrice_isNot[str1] = true
	  				this.lHPrice_isNot.ifSub = true
	  				return
	  			}
	  		}else{
	  			e.target.value = ''
	  			this.lHPrice_isNot[str1] = false
	  			this.lHPrice_isNot.ifSub = false
	  			return
	  		}
	  	},
	  	// 商品分类遍历 条件过滤
	  	product_nav (str, n) {
	  		var html = ''
	  		if(n != 1){
	  			html = '<link class="em">'
	  		}
	  		if(str == 'colors'){
	  			return '颜'+ html +'色'
	  		}else if(str == 'markets'){
	  			return '市'+ html +'场'
	  		}else if(str == 'sizes'){
	  			return '尺'+ html +'码'
	  		}else if(str == 'style'){
	  			return '风'+ html +'格'
	  		}
	  	},
	  	// 浏览方式的切换
	  	_gridOrList (e,n) {
	  		sessionStorage.setItem('browse',n)
	  		this.isGridOrList = n
	  	}
	  },
	  components: {
	  	headerComponent,
	  	footerComponent,
	  	CkSearch,
	  	CkPagination,
	  	goTop
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->