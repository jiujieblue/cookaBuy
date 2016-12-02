<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/Search.less';
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
	  			<ul>  				
	  				<li>分<link class="em">类</li>
	  				<li>
	  					<ul>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  					</ul>
	  					<span>更多</span>
	  				</li>
	  			</ul>
	  			<ul>  				
	  				<li>分<link class="em">类</li>
	  				<li>
	  					<ul>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  						<li><a href="">皮衣</a></li>
	  					</ul>
	  				</li>
	  			</ul>
	  			<ul>  				
	  				<li>分<link class="em">类</li>
	  				<li>
	  					<ul>
	  						<li><a href="">皮衣</a></li>
	  					</ul>
	  				</li>
	  			</ul>
	  		</div>
	  	</div>
	    <nav class="row search-nav">
	    	<ul>
	    		<li>综合排序<i></i></li>
	    		<li>上架时间<i></i></li>
	    		<li>销量<i></i></li>
	    		<li>价格<i></i></li>
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
	    			<li v-for="(product,index) in hitsProductList" :data_id='product._id'>
	    				<div  class="search-product-left-gridRecommended">
		    				<a href="#"><img :ref="'Img_'+index" :src="product._source.pic_url"></a>
		    				<ul>
		    					<li><b>￥&nbsp;{{ product._source.price }}</b><p style="display:none"><span rel="stylesheet" class="icon-liulan"></span>150</p></li>
		    					<li><a href="">{{ product._source.title }}</a></li>
		    					<li><a href="#">{{ product._source.store.store_name }}</a><span>{{ product._source.store.market }} {{ product._source.store.store_number }}</span></li>
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
	    			<li v-for="(product,index) in hitsProductList" :data_id="product._source.id">
	    				<a href="#"><img :src="product._source.pic_url" ></a>
	    				<ul>
	    					<li><a href="">{{ product._source.title }}</a></li>
	    					<li><a href="#">{{ product._source.store.store_name }}</a>{{ product._source.store.market }} {{ product._source.store.store_number }}</li>
	    				</ul>
	    				<ul>
	    					<li><b>￥ {{ product._source.price }}</b><span style="display:none">人气：2025</span></li>
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
	    	<CkPagination :pages="10" :pageNum="2" @submitPage="subPage"></CkPagination>
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
	      hitsProductList: []
	    }
	  },
	  mounted () {
	  	this.$http.get('/item02/http/_search')
	  	.then(function (res) {
	  		this.hitsProduct = res.data.hits
	  		this.hitsProductList = res.data.hits.hits
	  	},
	  	function (res) {
	  		console.log(res)
	  	})
	  },
	  methods: {
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
		  	console.log(val)
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