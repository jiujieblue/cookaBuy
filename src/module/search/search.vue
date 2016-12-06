<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/search.less';
</style>

<template>
<div id='search'>
	<headerComponent></headerComponent>
	<div class='search container'>
	  	<div class="row search-list">
	  		<ul>
	  			<li>所有分类</li>
	  			<li> > <span>所有分类</span></li>
	  			<li> > <span>所有分类</span></li>
	  		</ul>
	  		<div>
	  			<ul v-for="(aggregation, key) in aggregations">  				
	  				<li v-html="product_nav(key)"></li>
	  				<li>
	  					<ul>
	  						<li v-for="(bucket, index) in aggregation.buckets"><a href="">{{ bucket.key }}</a></li>
	  					</ul>
	  				</li>
	  			</ul>
	  			<span>更多</span>
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
	    		<input type="text" placeholder="最低价" />
	    		<b>~&nbsp;</b>
	    		<span>￥</span>
	    		<input type="text" placeholder="最高价" />
	    		<button>确定</button>
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
		    					<img :ref="'Img_'+index" :src="hit._source.pic_url">
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
	    			<li>
	    				<a href=""><img src="../../assets/images/hot-sale-side.jpg" /></a>
	    				<b>￥&nbsp;2510.0</b>
	    				<p>战地吉普男装牛仔卫裤2016春装新款</p>
	    				<a href="#">宝立美服饰</a>
	    			</li>
	    			<li>
	    				<a href=""><img src="../../assets/images/hot-sale-side.jpg" /></a>
	    				<b>￥&nbsp;2510.0</b>
	    				<p>战地吉普男装牛仔卫裤2016春装新款</p>
	    				<a href="#">宝立美服饰</a>
	    			</li>
	    			<li>
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
	   		<CkSearch></CkSearch>
	    </div>
	    <div class="row search-recommended search-product-left-grid">
	    	<p><span>HTO</span><b>人气推荐</b></p>
	    	<ul>
	    		<li class="search-product-left-gridRecommended">
	    			<a href="#"><img src="../../assets/images/hot-sale-today.jpg"></a>
	    			<ul>
	    				<li><b>￥520.00</b></li>
	    				<li>收到货了放开手暗示的批复后奥斯丁发货票违法普</li>
	    				<li><a href="#">宝立美服饰</a><span>大西豪 823档</span></li>
	    			</ul>
	    		</li>
	    		<li class="search-product-left-gridRecommended">
	    			<a href="#"><img src="../../assets/images/hot-sale-today.jpg"></a>
	    			<ul>
	    				<li><b>￥520.00</b></li>
	    				<li>收到货了放开手暗示的批复后奥斯丁发货票违法普</li>
	    				<li><a href="#">宝立美服饰</a><span>大西豪 823档</span></li>
	    			</ul>
	    		</li>
	    		<li class="search-product-left-gridRecommended">
	    			<a href="#"><img src="../../assets/images/hot-sale-today.jpg"></a>
	    			<ul>
	    				<li><b>￥520.00</b></li>
	    				<li>收到货了放开手暗示的批复后奥斯丁发货票违法普</li>
	    				<li><a href="#">宝立美服饰</a><span>大西豪 823档</span></li>
	    			</ul>
	    		</li>
	    		<li class="search-product-left-gridRecommended">
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
	      isGridOrBar: 0,
	      hitsProduct: '',
	      hitsProductList: [],

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

	      // 价格筛选
	      lowHigh_price: {
		      isLow: false,
		      isHigh: false
	      }
	    }
	  },
	  mounted () {
	  	var hrefStr = window.location.href
	  	var sortingRulesI = hrefStr.indexOf('order')
	  	var pageI = hrefStr.indexOf('from')

	  	if(pageI != -1){
	  		this.page = hrefStr.slice(pageI)
	  		var i
	  		if((i = this.page.indexOf('&')) != -1){
	  			this.page = this.page.slice(0,i)
	  		}
	  		this.page = this.page.slice(this.page.indexOf('=')+1)
	  		console.log(this.page)
	  	}

	  	this._obtain(sortingRulesI,hrefStr)

	  	this.$http.get('/api/searchs?q=连衣裙&search_size=12&from=1'+((this.page-1)*12+1)+this.sortingUrl)
	  	.then(function (res) {
	  		this.aggregations = res.data[2].aggregations
	  		this.hits = res.data[2].hits
	  	},
	  	function (res) {
	  		console.log(res)
	  	})
	  },
	  computed: {
	  	// 计算属性
	  },
	  filters: {
	  	// 过滤器
	  },
	  methods: {
	  	_obtain (i, hrefStr) {
	  		this.sortingUrl = hrefStr.slice(i)
	  		var i,str1,str2
	  		if((i = this.sortingUrl.indexOf('&')) != -1){
	  			this.sortingUrl = this.sortingUrl.slice(0,i)
	  		}
	  		str1 = this.sortingUrl.slice(this.sortingUrl.indexOf('=')+1)
	  		str2 = str1.slice(str1.indexOf('_')+1)
	  		this.sortingStan = str1 = str1.slice(0,str1.indexOf('_'))
	  		if(str2 == 'asc'){
	  			this.sorting[str1].statu = true
	  			console.log(this.sorting[str1])
	  		}
	  		this.sortingUrl = '&' + this.sortingUrl
	  	},
	  	product_nav (str) {
	  		var html = '<link class="em">'
	  		if(str == 'colors'){
	  			return '颜'+ html +'色'
	  		}else if(str == 'markets'){
	  			return '市'+ html +'场'
	  		}else if(str == 'sizes'){
	  			return '尺'+ html +'码'
	  		}else{
	  			return '风'+ html +'格'
	  		}
	  	},
	  	gridOrBar (e,n) {
	  		$(e.target).addClass('selected').siblings('.selected').removeClass('selected')
	  		this.isGridOrBar = n
	  	},
	  	changeImg (e) {
	  		var imgUrl = e.target.getAttribute('src')
	  		var r = e.target.parentNode.parentNode.getAttribute('data_img')
	  		this.$refs[r][0].setAttribute('src',imgUrl)
	  	},
	  	hitsProductListLength (list) {
	  		console.log(list)
		    if(list.length > 3){
		    	return list.slice(0,3)
		    }else{
		    	return list
		    }
		  },
		  subPage (val) {
		  	window.location.href = 'http://localhost:9090/module/search.html?q=连衣裙&from='+ val + this.sortingUrl
		  },
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
		  	console.log()
		  	window.location.href = 'http://localhost:9090/module/search.html?q=连衣裙&from='+ this.page + this.sortingUrl
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