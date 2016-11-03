<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/SellerAllProduct.less';
</style>
<template>
<div id='sellerAllProduct'>
	<div class="sellerAllProduct-header">
		<div class="row sellerAllProduct-header-nav">
			<div class="container">
				<ul>
					<li>您好，欢迎光临柯咔商城！</li>
					<li><a href="">请登录</a> | <a href="">免费注册</a></li>
					<li><a href="">收藏本站</a></li>
					<li><a href="">商家入驻</a></li>
				</ul>
			</div>
		</div>
		<div class="row sellerAllProduct-header-info">
			<div class="container">
				<link rel="stylesheet" class="icon-guanzhudianjia">
				<ul>
					<li><b>七匹狼专卖店</b><span>+关注本店</span></li>
					<li>
						<link rel="stylesheet" class="icon-shimingyanzheng">实名验证
						<link rel="stylesheet" class="icon-strenzheng">实体认证
					</li>
					<li>
						<link rel="stylesheet" class="icon-dizhi">广东省广州市 沙河区 灏丰批发市场 1202档
					</li>
				</ul>
				<p>
					<select name="">
						<option value="">商品</option>
					</select>
					<input type="text" placeholder="全场优惠活动火热进行中">
					<button>搜本店</button>
				</p>
			</div>
		</div>
	</div>
	<div class="container sellerAllProduct">
  	<div class="row sellerAllProduct-list">
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
    <nav class="row sellerAllProduct-nav">
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
    <div class="row sellerAllProduct-product">
    	<div class="sellerAllProduct-product-left">
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
    	<div class="sellerAllProduct-product-right">
    		<p><span>HOT</span><b>推荐商品</b></p>
    		<ul>
    			<li>
    				<a href="">
    					<img src="../../assets/images/hot-sale-side.jpg" />
    				</a>
    				<b>￥&nbsp;2510.0</b>
    			</li>
    			<li>
    				<a href="">
    					<img src="../../assets/images/hot-sale-side.jpg" />
    				</a>
    				<b>￥&nbsp;2510.0</b>
    			</li>
    			<li>
    				<a href="">
    					<img src="../../assets/images/hot-sale-side.jpg" />
    				</a>
    				<b>￥&nbsp;2510.0</b>
    			</li>
    			<li>
    				<a href="">
    					<img src="../../assets/images/hot-sale-side.jpg" />
    				</a>
    				<b>￥&nbsp;2510.0</b>
    			</li>
    		</ul>
    	</div>
    </div>
  </div>
  <CkPagination :pageNum="pageNum" :pages="pages" :prePage="prePage" :nextPage="nextPage"></CkPagination>
 	<footerComponent></footerComponent>
 </div>
</template>

<script>
	import Vue from 'vue'
	import footerComponent from 'components/footer'
	import CkPagination from 'components/CkPagination'
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
	      msg: 'not loader ',
	      pageNum: 1,
	      nextPage: 0,
	      prePage: 0,
	      pages: 0
	    }
	  },
	  mounted () {
	    this.$http.get('/cooka-store-web/allStoreProducts')
	    .then(function (res) {
	    	console.log(res.data)
	    	this.pageNum = res.data.pageinfo.pageNum
	    	this.nextPage = res.data.pageinfo.nextPage
	    	this.prePage = res.data.pageinfo.prePage
	    	this.pages = res.data.pageinfo.pages
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
	  },
	  components: {
	  	CkPagination,
	  	footerComponent
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->