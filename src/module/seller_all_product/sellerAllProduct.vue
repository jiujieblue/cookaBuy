<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/sellerAllProduct.less';
</style>
<template>
<div id='app'>
	<div class="container">
	  <header class="header">
	    <h1>头部</h1>
	  </header>
  	<div class="row container-list">
  		<ul>
	    	<li class="active">全部商品</li>
	    	<li style="display:none">会员专区</li>
	    </ul>
	    <div>
	    	<p>
	    		<span>商品分类</span>
	    		<span>共520件相关商品</span>
	    	</p>
	    	<div>
	    		<span>女士/女士精品：</span>
		    	<ul>
		    		<li v-for="sub in subs">
		    			<a href="#" v-bind:data-categoryId="sub.categoryId">{{ sub.name }}</a>
		    		</li>
		    	</ul>
		    	<span v-on:mouseover="moreOver" v-on:mouseout="moreOut" id="more">更多</span>
	    	</div>
	    </div>
  	</div>
    <nav class="row container-nav">
    	<ul>
    		<li>销量<i></i></li>
    		<li>上新时间<i></i></li>
    		<li>价格<i></i></li>
    	</ul>
    	<p>
    		<span>￥</span>
    		<input type="text" placeholder="最低价" />
    		<b>~</b>
    		<span>￥</span>
    		<input type="text" placeholder="最高价" />
    	</p>
    </nav>
    <div class="row container-product">
    	<div class="container-product-left">
    		<ul>
    			<li v-for="list in lists">
    				<img v-bind:src="list.imageUrl" v-bind:data-productId="list.productId" alt="产品图片">
    				<ul>
    					<li><b>￥&nbsp;{{ list.price }}</b><span rel="stylesheet" class="icon-shoucang"></span></li>
    					<li>{{ list.title }}</li>
    					<li><span>#{{ list.productId }}</span><button>一键上传</button></li>
    				</ul>
    			</li>
    		</ul>
    	</div>
    	<div class="container-product-right">
    		<p><span>HOT</span><b>推荐商品</b></p>
    		<ul>
    			<li>
    				<img src="../../assets/images/hot-sale-side.jpg" />
    				<b>￥&nbsp;2510.0</b>
    			</li>
    			<li>
    				<img src="../../assets/images/hot-sale-side.jpg" />
    				<b>￥&nbsp;2510.0</b>
    			</li>
    			<li>
    				<img src="../../assets/images/hot-sale-side.jpg" />
    				<b>￥&nbsp;2510.0</b>
    			</li>
    			<li>
    				<img src="../../assets/images/hot-sale-side.jpg" />
    				<b>￥&nbsp;2510.0</b>
    			</li>
    		</ul>
    	</div>
    </div>
  </div>
 </div>
</template>

<script>
	import Vue from 'vue'
	// window.onload = function () {
	// 	if(parseInt($("#more").parent().css('height')) <= 50 && this.subs!==undefined) {
	// 		$('#more').css({display: 'inline-block'})
	//   }
	// }
	export default {
	  data () {
	    return {
	      categories: [],
	      subs: [],
	      pageinfo: '',
	      lists: [],
	      msg: 'not loader '
	    }
	  },
	  mounted () {
	    this.$http.get('/cooka-store-web/allStoreProducts?storeId=2')
	    .then(function (res) {
	    	this.categories = res.data.categories
	    	this.subs = res.data.categories[0].sub
	    	console.log(res.data.categories)
	    	this.pageinfo = res.data.pageinfo
	    	this.lists = res.data.pageinfo.list
	    },
	    function (res) {
	    	console.log(res)
	    })
	  },
	  methods : {
	  	moreOver : function (e) {
	  		$(e.target.parentNode).css({maxHeight: '500px'})
	  	},
	  	moreOut : function (e) {
	  		$(e.target.parentNode).css({maxHeight: '50px'})
	  	}
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->