<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/search.less';
</style>

<template>
<div id='search'>
	<headerComponent @submitStr="_subkeyword"></headerComponent>
	<div class='search container'>
	  	<div class="row search-list">
	  		<ul>
	  			<li>所有分类 > </li>
	  			<li v-for="(agg,k) in aggUrl" v-if="agg">
		  			<span>
			  			{{ product_nav(k,1) }}：{{ agg.doc_count }}
			  			<link rel="stylesheet" class="icon-cha" @click="_delAggUrl(k)">
	  				</span>
	  				 >
	  			</li>
	  		</ul>
	  		<div>
	  			<ul>  				
	  				<li>dsafasd</li>
	  				<li>
	  					<ul>
	  						<li v-for="(bucket, index) in abc">
	  							<span>阿哥过去</span>
	  						</li>
	  					</ul>
	  					<span>更多</span>
	  				</li>
	  			</ul>
	  			<!-- <ul v-for="(aggregation,key,index) in aggregations" v-if="!aggUrl[key]">  				
	  				<li v-html="product_nav(key)"></li>
	  				<li :ref="'aggregation'+index">
	  					<ul>
	  						<li v-for="(bucket, index) in aggregation.buckets">
	  							<span @click="_urlTarget(key, bucket.key)">{{ bucket.key }}</span>
	  						</li>
	  					</ul>
	  					<span>更多</span>
	  				</li>
	  			</ul> -->
	  		</div>
	  	</div>
	    <nav class="row search-nav">
	    	<ul>
	    		<li v-for="(sor,index) in sorting" @click="_sorting($event, index)" :class="{active: sortingStan == index}">
	    			{{ sor.total }}
	    			<i :class="{ rising: !sor.statu }"></i>
	    		</li>
	    	</ul>
	    	<p>
	    		<span>￥</span>
	    		<input ref="low_price" type="text" placeholder="最低价" @blur="_priceVal($event,'low_price','high_price')"/>
	    		<b>~&nbsp;</b>
	    		<span>￥</span>
	    		<input ref="high_price" type="text" placeholder="最高价" @blur="_priceVal($event,'high_price','low_price')"/>
	    		<button @click="_subLowHigh">确定</button>
	    	</p>
	    	<span rel="stylesheet" class="icon-pingpumoshi selected" @click='gridOrBar($event,0)'></span>
	    	<span rel="stylesheet" class="icon-liebiao" @click='gridOrBar($event,1)'></span>
	    </nav>
	    <div class="row search-product">
	    	<div class="search-product-left-grid" v-if='isGridOrBar == 0'>
	    		<ul>
	    			<li v-for="(hit,index) in hits.hits" :data_id='hit._id'>
	    				<div class="search-product-left-gridRecommended">
		    				<a :href="'http://localhost:9090/module/detail.html?' + hit._source.num_iid" target="_blank">
		    					<img :ref="'Img_'+index" :src="hit._source.pic_url+'_200x200.jpg'">
		    				</a>
		    				<ul>
		    					<li><b>￥&nbsp;{{ hit._source.price }}</b><p style="display:none"><span rel="stylesheet" class="icon-liulan"></span>150</p></li>
		    					<li>
		    						<a :href="'http://localhost:9090/module/detail.html?' + hit._source.num_iid" target="_blank">{{ hit._source.title }}</a>
		    					</li>
		    					<li><a href="#">店铺名称</a><span>{{ hit._source.market }} {{ hit._source.store_number }}</span></li>
		    					<li style="display:none">图片</li>
		    				</ul>
	    				</div>
	    				<div style="display:none">
	    					<a  href="#"><img @mouseover="changeImg($event)" alt="图片2"></a>
	    				</div>
	    			</li>
	    		</ul>
	    	</div>
	    	<div class="search-product-left-bar" v-else>
	    		<ul>
	    			<li v-for="(hit,index) in hits.hits" :data_id="hit._source.id">
	    				<a :href="'http://localhost:9090/module/detail.html?' + hit._source.num_iid">
	    					<img :ref="'Img_'+index" :src="hit._source.pic_url">
	    				</a>
	    				<ul>
	    					<li><a href="">{{ hit._source.title }}</a></li>
	    					<li><a href="#">店铺名称</a>{{ hit._source.market }} {{ hit._source.store_number }}</li>
	    				</ul>
	    				<ul>
	    					<li><b>￥ {{ hit._source.price }}</b><span style="display:none">人气：2025</span></li>
	    					<li style="display:none">预留图片</li>
	    				</ul>
	    			</li>
	    		</ul>
	    	</div>
	    	<div class="search-product-right">
	    		<p><span>HOT</span><b>热销商品</b></p>
	    		<ul>
	    			<li v-for="ren in renqi">
	    				<a href=""><img src="../../assets/images/hot-sale-side.jpg" /></a>
	    				<b>￥&nbsp;2510.0</b>
	    				<p>战地吉普男装牛仔卫裤2016春装新款</p>
	    				<a href="#">宝立美服饰</a>
	    			</li>
	    		</ul>
	    	</div>
	    </div>
	    <div class="row">
	    	<CkPagination :pages="10" :pageNum="page" @submitPage="subPage"></CkPagination>
	    </div>
	    <div class="row search-cookabuy">
	    	<hr/><p>cookabuy.com</p><hr/>
	    </div>
	    <div class="row search-aginsearch">
	   		<p>没有找到合适的商品？您可以搜索：</p>
	   		<!-- 搜索框 -->
	   		<CkSearch @submitStr="_subkeyword"></CkSearch>
	    </div>
	    <div class="row search-recommended search-product-left-grid">
	    	<p><span>HTO</span><b>人气推荐</b></p>
	    	<ul>
	    		<li class="search-product-left-gridRecommended" v-for="ren in renqi">
	    			<a href="#"><img src="../../assets/images/hot-sale-today.jpg"></a>
	    			<ul>
	    				<li><b>￥520.00</b></li>
	    				<li>收到货了放开手暗示的批复后奥斯丁发货票违法普</li>
	    				<li><a href="#">宝立美服饰</a><span>大西豪 823档</span></li>
	    			</ul>
	    		</li>
	    	</ul>
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
	      isGridOrBar: 0,
	    	// 请求数据
	      aggregations: '',
	      hits: '',
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
	      page: '1',
	      // 搜索关键字
	      q: '',
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
					// colors: {key: '',doc_count: ''},
					// markets: {key: '',doc_count: ''},
					// sizes: {key: '',doc_count: ''},
					// style: {key: '',doc_count: ''}
				},

				isMore: {},
				renqi: 5,
				abc: 30
	    }
	  },
	  mounted () {
	  	var hrefStr = window.location.href

	  	var qI = hrefStr.indexOf('?q=')
	  	if(qI != -1){
	  		this.q = hrefStr.slice(qI+1)
	  		if((qI = this.q.indexOf('&')) != -1){
	  			this.q = this.q.slice(0,qI)
	  		}
	  	}
			
			this._aggUrl('colors', 'color', hrefStr)
			this._aggUrl('sizes', 'size', hrefStr)
			this._aggUrl('markets', 'market', hrefStr)
			this._aggUrl('style', 'style', hrefStr)
			
	  	this._obtainLHPriceUrl('low_price',hrefStr)
	  	this._obtainLHPriceUrl('high_price',hrefStr)

	  	this._aggUrl('page','from',hrefStr)

	  	this._obtainSorUrl('order',hrefStr)
	  	
	  	this.$http.get('/api/searchs?'+this.q+'&search_size=12&from=1'+((this.page-1)*12+1)+this.sortingUrl+this.lHPrice_str.low_price+this.lHPrice_str.high_price+this._retAggUrl())
	  	.then(function (res) {
	  		this.aggregations = res.data[2].aggregations
	  		this.hits = res.data[2].hits
	  	},
	  	function (res) {
	  		console.log(res)
	  	})

	  },
	  methods: {
	  	// 获取风格等分类 href
	  	_aggUrl (str1, str2, hrefStr) {
	  		var i = hrefStr.indexOf(str2)
	  		if(i != -1){
	  			var urlStr = hrefStr.slice(i)
	  			if((i = urlStr.indexOf('&')) != -1){
	  				urlStr = urlStr.slice(0,i)
	  			}
	  			if(str2 == 'from'){
	  				this[str1] = urlStr.slice(urlStr.indexOf('=')+1)
	  			}else{
		  			i = urlStr.indexOf('=')
		  			this.aggUrl[str1] = {}
		  			this.aggUrl[str1].key = '&' + urlStr.slice(0,i+1)
		  			this.aggUrl[str1].doc_count = decodeURI(urlStr.slice(i+1))
	  			}
	  		}
	  	},
	  	// 搜索关键期词
	  	_subkeyword (keyword) {
	  		this.q = keyword
	  		window.location.href = 'http://localhost:9090/module/search.html?q='+ this.q +'&from=1'
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
	  	// 删除相应链接关键字
	  	_delAggUrl (k) {
	  		this.aggUrl[k] = undefined
	  		window.location.href = 'http://localhost:9090/module/search.html?'+ this.q +'&from='+ this.page + this.sortingUrl + this.lHPrice_str.low_price +this.lHPrice_str.high_price+this._retAggUrl()
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
	  		window.location.href = href + url
	  	},
	  	// 获取价格筛选 href
	  	_obtainLHPriceUrl (str,hrefStr) {
	  		var i = hrefStr.indexOf(str)
	  		if(i != -1){
		  		this.lHPrice_str[str] = hrefStr.slice(i)
		  		if((i = this.lHPrice_str[str].indexOf('&')) != -1){
		  			this.lHPrice_str[str] = this.lHPrice_str[str].slice(0,i)
		  		}
		  		this.lHPrice_str[str] = '&' + this.lHPrice_str[str]
		  		if(this.lHPrice_str[str].slice(this.lHPrice_str[str].indexOf('=')+1) != 0){
		  			this.$refs[str].value =  this.lHPrice_str[str].slice(this.lHPrice_str[str].indexOf('=')+1)
		  		}
		  	}
	  	},
	  	// 获取排序的 href
	  	_obtainSorUrl (str, hrefStr) {
	  		var i = hrefStr.indexOf(str)
		  	if(i != -1){
		  		this.sortingUrl = hrefStr.slice(i)
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
	  	// 提交筛选价格区间
	  	_subLowHigh () {
	  		if(this.lHPrice_isNot.ifSub){
		  		if(this.lHPrice_isNot.low_price || this.lHPrice_isNot.high_price){
		  			if(this.lHPrice_isNot.low_price){
		  				if(this.$refs.low_price.value == 0){
		  					this.lHPrice_str.low_price = ''
		  				}else{
		  					this.lHPrice_str.low_price = '&low_price='+this.$refs.low_price.value
		  				}
		  			}else{
		  				this.lHPrice_str.low_price = ''
		  			}
		  			if(this.lHPrice_isNot.high_price){
		  				if(this.$refs.high_price.value == 0){
		  					this.lHPrice_str.high_price = ''
		  				}else{
		  					this.lHPrice_str.high_price = '&high_price='+this.$refs.high_price.value
		  				}
		  			}else{
		  				this.lHPrice_str.high_price = ''
		  			}
		  			window.location.href = 'http://localhost:9090/module/search.html?'+ this.q +'&from='+ this.page + this.sortingUrl + this.lHPrice_str.low_price +this.lHPrice_str.high_price+this._retAggUrl()
		  		}
	  		}
	  	},
	  	// 价格筛选区间的验证
	  	_priceVal (e,str1,str2) {
	  		var reg = /^\d(\d|.)*$/
	  		var val1 = +e.target.value.replace(/\s/g,'')
	  		var val2 = +this.$refs[str2].value
	  		if(reg.test(val1)){
	  			if(this.lHPrice_str[str1]){
		  			if(val1 == +this.lHPrice_str[str1].slice(this.lHPrice_str[str1].indexOf('=')+1)){
		  				this.lHPrice_isNot[str1] = false
		  				return
		  			}else{
		  				this.lHPrice_isNot[str1] = true
	  					this.lHPrice_isNot.ifSub = true
		  			}
	  			}else if(val1 == 0){
	  				e.target.value = ''
	  				this.lHPrice_isNot[str1] = false
	  				return
	  			}
	  			if(val2){
	  				if(str1 == 'low_price'){
	  					if(val1 < val2){
	  						this.lHPrice_isNot[str1] = true
	  						this.lHPrice_isNot.ifSub = true
	  					}else{
	  						e.target.value = ''
	  						this.lHPrice_isNot[str1] = false
	  						this.lHPrice_isNot.ifSub = false
	  						return
	  					}
	  				}else{
	  					if(val1 > val2){
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
	  		}else{
	  			e.target.value = ''
	  			this.lHPrice_isNot[str1] = false
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
	  	gridOrBar (e,n) {
	  		$(e.target).addClass('selected').siblings('.selected').removeClass('selected')
	  		this.isGridOrBar = n
	  	},
	  	// 分页跳转
		  subPage (val) {
		  	window.location.href = 'http://localhost:9090/module/search.html?'+ this.q +'&from='+ val + this.sortingUrl + this.lHPrice_str.low_price +this.lHPrice_str.high_price+this._retAggUrl()
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
		  	window.location.href = 'http://localhost:9090/module/search.html?'+ this.q +'&from='+ this.page + this.sortingUrl + this.lHPrice_str.low_price +this.lHPrice_str.high_price+this._retAggUrl()
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