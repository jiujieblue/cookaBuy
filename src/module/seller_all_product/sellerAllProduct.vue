<style lang="less">
	@import '../../assets/css/icons.css';
	@import '../../assets/css/bootstrap.css';
	@import '../../assets/less/SellerAllProduct.less';
</style>
<template>
<div id='sellerAllProduct'>
	<div class="sellerAllProduct-header">
		<div class="sellerAllProduct-header-nav">
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
					<li><b>七匹狼专卖店</b><button>+关注本店</button></li>
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
		    	<ul ref="catsUl">
		    		<li v-for="(cat,index) in cats">
		    			<a href="#">{{ cat.name }}</a>
		    		</li>
		    	</ul>
		    	<span v-on:mouseover="moreOver" v-on:mouseout="moreOut" id="more" :class="{HeiBig : isHeiBig}">更多</span>
	    	</div>
	    </div>
  	</div>
    <nav class="row sellerAllProduct-nav">
    	<ul>
    		<li v-if="false">销量<i></i></li>
    		<li @click="sorting($event,'list','price',0)">上新时间<i :class="{sorting : list}"></i></li>
    		<li @click="sorting($event,'price','list',1)">价格<i :class="{sorting : price}"></i></li>
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
    			<li v-for="(product,index) in products">
    				<img :src="product.pic_url" alt="产品图片">
    				<ul>
    					<li><b>￥&nbsp;{{ product.price }}</b><span rel="stylesheet" class="icon-shoucang"></span></li>
    					<li>{{ product.title }}</li>
    					<li><span>#{{ product.num_iid }}</span><button>一键上传</button></li>
    				</ul>
    			</li>
    		</ul>
    	</div>
    	<div class="sellerAllProduct-product-right">
    		<p><span>HOT</span><b>推荐商品</b></p>
    		<ul>
    			<li v-for="(showcase,index) in showcases">
    				<a href="">
    					<img :src="showcase.pic_url" />
    				</a>
    				<b>￥&nbsp;{{ showcase.price }}</b>
    			</li>
    		</ul>
    	</div>
    </div>
  </div>
  <CkPagination :pages="total_pages" :pageNum="page_number" @submitPage="subPage"></CkPagination>
 	<footerComponent></footerComponent>
 </div>
</template>

<script>
	import Vue from 'vue'
	import footerComponent from 'components/footer'
	import CkPagination from 'components/CkPagination'
	
	export default {
	  data () {
	    return {
	      products: [],
	      cats: [],
	      page_number: Number,
	      total_pages: Number,
	      list: true,
	      price: true,
	      isSorting: false,
	      showcases: [],
	      paixu: '',
	      paixuRules: '',
	      isHeiBig: false
	    }
	  },
	  mounted () {
	  	var me = this

	    this.$http.get('/api/items?store_id=7&type=all&page=1&page_size=12')
	    .then(function (res) {
		    me.cats = res.data.cats
	    	me.products = res.data.data
	    	me.page_number = res.data.page_number
	    	me.total_pages = res.data.total_pages
	    	if(parseInt($(me.$refs.catsUl).css('height')) > 50) {
	  			me.isHeiBig = true
			  }
	    },
	    function (res) {
	    	console.log(res)
	    })
	    this.$http.get('/api/items?store_id=7&type=showcase&page_size=4&page=1')
	    .then(function (res) {
	    	me.showcases = res.data.data
	    },
	    function (res) {
	    	console.log(res)
	    })

	  },
	  methods : {
	  	// 商品分类过多就隐藏   鼠标事件让其显示
	  	moreOver : function (e) {
				if(parseInt($(this.$refs.catsUl).css('height')) > 50) {
	  			$(e.target.parentNode).css({maxHeight: '500px'})
			  }
	  	},
	  	moreOut : function (e) {
	  		$(e.target.parentNode).css({maxHeight: '60px'})
	  	},
	  	// 分页的跳转
	  	subPage (n) {
	  		var me = this
	  		this.$http.get('/api/items?store_id=7&type=all&order=desc_price&page_size=12&page='+ n + me.paixu + me.paixuRules)
		    .then(function (res) {
		    	me.products = res.data.data
		    	me.page_number = res.data.page_number
		    	me.total_pages = res.data.total_pages
		    },
		    function (res) {
		    	console.log(res)
		    })
		    this.$http.get('/api/items?store_id=7&type=showcase&page_size=4&page='+ n + me.paixu + me.paixuRules)
		    .then(function (res) {
		    	me.showcases = res.data.data
		    },
		    function (res) {
		    	console.log(res)
		    })
	  	},
	  	// 排序的规则
	  	sorting (e,str1,str2,n) {
	  		$(e.target).addClass('active').siblings('.active').removeClass('active')
	  		var me = this
	  		this[str2] = true
	  		this.paixuRules = str1
	  		if(this[str1]){
	  			this.paixu = '&order=asc_'
	  		}else{
	  			this.paixu = '&order=desc_'
	  		}
	  		this[str1] = !this[str1]
	  		this.$http.get('/api/items?store_id=7&type=all&page_size=12&page=1'+ me.paixu + me.paixuRules)
		    .then(function (res) {
		    	me.products = res.data.data
		    	me.page_number = res.data.page_number
		    	me.total_pages = res.data.total_pages
		    },
		    function (res) {
		    	console.log(res)
		    })
	  	}
	  },
	  components: {
	  	CkPagination,
	  	footerComponent
	  }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->